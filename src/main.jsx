import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ItemProvider from './context/itemContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <ItemProvider>
    <BrowserRouter>
      <App />
      <ToastContainer/>
    </BrowserRouter>
  </ItemProvider>
)
