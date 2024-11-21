import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App.jsx'
import { lazy,Suspense } from 'react'
import Loading from '../components/common/Loading/Loading.jsx'
const Products = lazy(()=>import ('../pages/Products.jsx'))
const Makeyourtshirt = lazy(()=>import ('../pages/TshirtDesigner.jsx'))
const Newarrival = lazy(()=>import ('../pages/Newarrival.jsx'))




const router = createBrowserRouter([
  {path:'/artivastore/',element:<App/>,
    children:[
    {
      path:"/artivastore/",
      element: <Suspense fallback={<Loading/>}>
        <Products/>
      </Suspense>
    },
    {
      path:"/artivastore/newarrivals",
      element: <Suspense fallback={<Loading/>}>
        <Newarrival/>
      </Suspense>
    },
    {
      path:"/artivastore/maketshirt",
      element:<Suspense fallback={<Loading/>}>
        <Makeyourtshirt/>
      </Suspense>
    },
    ]
  }
])

const Approuter = () => {
  return <RouterProvider router={router} />
}

export default Approuter
