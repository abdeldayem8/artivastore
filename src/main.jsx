import { createRoot } from 'react-dom/client'
import './styles/index.css'
import AppRouter from '@routes/AppRouter.jsx'
import './i18n.js'

 
createRoot(document.getElementById('root')).render(
<AppRouter/>
)
