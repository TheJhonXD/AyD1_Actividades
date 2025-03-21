import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      host: "0.0.0.0",  // Permite conexiones externas desde Docker
      port: 80,       // Asegura que usa el puerto correcto
      strictPort: true,  // Evita que Vite cambie de puerto si está ocupado
      watch: {
        usePolling: true, // Soluciona problemas de actualización en Docker
      },
    },
})
