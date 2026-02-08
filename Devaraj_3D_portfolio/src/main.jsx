import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Toaster
  position="top-center"
  toastOptions={{
    style: {
      background: "rgba(255, 255, 255, 0.15)",
      color: "#ffffff", 
      backdropFilter: "blur(10px)", 
      borderRadius: "12px",
      padding: "12px 16px",
    },
  }}
/>
    <App />
  </StrictMode>,
)
