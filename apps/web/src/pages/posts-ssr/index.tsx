import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import PostList from '../../components/post-list.client'
import { loadAllPosts } from '../../lib/posts'
import { PageTypeEnum } from '../../lib/page-types'
import Page from '../../components/page.client'

export default function PostsSSR(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Page pageTitle="Posts (SSR)">
      <PostList type={PageTypeEnum.SERVER_RENDERED} posts={props.posts} />
    </Page>
  )
}

export const getServerSideProps = async (_ctx: GetServerSidePropsContext) => {
  const posts = await loadAllPosts()
  return {
    props: { posts }
  }
}
