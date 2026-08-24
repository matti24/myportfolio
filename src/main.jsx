import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import IntroOverlay from './components/ui/intro-overlay.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <IntroOverlay />
  </React.StrictMode>,
)
