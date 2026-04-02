import './styles/fonts.css'
import './styles/theme.css'
import './styles/reset.css'
import './styles/buttons.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)