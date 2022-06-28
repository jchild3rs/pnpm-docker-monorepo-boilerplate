import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useEffect, useState } from 'react'

import { LeadForm, Modal } from '..'

export default {
  title: 'UI Components/Layout/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [
    (Story, ctx) => {
      let [open, setIsOpen] = useState(ctx.args.isOpen)

      useEffect(
        function handleOpenPropChange() {
          setIsOpen(ctx.args.isOpen)
        },
        [ctx.args.isOpen]
      )

      function closeModal() {
        setIsOpen(false)
      }

      function openModal() {
        setIsOpen(true)
      }

      return (
        <>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Open dialog
            </button>
          </div>

          <Story
            args={{
              ...ctx.args,
              isOpen: open,
              onClose: closeModal
            }}
          />
        </>
      )
    }
  ]
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.storyName = 'With Form'
Default.args = {
  isOpen: false,
  title: 'Example Title',
  children: (
    <LeadForm
      onSubmit={function (event): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
}
