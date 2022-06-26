import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { Header, LeadForm, Page } from '../'

export default {
  title: 'UI Components/Layout/Page',
  component: Page,
  args: {
    heading: 'Dashboard',
    children: (
      <LeadForm
        onSubmit={(e) => {
          e.preventDefault()
        }}
      />
    )
  },
  parameters: {
    backgrounds: { default: 'light' },
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  subcomponents: {
    Header,
    LeadForm
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
