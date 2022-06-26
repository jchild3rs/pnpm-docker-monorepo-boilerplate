import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LeadForm } from './LeadForm'

export default {
  title: 'UI/Lead Form',
  component: LeadForm,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof LeadForm>

const Template: ComponentStory<typeof LeadForm> = (args) => <LeadForm {...args} />

export const Default = Template.bind({})
