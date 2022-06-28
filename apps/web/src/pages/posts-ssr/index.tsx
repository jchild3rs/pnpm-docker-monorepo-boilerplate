import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Page from '../../components/page.client'
import PostList from '../../components/post-list.client'
import { PageTypeEnum } from '../../lib/page-types'
import { loadAllPosts } from '../../lib/posts'

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
