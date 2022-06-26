import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LeadForm, Modal } from '..'

export default {
  title: 'UI Components/Primitives/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.storyName = 'With Form'
Default.args = {
  isOpen: true,
  title: 'Example Title',
  children: (
    <LeadForm
      onSubmit={function (event): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
}
