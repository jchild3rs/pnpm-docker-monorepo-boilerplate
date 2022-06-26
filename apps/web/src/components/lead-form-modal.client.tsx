import React, { useState } from 'react'
import { Button, Modal, Alert, LeadForm } from 'ui'

export function LeadFormModal() {
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
