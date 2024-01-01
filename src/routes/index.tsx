import { createBrowserRouter } from 'react-router-dom'

// Pages
import Home from '@/pages/Home'

// Components
import Login from '@/components/Login'

// Layouts
import AuthenticationPage from '@/layout/AuthenticationPage'
import Register from '@/components/Register'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <AuthenticationPage />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/forgot-password',
    element: <Home />,
  },
  {
    path: '/logout',
    element: <Home />,
  },
])

export default routes
