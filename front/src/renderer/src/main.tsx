import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import './assets/plugins.bundle.css'
import AppRoutes from './routing/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  </React.StrictMode>
)
