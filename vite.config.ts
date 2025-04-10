import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
<<<<<<< HEAD

// https://vitejs.dev/config/
export default defineConfig({
=======
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
    },
  },
>>>>>>> development
  plugins: [react()],
})
