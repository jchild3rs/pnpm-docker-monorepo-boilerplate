import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from 'ui'
import { PageTypeEnum } from '../lib/page-types'
import { Post } from '../lib/posts'

export default function PostList(props: { posts: Post[]; type: PageTypeEnum }) {
  const router = useRouter()

  return (
    <>
      <ul className="mb-4 divide-y overflow-hidden rounded-lg shadow">
        {props.posts?.map((post) => (
          <li key={post.id}>
            <Link href={`/posts-${props.type}/${post.id}`}>
              <a
                // href={`/posts-${props.type}/${post.id}`}
                className="flex items-center justify-between bg-white p-4 leading-none text-gray-800 text-indigo-600"
              >
                {post.title}
                <svg
                  role="presentation"
                  className="h-4 w-4 fill-current opacity-75"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Button size="small" onClick={() => router.back()}>
        Back
      </Button>
    </>
  )
}
