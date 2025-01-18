import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App.jsx'
import { lazy,Suspense } from 'react'
import Loading from '@components/common/Loading/Loading.jsx'
import Login from '@pages/Login.jsx'
import Register from '@pages/Register.jsx'
import ProductDetails from '@pages/ProductDetails.jsx'
import Profile from '@pages/Profile.jsx'
import Protectedroute from '@routes/ProtectedRoute.jsx'
import Publicroute from '@routes/PublicRoute.jsx'
import Cart from '@pages/Cart.jsx'
import Order from '@pages/Order.jsx'
import NotFound from '@pages/Not-found.jsx'
const Collection = lazy(()=>import ('@pages/Collection.jsx'))
const Makeyourtshirt = lazy(()=>import ('@pages/TshirtDesigner.jsx'))
const Home = lazy(()=>import ('@pages/Home.jsx'))




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
      element:  <ProductDetails/>
    },
    {
      path:"/artivastore/maketshirt",
      element:<Suspense fallback={<Loading/>}>
        <Makeyourtshirt/>
      </Suspense>
    },
    {
      path:"/artivastore/cart",
      element:<Suspense fallback={<Loading/>}>
        <Cart/>
      </Suspense>
    },
    {
      path:"/artivastore/login",
      element:<Publicroute><Login/></Publicroute> 
    },
    {
      path:"/artivastore/register",
      element: <Publicroute><Register/></Publicroute> 
    },
    {
      path:"/artivastore/profile",
      element: <Protectedroute><Profile/></Protectedroute> 
    },
    {
      path:"/artivastore/order",
      element: <Order/>
    },
    {
      path:"*",
      element: <NotFound/>
    },
    ]
  }
])

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
