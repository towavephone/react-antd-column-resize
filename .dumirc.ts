import { defineConfig } from 'dumi';
import path from 'path';
const repo = 'react-antd-column-resize'; // 项目名
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: ' ',
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  alias: {
    'react-antd-column-resize$': path.resolve(__dirname, 'src'),
  },
});
