import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from 'ui'
import { Post } from '../lib/posts'

export default function PostDetail(props: { post: Post }) {
  const router = useRouter()

  return (
    <>
      <article>
        <img
          width={600}
          height={400}
          src={props.post.image}
          alt={props.post.title}
          className="float-right"
        />
        <p className="mt-4 mb-8 border-l-8 pl-4 text-2xl italic text-gray-500">{props.post.body}</p>
      </article>
      <Button size="small" onClick={() => router.back()}>
        Back
      </Button>{' '}
      <Link href="/">Home</Link>
    </>
  )
}
