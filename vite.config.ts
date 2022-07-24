import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import { viteMockServe } from 'vite-plugin-mock';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS(), viteMockServe(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
