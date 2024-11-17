import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Approuter from './routes/Approuter.jsx'
import './i18n.js'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Main() {
    const { i18n } = useTranslation()
  
    useEffect(() => {
      // Update the text direction based on the language
      document.documentElement.dir = i18n.dir()  // This will be 'ltr' or 'rtl' depending on the language
    }, [i18n.language])  // Runs when the language changes
  
    return <Approuter />
  }

createRoot(document.getElementById('root')).render(
<Main/>
)
