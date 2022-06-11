FROM node:16-alpine AS base
RUN npm i -g pnpm@6.32.9
RUN echo "//npm.pkg.github.com/:_authToken=$GPR_USER_PAT\n@rentpath:registry=https://npm.pkg.github.com" > $HOME/.npmrc
WORKDIR /opt/app
COPY pnpm-lock.yaml pnpm-workspace.yaml /opt/app/
RUN --mount=type=cache,id=pnpm-store,target=/opt/app/.pnpm-store\
  pnpm fetch

FROM base AS build
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /opt/app/
COPY packages/ /opt/app/packages
COPY apps/web/package.json /opt/app/apps/web/package.json
RUN --mount=type=cache,id=pnpm-store,target=/opt/app/.pnpm-store\
  pnpm install --offline --filter web --frozen-lockfile
COPY apps/web/ /opt/app/apps/web
RUN pnpm --filter web build

FROM base AS prod
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=build --chown=nextjs:nodejs /opt/app/apps/web/.next/standalone/ /opt/app/apps/web/standalone
COPY --from=build --chown=nextjs:nodejs /opt/app/apps/web/.next/static/ /opt/app/apps/web/static
COPY --from=build /opt/app/apps/web/public /opt/app/apps/web/public

WORKDIR /opt/app/apps/web/standalone/apps/web
EXPOSE 3000
ENTRYPOINT [ "node", "server.js" ]
