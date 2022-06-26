import PostList from '../../components/post-list.client'
import { loadAllPosts, Post } from '../../lib/posts'
import { PageTypeEnum } from '../../lib/page-types'
import { Suspense } from 'react'
import Skeleton from '../../components/skeleton'
import useData from '../../lib/use-data'
import { GetServerSidePropsContext } from 'next'
import Page from '../../components/page.client'

function PostListWithData() {
  const { data: posts } = useData('post-list', loadAllPosts)

  return <PostList type={PageTypeEnum.REACT_SERVER_COMPONENTS} posts={posts || []} />
}

export default function PostsSSG() {
  return (
    <Page pageTitle="test">
      <Suspense fallback={<Skeleton />}>
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
