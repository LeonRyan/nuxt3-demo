module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-transparent',
    {
      pattern: /bg-(red|green|blue|gray|white|black)-(100|500|600)/,
      variants: ['hover']
    },
    {
      pattern: /text-(red|green|blue|gray|white|black)-600/,
    },
    {
      pattern: /border-(red|green|blue|gray|white|black)-500/,
    }
  ]
}
