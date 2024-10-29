import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: './', // 确保基础路径正确
  // server: {
  //   fs: {
  //     // 允许访问项目根目录以外的文件
  //     allow: ['..']
  //   }
  // },
  // resolve: {
  //   alias: {
  //     // 配置 monaco-editor 别名
  //     'monaco-editor': '/monaco/vs/loader.js'
  //   }
  // },
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: './index.html',
  //       // 如果需要，可以添加更多入口点
  //     }
  //   }
  // }
});