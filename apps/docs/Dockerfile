FROM node:16-alpine as builder
WORKDIR /app
RUN npm install -g pnpm@6.32.9
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch

FROM node:16-alpine as runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY packages ./packages
COPY apps/docs ./apps/docs

EXPOSE 3000

CMD ["node", "apps/docs/.next/standalone/apps/docs/server.js"]