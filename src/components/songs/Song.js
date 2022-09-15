import React, {useEffect,useState} from 'react'
import axios from 'axios'
import useFetch from './useFetch'
const Song = () => {
  
    const{  datas,loading,error}=useFetch("http://localhost:9292/songs")
    if(loading){
      return <h1>LOADING...</h1>}
    if(error)console.log(error)
    
  return (
    <div className='songs'>
      
        {datas.map(song=>{
        return (<div className="main-song" key={song.id}>
          <iframe width="220" height="150" src={song.preview_url}
          title={song.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="myvideo">

          </iframe>

            
            

        </div>)
})}


    </div>
  )
}

export default Song