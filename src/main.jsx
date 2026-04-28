import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './formulario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
