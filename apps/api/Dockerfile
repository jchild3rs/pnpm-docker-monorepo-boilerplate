# # ----------------------------------------------------------
# # Install deps on lockfile changes.
# # ----------------------------------------------------------
# FROM node:16.14.2 AS installer
# WORKDIR /app
# ARG APP
# ENV APP=$APP
# ARG GPR_USER_PAT
# RUN printf "@rentpath:registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=$GPR_USER_PAT" > $HOME/.npmrc
# RUN npm i -g pnpm@7.x
# COPY pnpm-lock.yaml pnpm-workspace.yaml ./
# RUN --mount=type=cache,id=pnpm-store,target=/app/.pnpm-store\
#       pnpm fetch

# # ----------------------------------------------------------
# # Build packages & app source.
# # ----------------------------------------------------------
# FROM installer AS builder
# WORKDIR /app
# ARG APP
# ADD . ./
# RUN --mount=type=cache,id=pnpm-store,target=/app/.pnpm-store\
#       pnpm install -r --offline
# RUN pnpm --if-present --filter "./packages/**" build
# RUN pnpm --filter $APP build
# RUN find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
# RUN --mount=type=cache,id=pnpm-store,target=/app/.pnpm-store\
#       pnpm install -r --prod --offline --ignore-scripts --frozen-lockfile

# ----------------------------------------------------------
# Expect install and build to have already happened...
# ----------------------------------------------------------
FROM node:16.14.2-alpine AS builder
WORKDIR /app
ADD . .

# ----------------------------------------------------------
# Copy build artifacts and start app.
# ----------------------------------------------------------
FROM node:16.14.2-alpine AS runner
WORKDIR /app

ARG APP
ENV APP=$APP
ARG PORT=3000
ENV PORT=$PORT
ENV NODE_ENV production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules/ ./node_modules
COPY --from=builder /app/apps/${APP}/package.json ./apps/${APP}/package.json
COPY --from=builder /app/apps/${APP}/node_modules/ ./apps/${APP}/node_modules
COPY --from=builder /app/apps/${APP}/dist ./apps/${APP}/dist

EXPOSE ${PORT}
ENTRYPOINT node "./apps/${APP}/dist/main.js"
