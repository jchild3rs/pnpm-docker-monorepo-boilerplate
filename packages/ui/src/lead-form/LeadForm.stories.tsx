import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, Checkbox, Input, Label, Radio, LeadForm } from '../'

export default {
  title: 'UI Components/Forms/Lead Form',
  component: LeadForm,
  args: {
    // don't fire submit
    onSubmit: (e) => {
      e.preventDefault()
    }
  },
  argTypes: { onSubmit: { action: 'submitted' } },
  subcomponents: {
    Button,
    Checkbox,
    Input,
    Label,
    Radio
  },
  parameters: {
    actions: { argTypesRegex: '^on.*', handles: ['submit'] },
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof LeadForm>

const Template: ComponentStory<typeof LeadForm> = (args) => <LeadForm {...args} />

export const Default = Template.bind({})
