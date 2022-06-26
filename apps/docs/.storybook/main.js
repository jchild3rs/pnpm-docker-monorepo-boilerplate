module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../../../apps/**/*.stories.@(ts|tsx|mdx)',
    '../../../packages/**/*.stories.@(ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
    {
      name: 'storybook-addon-turbo-build',
      options: {
        optimizationLevel: 3
      }
    }
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  features: {
    interactionsDebugger: true // 👈 Enable playback controls
  }
}
