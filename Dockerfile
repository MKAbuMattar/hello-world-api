FROM node:jod-alpine@sha256:6e80991f69cc7722c561e5d14d5e72ab47c0d6b6cfb3ae50fb9cf9a7b30fdf97 AS base

# Environment variables
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack and install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy application code
COPY . /app
WORKDIR /app

# Install dependencies stage for production
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Build stage for the application
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# Final stage
FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

# Expose port and start the application
EXPOSE 8080

# Set ARGs and ENVs
ARG NODE_ENV=""
ARG PORT=""
ARG HOST=""
ARG CORS_WHITELIST=""
ARG API_KEY=""
ARG MONGODB_URI=""
ARG MONGO_MAX_LIMIT=""
ARG MONGO_DEFAULT_LIMIT=""

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV HOST=${HOST}
ENV CORS_WHITELIST=${CORS_WHITELIST}
ENV API_KEY=${API_KEY}
ENV MONGODB_URI=${MONGODB_URI}
ENV MONGO_MAX_LIMIT=${MONGO_MAX_LIMIT}
ENV MONGO_DEFAULT_LIMIT=${MONGO_DEFAULT_LIMIT}

CMD [ "pnpm", "start" ]
