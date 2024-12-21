import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/playfair-display/400.css'; // Regular weight
import '@fontsource/playfair-display/700.css'; // Bold weight
import '@fontsource/source-serif-pro/400.css'; // Regular weight
import "@fontsource/source-serif-pro/700.css"; // Bold weight
import '@fontsource/manrope/400.css'; // Regular weight
import "@fontsource/manrope/700.css"; // Bold weight

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
