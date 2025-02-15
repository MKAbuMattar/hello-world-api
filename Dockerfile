FROM node:jod-alpine@sha256:15dfca1d0af4f061a902e240d3b0012f4701aafcdf823d99525f2a73a12e6a4d AS base

# Install pnpm
RUN npm install -g pnpm@latest

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
