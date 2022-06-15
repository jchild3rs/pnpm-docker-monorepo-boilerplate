import Link from 'next/link'
import { useRouter } from 'next/router'
import { Post } from '../lib/posts'

export default function PostDetail(props: { post: Post }) {
  const router = useRouter()

  return (
    <>
      <p>{props.post.body}</p>
      <img
        width={600}
        height={400}
        src={props.post.image}
        alt={props.post.title}
      />
      <button onClick={() => router.back()}>Back</button>
      <Link href="/">Home</Link>
    </>
  )
}
