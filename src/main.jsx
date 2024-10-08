import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'
import BgProvider from './assets/Components/BgProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BgProvider>
    <App />
    </BgProvider>
  </StrictMode>,
)
