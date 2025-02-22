ARG NODE_VERSION=22.14.0

# Base
FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable pnpm && pnpm config -g set store-dir /.pnpm-store

# Development
FROM base AS development
STOPSIGNAL SIGKILL
CMD ["sh", "-c", "pnpm i --config.unsafePerm=true && pnpm dev"]

# Dependencies
FROM base AS dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile

# Builder
FROM dependencies AS builder
COPY . .
RUN pnpm build

# Production
FROM base AS production
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
RUN groupadd -r -g 1001 app && useradd -r -u 1001 -g app app
USER app
COPY --chown=app:app --from=builder /app/.output ./.output
ENV NODE_ENV=production
EXPOSE 3000
HEALTHCHECK CMD ["curl", "-f", "http://localhost:3000/health"]
CMD ["node", ".output/server/index.mjs"]
