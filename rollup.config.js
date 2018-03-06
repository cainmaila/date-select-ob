import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
export default {
    input: 'src/main.js',
    output: {
        name: 'DeteSelectOb',
        file: 'index.js',
        format: 'umd'
    },
    plugins: [commonjs(), resolve(), uglify()]
}
