import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
// import Login from './Pages/Login.jsx';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
)
