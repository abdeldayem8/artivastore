import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {path:'/artivastore/',element:<App/>}
])
createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
