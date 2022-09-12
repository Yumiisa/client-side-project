import React, {useEffect,useState} from 'react'
import axios from 'axios'
const Song = () => {
    const [songs, setSongs]=useState([])
    useEffect(() => { 
        axios.get("http://localhost:9292/songs")
        .then((res)=>{
        setSongs(res.data)
        })
    }, [])
    
  return (
    <div className='songs'>
      
        {songs.map(song=>{
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