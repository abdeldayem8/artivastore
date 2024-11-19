import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

  useEffect(()=>{
    setLoading(true);
    const fetchData = async ()=>{
       try{
          const response = await axios.get(url);
          
          setData(response.data);
        }catch(error){
            setError(error);
       }finally{
        setLoading(false);
       }
    }
    fetchData();
  },[url])
  return {data,loading,error}
}

export default useFetch
