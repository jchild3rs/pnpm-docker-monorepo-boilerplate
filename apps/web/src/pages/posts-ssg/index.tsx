import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Page from '../../components/page.client'
import PostList from '../../components/post-list.client'
import { PageTypeEnum } from '../../lib/page-types'
import { loadAllPosts } from '../../lib/posts'

export default function PostsSSG(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page pageTitle="Posts (SSG)">
      <PostList type={PageTypeEnum.STATICALLY_GENERATED} posts={props.posts || []} />
    </Page>
  )
}

export const getStaticProps = async (_ctx: GetStaticPropsContext) => {
  const posts = await loadAllPosts()
  return {
    props: { posts }
  }
}
