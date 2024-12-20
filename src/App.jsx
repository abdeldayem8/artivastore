import { Outlet } from "react-router-dom"
import Navbar from "./components/ecommerce/Navbar/Navbar"
import { Provider } from "react-redux"
import store from "./store/store"
import Footer from "./components/ecommerce/Footer/Footer"
function App() {
  
  return (
   <>
   <Provider store={store}>
   <div className="flex flex-col min-h-screen">
    <div className="container mx-auto px-6 flex-grow">
      <Navbar />
      <Outlet />
    </div>
    <Footer />
  </div>
   </Provider>
   </>
  )
}

export default App
