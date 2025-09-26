import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './context/AuthProvider'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'
import AppWrapper from './components/AppWrapper'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppWrapper>
        <RouterProvider router={router} />
      </AppWrapper>
    </AuthProvider>
  </StrictMode>,
)
