import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import '../index.css'
import NavBar from './Navbar.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar></NavBar>
    <App />
    <Footer></Footer>
  </BrowserRouter>,
)
