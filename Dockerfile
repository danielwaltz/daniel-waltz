ARG NODE_VERSION=22.11.0

# Base
FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app

# Dependencies
FROM base AS dependencies
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm i --frozen-lockfile

# Development
FROM dependencies AS development
COPY . .
EXPOSE 3000
CMD ["pnpm", "dev"]

# Build
FROM dependencies AS build
COPY . .
RUN pnpm build

# Production
FROM base AS production
RUN groupadd -r -g 1001 app && useradd -r -u 1001 -g app app
USER app
COPY --chown=app:app --from=build /app/.output ./.output
ENV NODE_ENV=production
EXPOSE 3000
HEALTHCHECK CMD curl -fs http://localhost:3000/health || exit 1
CMD ["node", ".output/server/index.mjs"]
