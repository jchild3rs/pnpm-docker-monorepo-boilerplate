FROM node:16-alpine AS base
RUN npm i -g pnpm@6.32.9
RUN echo "//npm.pkg.github.com/:_authToken=$GPR_USER_PAT\n@rentpath:registry=https://npm.pkg.github.com" > $HOME/.npmrc
WORKDIR /opt/app
# COPY pnpm-lock.yaml pnpm-workspace.yaml /opt/app/
# RUN --mount=type=cache,id=pnpm-store,target=/opt/app/.pnpm-store\
#   pnpm fetch

FROM base AS build
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /opt/app/
COPY packages/ /opt/app/packages
COPY apps/docs/package.json /opt/app/apps/docs/package.json
COPY apps/docs/next.config.js /opt/app/apps/docs/next.config.js
RUN --mount=type=cache,id=pnpm-store,target=/opt/app/.pnpm-store\
  pnpm install --filter docs --frozen-lockfile
COPY apps/docs/ /opt/app/apps/docs
RUN pnpm --filter docs build

FROM base AS prod
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=build --chown=nextjs:nodejs /opt/app/apps/docs/.next/standalone/ /opt/app/apps/docs/standalone
COPY --from=build --chown=nextjs:nodejs /opt/app/apps/docs/.next/static/ /opt/app/apps/docs/static
COPY --from=build /opt/app/apps/docs/public /opt/app/apps/docs/public

WORKDIR /opt/app/apps/docs/standalone/apps/docs
EXPOSE 3000
ENTRYPOINT [ "node", "server.js" ]
