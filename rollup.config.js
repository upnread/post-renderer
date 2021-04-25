import postcss from 'rollup-plugin-postcss'

export default {
  plugins: [
    postcss({
      modules: false
    })
  ]
}
