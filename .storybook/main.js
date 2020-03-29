module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, '../../src'),
      use: [require.resolve('babel-loader')],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
