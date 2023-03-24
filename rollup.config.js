import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
    chunkSizeWarningLimit: 2000, // adjust limit here
    manualChunks: {
      vendor: ['react', 'react-dom'], // create a separate chunk for vendor code
    },
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    resolve(),
    commonjs(),
    dynamicImportVars(), // enables dynamic imports
  ],
};
