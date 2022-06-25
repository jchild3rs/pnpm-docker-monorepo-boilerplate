import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import PostList from '../../components/post-list.client'
import { loadAllPosts } from '../../lib/posts'
import { PageTypeEnum } from '../../lib/page-types'
import Layout from '../../components/layout.server'
console.log(Layout)

export default function PostsSSG(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout pageTitle="Posts (SSG)">
      <PostList type={PageTypeEnum.STATICALLY_GENERATED} posts={props.posts || []} />
    </Layout>
  )
}

export const getStaticProps = async (_ctx: GetStaticPropsContext) => {
  const posts = await loadAllPosts()
  return {
    props: { posts }
  }
}
