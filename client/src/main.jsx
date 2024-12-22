import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/playfair-display/400.css';
import '@fontsource/source-serif-pro/400.css';
import '@fontsource/source-serif-pro/700.css';
import '@fontsource/source-serif-pro/600.css';
import '@fontsource/manrope/500.css';
import '@fontsource/poppins/500.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
