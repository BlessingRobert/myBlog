import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './Pages/contact';
import ErrorPage from './Pages/errorPage';
import Layout from './Layout/layout';
import App from './App';
import Pages from './Pages/pages';
import SingleBlogPost from './Pages/single-blog-Post.jsx';
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
        path: "singlepost",
        element: <SingleBlogPost />
      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
