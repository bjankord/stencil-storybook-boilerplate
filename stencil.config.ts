import path from 'path';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const scssVariables = path.join(__dirname, "src", "scss", "variables.scss");

export const config: Config = {
  namespace: 'web-components',
  taskQueue: 'async',
  plugins: [
    sass({
      injectGlobalPaths: [
        scssVariables,
      ]
    })
  ],
  devServer: {
    reloadStrategy: 'pageReload',
    openBrowser: false,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    { type: 'docs-json', file: 'docs/components.json' },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
