import { Outlet } from "react-router-dom"
import Navbar from "./components/ecommerce/Navbar/Navbar"
import { Provider } from "react-redux"
import store from "./store/store"
function App() {
  
  return (
   <>
   <Provider store={store}>
   <div className="container mx-auto px-6">
   <Navbar/>
   <Outlet/>
   </div>
   </Provider>
   </>
  )
}

export default App
