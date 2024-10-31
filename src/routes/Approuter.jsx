import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App.jsx'
import Products from '../pages/Products.jsx'
import About from '../pages/About.jsx'
import Makeyourtshirt from '../pages/Makeyourtshirt.jsx'


const router = createBrowserRouter([
  {path:'/artivastore/',element:<App/>,
    children:[
    {
      path:"/artivastore/",
      element:<Products/>
    },
    {
      path:"/artivastore/about",
      element:<About/>
    },
    {
      path:"/artivastore/maketshirt",
      element:<Makeyourtshirt/>
    },
    ]
  }
])

const Approuter = () => {
  return <RouterProvider router={router} />
}

export default Approuter
