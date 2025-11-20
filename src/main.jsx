import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext.jsx'
import Loader from './components/Loader/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider 
        router={router}
        fallbackElement={<Loader />} 
        HydrateFallback={<Loader />}
      />
    </AuthProvider>
  </StrictMode>
);
