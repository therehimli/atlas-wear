import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    mainFields: [],
  },
  server: {
    proxy: {
      '/users': 'http://localhost:9999',
    },
  },
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
})

// const { data: user } = useQuery({
//   queryFn: userProfileHandler,
//   queryKey: ['users'],
// })

// useEffect(() => {
//   setUserLogin(user)
//   setReady(true)
// }, [])

// const {
//   data: user,
//   isLoading,
//   isSuccess,
// } = useQuery({
//   queryFn: userProfileHandler,
//   queryKey: ['users'],
// })
