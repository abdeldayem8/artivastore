import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App.jsx'
import { lazy,Suspense } from 'react'
import Loading from '../components/common/Loading/Loading.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Productdetails from '../pages/Productdetails.jsx'
const Collection = lazy(()=>import ('../pages/Collection.jsx'))
const Makeyourtshirt = lazy(()=>import ('../pages/TshirtDesigner.jsx'))
const Home = lazy(()=>import ('../pages/Home.jsx'))




const router = createBrowserRouter([
  {path:'/artivastore/',element:<App/>,
    children:[
    {
      path:"/artivastore/",
      element: <Suspense fallback={<Loading/>}>
        <Home/>
      </Suspense>
    },
    {
      path:"/artivastore/collection",
      element: <Suspense fallback={<Loading/>}>
        <Collection/>
      </Suspense>
    },
    {
      path:"/artivastore/collection/:id",
      element:  <Productdetails/>
    },
    {
      path:"/artivastore/maketshirt",
      element:<Suspense fallback={<Loading/>}>
        <Makeyourtshirt/>
      </Suspense>
    },
    {
      path:"/artivastore/login",
      element:<Login/>
    },
    {
      path:"/artivastore/register",
      element:<Register/>
    },
    ]
  }
])

const Approuter = () => {
  return <RouterProvider router={router} />
}

export default Approuter
