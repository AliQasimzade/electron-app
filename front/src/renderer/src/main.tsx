import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import AppRoutes from './routing/AppRoutes'
import { HelmetProvider } from 'react-helmet-async';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './redux-store/store';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <AppRoutes />
          </HelmetProvider>
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} position='bottom' />}
        </QueryClientProvider>
      </PersistGate>
    </Provider>

  </React.StrictMode>
)
