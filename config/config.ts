import {defineConfig} from 'umi';
import routerConfig from '../src/router.config';

export default defineConfig({
  title: 'HOCGIN',
  locale: {
    antd: true,
  },
  qiankun: {
    master: {},
  },
  antd: {},
  dva: {},
  outputPath: './dist',
  favicon: 'https://hocg.in/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  manifest: {
    fileName: `manifest.json`,
  },
  fastRefresh: {},
  proxy: {
    '/api': {
      // => 转到服务端地址
      target: 'http://127.0.0.1:20001/',
      changeOrigin: true,
      pathRewrite: {'^/api': ''},
    },
  },
  theme: {},
  routes: [...routerConfig],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@hocgin/ui',
        camel2DashComponentName: false,
        style: true,
      },
      '@hocgin/ui',
    ],
  ],
});
