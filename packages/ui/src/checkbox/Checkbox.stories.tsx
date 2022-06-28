import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Checkbox } from '../'

export default {
  title: 'UI Components/Primitives/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  parameters: {
    actions: { argTypesRegex: '^on.*', handles: ['change'] },
    a11y: { config: { rules: [{ id: 'label', enabled: false }] } }
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  id: 'Uncontrolled-example'
}

export const Checked = Template.bind({})
Checked.storyName = 'Checked (controlled)'
Checked.args = {
  id: 'checked-example',
  checked: true
}

export const UnChecked = Template.bind({})
UnChecked.storyName = 'Not checked (controlled)'
UnChecked.args = {
  id: 'unchecked-example',
  checked: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'disabled-example',
  disabled: true
}
