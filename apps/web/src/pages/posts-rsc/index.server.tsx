import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import PostList from '../../components/post-list.client'
import { loadAllPosts } from '../../lib/posts'
import { PageTypeEnum } from '../../lib/page-types'
import Page from '../../components/page.client'

export default function PostsSSG(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page pageTitle="Posts (RSC)">
      <PostList type={PageTypeEnum.REACT_SERVER_COMPONENTS} posts={props.posts || []} />
    </Page>
  )
}

export const getStaticProps = async (_ctx: GetStaticPropsContext) => {
  const posts = await loadAllPosts()
  return {
    props: { posts }
  }
}
