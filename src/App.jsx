import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
function App() {
  
  return (
   <>
   <div className="container mx-auto p-4">
   <Navbar/>
   <Outlet/>
   </div>
   </>
  )
}

export default App
