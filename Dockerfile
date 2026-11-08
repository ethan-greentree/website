# syntax=docker/dockerfile:1
FROM node:25-bookworm-slim AS build

WORKDIR /app
RUN npm install --global pnpm@12.18.0

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm exec vp run build

FROM nginx:stable-alpine AS runtime

# Pick up Alpine security fixes released since the base image was published.
RUN apk upgrade --no-cache

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/

EXPOSE 80
