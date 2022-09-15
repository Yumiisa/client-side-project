import axios from 'axios'
import { Link } from 'react-router-dom'
import React, {useEffect,useState} from 'react'

const Artist = () => {
  
   const[artists,setArtist]=useState([])
    const[name,setName]=useState('')
    const[photo_url,setPhotoUrl]=useState('')
    const[nationality,setNationality]=useState('')
const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:9292/artists", { 
        name:name,
    photo_url:photo_url,
    nationality:nationality
})
    .then((artist) =>{
    setArtist([artist,...artists])
    setName('');
    setNationality('');
    setPhotoUrl('')
})

  
}

      
    return (
        <div>
         <form className="new-rtist" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Nationality:
        <input
          name="image"
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
          
      </label>
      <label>
        Image:
        <input
          name="image"
          type="file"
          accept='image/*'
          multiple 
          value={photo_url}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
        </label>

      <button type="submit">Add to List</button>
    </form>
      
        </div>
    )
   
}

export default Artist