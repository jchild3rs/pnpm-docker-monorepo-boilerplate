import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next'
import Page from '../../components/page.client'
import PostDetail from '../../components/post-detail.client'
import { loadPostById } from '../../lib/posts'

export default function PostsByIdSSR(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Page pageTitle={props.post.title}>
      <PostDetail post={props.post} />
    </Page>
  )
}

export const getServerSideProps = async ({ params }: GetStaticPropsContext) => ({
  props: { post: await loadPostById(params?.id as string) }
})
