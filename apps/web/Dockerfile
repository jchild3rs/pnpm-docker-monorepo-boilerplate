FROM node:16-alpine as builder
WORKDIR /app
RUN npm install -g pnpm@6.32.9
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch

FROM node:16-alpine as runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
# COPY packages ./packages
COPY apps/web/public ./apps/web/public
COPY apps/web/node_modules ./apps/web/node_modules
COPY apps/web/package.json ./apps/web/package.json
COPY apps/web/.next/standalone ./apps/web/.next/standalone
COPY apps/web/.next/static ./apps/web/.next/static


# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json

# # Automatically leverage output traces to reduce image size 
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "apps/web/.next/standalone/apps/web/server.js"]