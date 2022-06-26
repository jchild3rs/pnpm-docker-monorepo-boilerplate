import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
  }
})
