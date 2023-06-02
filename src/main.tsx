import ReactDOM from 'react-dom/client'

import Providers from './providers/Providers'
import App from '@/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <App />
  </Providers>
)
