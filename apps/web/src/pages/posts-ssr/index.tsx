import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next'
import PostList from '../../components/post-list.client'
import { loadAllPosts } from '../../lib/posts'
import { PageTypeEnum } from '../../lib/page-types'
import Layout from '../../components/layout.server'

export default function PostsSSR(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout pageTitle="Posts (SSR)">
      <PostList type={PageTypeEnum.SERVER_RENDERED} posts={props.posts} />
    </Layout>
  )
}

export const getServerSideProps = async (_ctx: GetStaticPropsContext) => {
  const posts = await loadAllPosts()
  return {
    props: { posts }
  }
}
