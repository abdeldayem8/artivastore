import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '@utils/Auth'
const Protectedroute = ({children}) => {
 const auth = isAuthenticated();
 return auth ? children : <Navigate to="/artivastore/login"/>
}

export default Protectedroute
