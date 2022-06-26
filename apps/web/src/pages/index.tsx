import { useState } from 'react'
import { Alert, Button, LeadForm, Modal } from 'ui'
import Layout from '../components/layout.server'
import { PageTypeEnum } from '../lib/page-types'

function LeadFormModal() {
  const [open, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Button type="button" onClick={openModal}>
        Open dialog
      </Button>

      <Modal isOpen={open} onClose={closeModal} title="Welcome!">
        <div className="mt-4">
          <a href="#">
            <Alert badge="NEW" label="Testing one two three." />
          </a>
        </div>
        <LeadForm
          onSubmit={(e) => {
            console.dir(e.target)

            e.preventDefault()
            closeModal()
          }}
        />
      </Modal>
    </>
  )
}

export default function Web() {
  return (
    <Layout pageTitle="Examples">
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
    </Layout>
  )
}
