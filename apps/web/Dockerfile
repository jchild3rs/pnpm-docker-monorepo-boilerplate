# ----------------------------------------------------------
# Install deps on lockfile changes.
# ----------------------------------------------------------
FROM node:16.14.2 AS installer
WORKDIR /app
ARG APP
ENV APP=$APP
ARG GPR_USER_PAT
RUN printf "@rentpath:registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=$GPR_USER_PAT" > $HOME/.npmrc
RUN npm i -g pnpm@7.x
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/app/.pnpm-store\
      pnpm fetch

# ----------------------------------------------------------
# Build packages & app source.
# ----------------------------------------------------------
FROM installer AS builder
WORKDIR /app
ADD . ./
RUN --mount=type=cache,id=pnpm-store,target=/app/.pnpm-store\
      pnpm install -r --offline
RUN pnpm --if-present --filter "./packages/**" build
ENV NEXT_TELEMETRY_DISABLED 1
RUN --mount=type=cache,id=next-build-store,target=/app/apps/${APP}/.next\
      pnpm --filter "./apps/${APP}" build

# ----------------------------------------------------------
# Copy build artifacts and start app.
# ----------------------------------------------------------
FROM node:16.14.2-alpine AS runner
WORKDIR /app

ARG APP
ARG PORT=3000

ENV PORT=$PORT
ENV APP=$APP
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/${APP}/package.json ./package.json
COPY --from=builder /app/apps/${APP}/public ./apps/${APP}/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/${APP}/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/${APP}/.next/static ./apps/${APP}/.next/static

USER nextjs

EXPOSE ${PORT}
ENTRYPOINT node "./apps/${APP}/server.js"
