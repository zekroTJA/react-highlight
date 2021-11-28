import typescript from 'rollup-plugin-typescript2';
import url from '@rollup/plugin-url';
import pkg from './package.json';
import css from 'rollup-plugin-import-css';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    url({
      include: ['**/*.woff2', '**/*.woff', '**/*.ttf'],
      destDir: 'dist/fonts',
      emitFiles: true,
    }),
    typescript({
      clean: true,
      tsconfig: 'tsconfig-rollup.json',
      typescript: require('typescript'),
    }),
    css(),
  ],
};
