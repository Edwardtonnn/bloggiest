import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlePage from './pages/ArticlePage'

const router = createBrowserRouter([
  {
    path:"/",
    element:(<App/>)
  },
  {
    path:"/about",
    element:(<AboutPage/>)
  },
  {
    path:"/articles",
    element:(<ArticlesListPage/>)
  },
  {
    path:"/articles/:articleID",
    element:(<ArticlePage/>)
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />

)
