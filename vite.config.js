// vite.config.js
export default {
  server: {
    proxy: {
      '/api': 'https://doc-truyen-backend.onrender.com'
    }
  }
}
