module.exports = {
  singleQuote: true,
  singleAttributePerLine: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['className'],
};
