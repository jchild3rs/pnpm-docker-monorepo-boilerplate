import { LeadFormModal } from '../components/lead-form-modal.client'
import Page from '../components/page.client'
import { PageTypeEnum } from '../lib/page-types'

export default function Web() {
  return (
    <Page pageTitle="Examples">
      <ul className="mb-4">
        {Object.entries(PageTypeEnum).map(([key, val]) => (
          <li key={key}>
            <a href={`/posts-${val}`} className="text-blue-600">
              Posts ({val.toUpperCase()})
            </a>
          </li>
        ))}
      </ul>
      <LeadFormModal />
    </Page>
  )
}
