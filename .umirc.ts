import { defineConfig } from '@umijs/max';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

const base = process.env.NODE_ENV === 'production' ? '/' : '/';

const headScripts = new Array(9).fill(0).map((_, index) => ({
  src: `${base}js/${2016 + index}.js`,
}));

export default defineConfig({
  chainWebpack(memo) {
    memo.plugin('monaco-editor').use(MonacoWebpackPlugin);
    return memo;
  },
  esbuildMinifyIIFE: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: `What's New in JS`,
  },
  npmClient: 'pnpm',
  base: base,
  publicPath: base,
  headScripts: headScripts,
  valtio: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '文档',
      path: '/home',
      component: './Home',
    },
    {
      name: 'Playground',
      path: '/playground',
      component: './Playground',
    },
    {
      name: '2016',
      path: '/2016',
      component: './2016',
    },
    {
      name: '2017',
      path: '/2017',
      component: './2017',
    },
    {
      name: '2018',
      path: '/2018',
      component: './2018',
    },
    {
      name: '2019',
      path: '/2019',
      component: './2019',
    },
    {
      name: '2020',
      path: '/2020',
      component: './2020',
    },
    {
      name: '2021',
      path: '/2021',
      component: './2021',
    },
    {
      name: '2022',
      path: '/2022',
      component: './2022',
    },
    {
      name: '2023',
      path: '/2023',
      component: './2023',
    },
    {
      name: '2024',
      path: '/2024',
      component: './2024',
    },
  ],
});
