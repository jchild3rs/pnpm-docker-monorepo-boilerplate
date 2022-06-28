import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Button, Checkbox, Input, Label, LeadForm, Radio } from '../'

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
    backgrounds: { default: 'light' },
    actions: { argTypesRegex: '^on.*', handles: ['submit'] }
  }
} as ComponentMeta<typeof LeadForm>

const Template: ComponentStory<typeof LeadForm> = (args) => <LeadForm {...args} />

export const Default = Template.bind({})
