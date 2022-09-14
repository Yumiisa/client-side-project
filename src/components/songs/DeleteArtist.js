import React  from 'react'
import axios from 'axios'
import DisplayArtist from './DisplayArtist'


const DeleteArtist = ({id,artists,setArtists}) => {

     const handleDelete=()=>{
      
        axios.delete(`http://localhost:9292/artists/${id}`)
      
        .then(()=>{
            const undeletedArtist =artists.filter(artist=>artist.id !==id)
            // console.log(undeletedArtist)
            setArtists(undeletedArtist)
        })
    //     axios.delete(`http:/localhost:9292/artists/${id}`)
    // .then(()=>{
    //     const updatedArtists= artists.filter((artist) =>artist.id !== id)
    //     setArtists(updatedArtists)
    // })
  
    }
  return (
    <div>
   <button onClick={handleDelete} className="delete">delete artist </button>
    </div>
  )
}

export default DeleteArtist