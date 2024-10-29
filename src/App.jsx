import { Outlet } from "react-router-dom"
import Navbar from "./components/ecommerce/Navbar/Navbar"
function App() {
  
  return (
   <>
   <div className="container mx-auto">
   <Navbar/>
   <Outlet/>
   </div>
   </>
  )
}

export default App
