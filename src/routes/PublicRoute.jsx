import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/Auth"

const Publicroute = ({children})=>{
    return isAuthenticated() ?  <Navigate to="/artivastore/profile" />  : children;
}

export default Publicroute;