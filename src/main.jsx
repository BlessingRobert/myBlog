import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './Pages/contact';
import ErrorPage from './Pages/errorPage';
import Layout from './Layout/layout';
import App from './App';
import Authors from './Pages/authorsPage.jsx';
import LoginForm from './Pages/loginform.jsx';
import { AuthContextProvider } from '../Context/auth-context.jsx';
import Registerform from './Pages/registerform.jsx';
import ThePost from './Pages/thePost';
import Blog from './Pages/blog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:slug",
        element: <ThePost />
      },
      {
        path: "authors/:authors",
        element: <Authors />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginForm />,
  },
  {
    path: 'register',
    element: <Registerform />,
  }, 
  {
    path: "*",
    element: <ErrorPage />
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
);
