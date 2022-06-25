import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Layout from '../../components/layout.server'
import PostDetail from '../../components/post-detail.client'
import { loadPostById, loadAllPostIds } from '../../lib/posts'

export default function PostsByIdSSG(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout pageTitle={props.post.title}>
      <PostDetail post={props.post} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => ({
  props: { post: await loadPostById(params?.id as string) },
  revalidate: 10 // In seconds
})

export const getStaticPaths = async () => ({
  paths: (await loadAllPostIds()).map((id) => ({
    params: { id }
  })),
  fallback: 'blocking'
})
