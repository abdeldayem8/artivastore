import { Outlet } from "react-router-dom"
import Navbar from "@components/ecommerce/Navbar/Navbar"
import { Provider } from "react-redux"
import store, { persistor }  from "@store/Store"
import Footer from "@components/ecommerce/Footer/Footer"
import { Toaster } from "react-hot-toast"
import { PersistGate } from "redux-persist/integration/react"
import Loading from "@components/common/Loading/Loading"
import { useEffect, useState } from "react"

function App() {
   const[theme,setTheme]=useState('light')


   // Check for saved theme in localStorage on initial load
   useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Toggle dark/light mode
  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
   <>
  <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          {/* Apply dark mode to the entire app */}
          <div className="flex flex-col min-h-screen bg-secondary text-primary dark:bg-primary dark:text-secondary">
            {/* Navbar */}
            <div className="container p-6 lg:mx-auto mb-4">
              <Navbar />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 flex-grow">
              {/* Floating Oval Theme Toggle Button */}
              <button
                onClick={handleThemeSwitch}
                className="fixed left-6 top-[30%] z-50 p-3 rounded-[50%] bg-primary dark:bg-secondary text-dark dark:text-white shadow-lg hover:bg-opacity-80 transition-all"
              >
                {theme === "dark" ? "🌙" : "🌞"}
              </button>

              {/* Outlet for rendering pages */}
              <Outlet />
            </div>

            {/* Footer */}
            <Footer />
          </div>
          <Toaster />
        </PersistGate>
      </Provider>
   </>
  )
}

export default App
