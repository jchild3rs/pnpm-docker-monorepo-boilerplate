import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next'
import { Suspense } from 'react'
import Page from '../../components/page.client'
import PostDetail from '../../components/post-detail.client'
import Skeleton from '../../components/skeleton'
import { loadPostById } from '../../lib/posts'
import useData from '../../lib/use-data'

function PostDetailWithData({ id }: { id: string }) {
  const { data: post } = useData('post-' + id, () => loadPostById(id))

  return <PostDetail post={post} />
}

export default function PostsByIdSSR(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Page pageTitle="test">
      <Suspense fallback={<Skeleton />}>
        <PostDetailWithData id={props.id} />
      </Suspense>
    </Page>
  )
}

export const getServerSideProps = async ({ params }: GetStaticPropsContext) => ({
  props: { id: params?.id as string }
})
