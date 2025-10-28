# Multi-stage Dockerfile for Vite + React (production build served by Nginx)

# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps first (better layer cache)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* .npmrc* ./
RUN if [ -f package-lock.json ]; then \
      npm ci; \
    else \
      npm install; \
    fi

# Copy the rest and build
COPY . .
RUN npm run build

# 2) Runtime stage (Nginx)
FROM nginx:alpine AS runner

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy SPA-friendly Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
