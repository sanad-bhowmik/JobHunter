import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Jobdetails from './components/Jobdetails/Jobdetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ApplySingle from './components/ApplySingle/ApplySingle';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/jobDetails.json')
      },
      {
        path:"/Jobdetails/:jobId",
        element: <Jobdetails/>,
        loader: () => fetch("/jobDetails.json")
      },
      {
        path:"/applyJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
