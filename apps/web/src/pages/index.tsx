import Layout from '../components/layout.server'
import { PageTypeEnum } from '../lib/page-types'

export default function Web() {
  return (
    <Layout pageTitle="Examples">
      <ul>
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
