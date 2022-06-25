docker build ../.. -f ./Dockerfile \
  --build-arg APP=$APP \
  --build-arg GPR_USER_PAT=$GITHUB_TOKEN \
  -t $TAG_PREFIX/$APP:$BRANCH_TAG \
  -t $TAG_PREFIX/$APP:$VERSION

docker push $TAG_PREFIX/$APP:$BRANCH_TAG
docker push $TAG_PREFIX/$APP:$VERSION
