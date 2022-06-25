import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next'
import Layout from '../../components/layout.server'
import PostDetail from '../../components/post-detail.client'
import { loadPostById } from '../../lib/posts'

export default function PostsByIdSSR(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Layout pageTitle={props.post.title}>
      <PostDetail post={props.post} />
    </Layout>
  )
}

export const getServerSideProps = async ({ params }: GetStaticPropsContext) => ({
  props: { post: await loadPostById(params?.id as string) }
})
