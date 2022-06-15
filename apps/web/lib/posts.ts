export type Post = {
  body: string
  id: string
  title: string
  userId: number
  image: string
}

function formatPost(post: Post) {
  return {
    ...post,
    id: String(post.id),
    image:
      'https://via.placeholder.com/600x400?text=' + post.title,
  }
}

export async function loadPostById(id: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  )

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }

  return res.json().then(formatPost)
}

export async function loadAllPosts(): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`,
  )

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }

  return res
    .json()
    .then((posts: Post[]) => posts.map(formatPost))
}

export async function loadAllPostIds(): Promise<string[]> {
  return (await loadAllPosts()).map((post) => post.id)
}
