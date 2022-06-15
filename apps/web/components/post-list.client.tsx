import Link from 'next/link'
import { useRouter } from 'next/router'
import { Post } from '../lib/posts'
import { PageTypeEnum } from '../lib/page-types'

export default function PostList(props: {
  posts: Post[]
  type: PageTypeEnum
}) {
  const router = useRouter()

  return (
    <ul>
      <button onClick={() => router.back()}>Back</button>
      {props.posts?.map((post) => (
        <li key={post.id}>
          <Link href={`/posts-${props.type}/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
