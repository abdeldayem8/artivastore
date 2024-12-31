import { Outlet } from "react-router-dom"
import Navbar from "./components/ecommerce/Navbar/Navbar"
import { Provider } from "react-redux"
import store, { persistor }  from "./store/store"
import Footer from "./components/ecommerce/Footer/Footer"
import { Toaster } from "react-hot-toast"
import { PersistGate } from "redux-persist/integration/react"
import Loading from "./components/common/Loading/Loading"
function App() {
  
  return (
   <>
   <Provider store={store}>
    <PersistGate  loading={<Loading/>} persistor={persistor}>
   <div className="flex flex-col min-h-screen bg-primary">
    <div className="p-6 lg:mx-auto mb-4">
    <Navbar />
    </div>
    <div className="container mx-auto px-6 flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
    <Toaster/>
    </PersistGate>
   </Provider>
   </>
  )
}

export default App
