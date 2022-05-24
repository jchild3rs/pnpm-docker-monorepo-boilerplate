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
COPY apps/ag/package.json /opt/app/apps/ag/package.json
COPY apps/ag/next.config.js /opt/app/apps/ag/next.config.js
RUN --mount=type=cache,id=pnpm-store,target=/opt/app/.pnpm-store\
  pnpm install --filter ag --frozen-lockfile
COPY apps/ag/ /opt/app/apps/ag
RUN pnpm --filter ag build

FROM base AS prod
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=build --chown=nextjs:nodejs /opt/app/apps/ag/.next/standalone/ /opt/app/apps/ag/standalone
COPY --from=build --chown=nextjs:nodejs /opt/app/apps/ag/.next/static/ /opt/app/apps/ag/static
COPY --from=build /opt/app/apps/ag/public /opt/app/apps/ag/public

WORKDIR /opt/app/apps/ag/standalone/apps/ag
EXPOSE 3000
ENTRYPOINT [ "node", "server.js" ]
