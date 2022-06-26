import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { Page } from './Page'

export default {
  title: 'UI/Page',
  component: Page,
  args: {
    heading: 'Dashboard',
    children: (
      <div className="px-4 py-6 sm:px-0">
        <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
      </div>
    )
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.args = {}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const loginButton = await canvas.getByRole('button', { name: /Log in/i })
  await userEvent.click(loginButton)
}
