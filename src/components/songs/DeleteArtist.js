import React, {useState} from 'react'
import axios from 'axios'


const DeleteArtist = () => {
    const [artists, setArtists] = useState([])
    const deleteArtist=(id)=>{
        axios.delete(`http:/localhost:9292/artists/${id}`)
    .then((getData)=>{
        setArtists(
            artists.filter((artist)=>{
                return artist.id !==id
            })
        )
    })
    }
    
  return (
    <div>
    <button onClick={deleteArtist}>delete</button>
    </div>
  )
}

export default DeleteArtist