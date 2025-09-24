import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// It will render the App component inside the root element from the index.html file
createRoot(document.getElementById('root')).render(

  // StrictMode is a tool for highlighting potential problems in an application. It is mainly used during development.
  <StrictMode>
    {/* This is the App component. It is a html component  that is defined in the App.jsx file. In jsx we can write html inside javascript*/}
    <App />
  </StrictMode>,
)
