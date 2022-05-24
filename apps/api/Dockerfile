FROM node:16-alpine AS base
RUN npm i -g pnpm@6.32.9
WORKDIR /opt/app
# COPY pnpm-lock.yaml pnpm-workspace.yaml /opt/app/
# RUN --mount=type=cache,id=pnpm-store,target=/opt/app/.pnpm-store\
#   pnpm fetch

FROM base AS build
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /opt/app/
COPY apps/api/package.json /opt/app/apps/api/package.json
RUN echo "//npm.pkg.github.com/:_authToken=$GPR_USER_PAT\n@rentpath:registry=https://npm.pkg.github.com" > $HOME/.npmrc
RUN --mount=type=cache,id=pnpm-store,target=/opt/app/.pnpm-store\
  pnpm install --filter api --frozen-lockfile
COPY apps/api/ /opt/app/apps/api
RUN pnpm --filter api build

FROM base AS prod
COPY pnpm-lock.yaml pnpm-workspace.yaml /opt/app/
COPY apps/api/package.json /opt/app/apps/api/package.json
RUN echo "//npm.pkg.github.com/:_authToken=$GPR_USER_PAT\n@rentpath:registry=https://npm.pkg.github.com" > $HOME/.npmrc
RUN --mount=type=cache,id=pnpm-store,target=/opt/app/.pnpm-store\
  pnpm install --filter api --frozen-lockfile --prod && ls -a /opt/app/.pnpm-store
COPY --from=build /opt/app/apps/api/dist/ /opt/app/apps/api/dist/
WORKDIR /opt/app/apps/api
EXPOSE 3000
ENTRYPOINT [ "pnpm", "start" ]