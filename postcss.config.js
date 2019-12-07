module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('cssnano')({
      preset: 'default',
    }),
    // require('@fullhuman/postcss-purgecss')({
    //   content: [
    //     './public/index.html',
    //   ]
    // }),
    require('autoprefixer')
  ]
}