import React, {useEffect,useState} from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom'

const DisplayArtist = () => {
    const[artists,setArtists] = useState([])
    useEffect(() => { 
        axios.get("http://localhost:9292/artists")
        .then((res)=>{
        setArtists(res.data)
        })
    }, [])
  return (
    <div className="displa-artist">
     {artists.map((artist)=>{
        return(
            <div><h4>{artist.name}</h4>
            <img src={artist.photo_url} alt="artist"/>
            <p>{artist.nationality}</p>

            </div>
           
            
        )
     })}
      <Link to="/artist"><li>Add Artist</li></Link>
    </div>
  )
}

export default DisplayArtist