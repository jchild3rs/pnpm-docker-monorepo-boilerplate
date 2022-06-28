import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Label } from '../'

export default {
  title: 'UI Components/Primitives/Label',
  component: Label
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  htmlFor: 'some-inpupt-id',
  children: 'A label'
}
