import { defineConfig } from '@umijs/max';

const base =
  process.env.NODE_ENV === 'production' ? '/What-s-New-in-ECMAScript/' : '/';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: `What's New in ES`,
  },
  base: base,
  publicPath: base,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '2016',
      path: '/2016',
      component: './2016',
    },
    {
      name: '2024',
      path: '/2024',
      component: './2024',
    },
  ],
  npmClient: 'pnpm',
  headScripts: [
    {
      src: `${base}js/2016.js`,
    },
    {
      src: `${base}js/2024.js`,
    },
  ],
  proxy: {
    '/api/': {
      target: 'http://192.0.0.100:8080',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
