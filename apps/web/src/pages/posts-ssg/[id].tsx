import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Page from '../../components/page.client'
import PostDetail from '../../components/post-detail.client'
import { loadAllPostIds, loadPostById } from '../../lib/posts'

export default function PostsByIdSSG(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page pageTitle={props.post.title}>
      <PostDetail post={props.post} />
    </Page>
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
