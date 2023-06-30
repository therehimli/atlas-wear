import ReactDOM from 'react-dom/client'

import Providers from './providers/Providers'
import App from '@/App'
import './index.css'
import '@/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <App />
  </Providers>
)
