import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input, Label } from '../'

export default {
  title: 'UI Components/Primitives/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  parameters: {
    actions: { argTypesRegex: '^on.*', handles: ['input'] },
    a11y: { config: { rules: [{ id: 'label', enabled: false }] } }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'default-input-example'
}
