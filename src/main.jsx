import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Gallery from './pages/Gallery'
import ErrorPage from './pages/ErrorPage'
import App from './App'
import Photographers from './pages/Photographers'
import Details from './pages/Details'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Gallery />,
      },
      {
        path: "photographers",
        element: <Photographers />
      },
      {
        path: "errorpage",
        element: <ErrorPage />
      },
      {
        path: "details/:id",
        element: <Details />
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
