import { GetServerSidePropsContext } from 'next'
import { Suspense } from 'react'
import Page from '../../components/page.client'
import PostList from '../../components/post-list.client'
import PostListSkeleton from '../../components/post-list.skeleton'
import { PageTypeEnum } from '../../lib/page-types'
import { loadAllPosts } from '../../lib/posts'
import useData from '../../lib/use-data'

function PostListWithData() {
  const { data: posts } = useData('post-list', loadAllPosts)

  return <PostList type={PageTypeEnum.REACT_SERVER_COMPONENTS} posts={posts || []} />
}

export default function PostsSSG() {
  return (
    <Page pageTitle="test">
      <Suspense fallback={<PostListSkeleton />}>
        <PostListWithData />
      </Suspense>
    </Page>
  )
}

export const getServerSideProps = async (_ctx: GetServerSidePropsContext) => {
  return {
    props: { posts: [] }
  }
}
