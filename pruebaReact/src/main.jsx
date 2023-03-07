import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

import "react-toastify/dist/ReactToastify.css";
axios.defaults.baseURL = import.meta.env.VITE_API || "http://173.254.242.213:8080/clientapp-web/webresources/getMenus/APP";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer 
        theme="light"
        position="bottom-right"
        pauseOnHover="false"
      />
    </BrowserRouter>
  </React.StrictMode>,
)
