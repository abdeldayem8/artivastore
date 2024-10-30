import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/products.jsx'
import Makeyourtshirt from './pages/Makeyourtshirt.jsx'


const router = createBrowserRouter([
  {path:'/artivastore/',element:<App/>,
    children:[
    {
      path:"/artivastore/",
      element:<Home/>
    },
    {
      path:"/artivastore/about",
      element:<About/>
    },
    {
      path:"/artivastore/products",
      element:<Products/>
    },
    {
      path:"/artivastore/maketshirt",
      element:<Makeyourtshirt/>
    },
      

    ]

  }
])
createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
