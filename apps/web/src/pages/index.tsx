import Layout from '../components/layout.server'
import { PageTypeEnum } from '../lib/page-types'

export default function Web() {
  return (
    <Layout pageTitle="Examples">
      <ul className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        {Object.entries(PageTypeEnum).map(([key, val]) => (
          <li key={key}>
            <a href={`/posts-${val}`} className="text-blue-600">
              Posts ({val.toUpperCase()})
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
