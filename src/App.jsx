import { Outlet } from "react-router-dom"
import Navbar from "./components/ecommerce/Navbar/Navbar"
import { Provider } from "react-redux"
import store from "./store/store"
import Footer from "./components/ecommerce/Footer/Footer"
function App() {
  
  return (
   <>
   <Provider store={store}>
   <div className="container mx-auto px-6">
   <Navbar/>
   <Outlet/>
   </div>
   <Footer/>
   </Provider>
   </>
  )
}

export default App
