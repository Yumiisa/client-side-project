import axios from 'axios';
import React, {useEffect,useState} from 'react'

const useFetch = (url) => {
     const[songs, setSongs]=useState([])
     const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
  useEffect(() => {
   
    
        axios.get(url)
        .then((response)=>{
            setSongs(response.data)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    
  }, [url])
  return{
    songs,loading,error
  }
}

export default useFetch