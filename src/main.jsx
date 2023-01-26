import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AllContextProvider } from '../store/Allcontext'


ReactDOM.createRoot(document.getElementById('root')).render(
<AllContextProvider>
<React.StrictMode>
    <App />
  </React.StrictMode>
</AllContextProvider>
)
