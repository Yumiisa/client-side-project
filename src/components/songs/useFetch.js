import axios from 'axios';
import React, {useEffect,useState} from 'react'

const useFetch = (url) => {
     const[datas, setDatas]=useState([])
     const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
  useEffect(() => {
   
    
        axios.get(url)
        .then((response)=>{
            setDatas(response.data)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    
  }, [url])
  return{
    datas,loading,error
  }
}

export default useFetch