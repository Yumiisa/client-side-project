import React, {useEffect,useState} from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom'
import DeleteArtist from './DeleteArtist'
import UpdateArtist from './UpdateArtist'

const DisplayArtist = ({deleteArtist}) => {
    const[artists,setArtists] = useState([])
    const[name,setName]=useState('')
    const[photo_url,setPhotoUrl]=useState('')
    const[nationality,setNationality]=useState('')
    useEffect(() => { 
        axios.get("http://localhost:9292/artists")
        .then((res)=>{
        setArtists(res.data)
        })
    }, [])
    // console.log(artists);
 const update =(id)=>{
    console.log(id)
    axios.patch(`http://localhost:9292/artists/${id}`, {
         name:name,
    photo_url:photo_url,
    nationality:nationality
    })
    const updateArtist=artists.map((artist)=>{
        if (artist.id ===id){
       return id
        }
        else{
            return artist
        }
    })
    setArtists(updateArtist)
 }
    
  return (
    <div className="displa-artist">
        <>
         <h2 className="name">artist name</h2>
            <h2 className="image">artist image</h2>
            <h2 className="origin">artist origin</h2>
     {artists.map((artist)=>{
        return(
            
           
            <div className="artists" key={artist.id}>
             
                <h4>{artist.name}</h4>
              
            <img src={artist.photo_url} alt="artist"/>
            <h4>{artist.nationality}</h4>
            
        <button onClick={()=>update(artist.id)}>update</button>
          <DeleteArtist id={artist.id} artists={artists} setArtists={setArtists} />
       
            </div>
           
            
        )
     })}
     </>
      {/* <Link to="/artist"><li>Add Artist</li></Link> */}
    </div>
    
  )
}

export default DisplayArtist