import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './Components/App.jsx'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Normal weight
import "@fontsource/poppins/700.css"; // Bold weight

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
