import axios from "axios";
import { useEffect, useState } from "react"


const useFetchmoresold = (url)=>{
    const [data, setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
              const response = await axios.get(url);
              setData(response.data.data.data)
            }catch(err){
                setError(err)
            }finally{
               setLoading(false);
            }
        }
       fetchData()
    },[url])
    return {data,loading,error}
}
export default useFetchmoresold;