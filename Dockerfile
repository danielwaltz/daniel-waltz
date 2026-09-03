ARG NODE_VERSION=24.18.0

# Base
FROM node:${NODE_VERSION}-slim AS base
ARG NUXT_PUBLIC_HOSTING_PROVIDER="self"
ENV NUXT_PUBLIC_HOSTING_PROVIDER=${NUXT_PUBLIC_HOSTING_PROVIDER}
ARG NUXT_PUBLIC_SCRIPTS_UMAMI_ANALYTICS_WEBSITE_ID
ENV NUXT_PUBLIC_SCRIPTS_UMAMI_ANALYTICS_WEBSITE_ID=${NUXT_PUBLIC_SCRIPTS_UMAMI_ANALYTICS_WEBSITE_ID}
ARG NUXT_PUBLIC_SCRIPTS_UMAMI_ANALYTICS_HOST_URL
ENV NUXT_PUBLIC_SCRIPTS_UMAMI_ANALYTICS_HOST_URL=${NUXT_PUBLIC_SCRIPTS_UMAMI_ANALYTICS_HOST_URL}
WORKDIR /app

# Tooling
FROM base AS tooling
RUN npx jup self-install && jup enable

# Development
FROM tooling AS development
CMD ["bash", "-c", "pnpm i && pnpm dev"]

# Dependencies
FROM tooling AS dependencies
COPY package.json pnpm-*.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm ci

# Builder
FROM dependencies AS builder
COPY . .
RUN pnpm build

# Production
FROM base AS production
RUN groupadd -r -g 1001 app && \
    useradd -r -l -u 1001 -g app app
USER app
COPY --chown=app:app --from=builder /app/.output ./.output
ENV NODE_ENV=production
EXPOSE 3000
HEALTHCHECK CMD ["node", "-e", "fetch('http://localhost:3000/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"]
CMD ["node", ".output/server/index.mjs"]
