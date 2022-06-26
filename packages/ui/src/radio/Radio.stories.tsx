import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio } from '../'

export default {
  title: 'UI Components/Primitives/Radio',
  component: Radio,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  parameters: {
    actions: { argTypesRegex: '^on.*', handles: ['change'] },
    a11y: { config: { rules: [{ id: 'label', enabled: false }] } }
  }
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

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
