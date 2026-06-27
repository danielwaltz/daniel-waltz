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
ENV PNPM_CONFIG_STORE_DIR="/.pnpm-store"
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
ENV NODE_COMPILE_CACHE=/tmp/node-compile-cache
RUN npm i -g corepack@latest && corepack enable

# Development
FROM tooling AS development
CMD ["bash", "-c", "pnpm i && pnpm dev"]

# Dependencies
FROM tooling AS dependencies
COPY package.json pnpm-*.yaml ./
RUN pnpm ci

# Builder
FROM dependencies AS builder
COPY . .
RUN pnpm postinstall && pnpm build

# Production
FROM base AS production
RUN apt-get update && \
    apt-get install -y --no-install-recommends curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    groupadd -r -g 1001 app && \
    useradd -r -u 1001 -g app app
USER app
COPY --chown=app:app --from=builder /app/.output ./.output
ENV NODE_ENV=production
EXPOSE 3000
HEALTHCHECK CMD ["curl", "-f", "http://localhost:3000/health"]
CMD ["node", ".output/server/index.mjs"]
