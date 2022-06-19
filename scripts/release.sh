TAG_PREFIX=ghcr.io/jchild3rs

SHORT_SHA=$( git rev-parse --short HEAD )
echo "::set-output name=short_sha::${SHORT_SHA}"

BRANCH_NAME=$( git rev-parse --abbrev-ref HEAD | sed -E -e 's/refs\/heads\/(.*)/\1/g' )
echo "::set-output name=branch_name::${BRANCH_NAME}"

if [ "$BRANCH_NAME" == "main" ];
then
  BRANCH_TAG="latest"
else
  BRANCH_TAG=$(
  echo "${BRANCH_NAME}" \
    | sed -e 's/[^a-zA-Z0-9]/-/g' \
    | tr '[:upper:]' '[:lower:]' \
    | cut -c 1-32 \
    | sed -e 's/[^a-z0-9]*$//'
  )
fi

echo "::set-output name=branch_tag::${BRANCH_TAG}"

VERSION=$( date -u '+%Y%m%d' )-$SHORT_SHA
echo "::set-output name=version::${VERSION}"


docker build ../.. -f ./Dockerfile \
  --build-arg APP=$APP \
  --build-arg GPR_USER_PAT=$GITHUB_TOKEN \
  -t $TAG_PREFIX/$APP:$BRANCH_TAG \
  -t $TAG_PREFIX/$APP:$VERSION

docker push $TAG_PREFIX/$APP:$BRANCH_TAG
docker push $TAG_PREFIX/$APP:$VERSION
