ARG NODE_VERSION=24.1.0

# Base
FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app

# Tooling
FROM base AS tooling
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN npm i -g corepack@latest && \
    corepack enable && \
    pnpm config -g set store-dir /.pnpm-store

# Development
FROM tooling AS development
CMD ["bash", "-c", "pnpm i && pnpm dev"]

# Dependencies
FROM tooling AS dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile

# Builder
FROM dependencies AS builder
COPY . .
RUN pnpm build

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
