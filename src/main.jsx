import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';
import Applied from './Component/Applied Jobs/Applied';
import Details from './Component/Details/Details';
import JobDetails from './Component/JobDetails';
// import Details from './Component/Details/Details';
// import Details from './Component/Details/Details';
// import Show from './Component/ShowDetail/Show';
// import Details from './Component/Details/Details';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('Category.json')
     
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      
        },
        {
                  
             path:'/applied',
             element:<Applied></Applied>,
             loader:()=>fetch('./Jobs.json')

          },
          {
             path:'/blog',
            element:<Blog></Blog>
            },
            {
              path:'/detail/:id',
              element:<Details></Details>
              // loader:()=>fetch('./Jobs.json')
            },
              // {
              // path:'/detail/:detailId',
              // element:
              // loader:({params})=>fetch(`Jobs.json${params.detailId}`)
              // },

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
