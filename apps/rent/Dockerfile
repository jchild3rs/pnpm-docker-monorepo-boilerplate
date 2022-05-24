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
COPY apps/rent/package.json /opt/app/apps/rent/package.json
RUN --mount=type=cache,id=pnpm-store,target=/opt/app/.pnpm-store\
  pnpm install --offline --filter rent --frozen-lockfile
COPY apps/rent/ /opt/app/apps/rent
RUN pnpm --filter rent build

FROM base AS prod
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=build --chown=nextjs:nodejs /opt/app/apps/rent/.next/standalone/ /opt/app/apps/rent/standalone
COPY --from=build --chown=nextjs:nodejs /opt/app/apps/rent/.next/static/ /opt/app/apps/rent/static
COPY --from=build /opt/app/apps/rent/public /opt/app/apps/rent/public

WORKDIR /opt/app/apps/rent/standalone/apps/rent
EXPOSE 3000
ENTRYPOINT [ "node", "server.js" ]
