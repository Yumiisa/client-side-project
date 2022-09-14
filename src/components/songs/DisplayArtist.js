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
                <UpdateArtist id={artist.id} artists={artists} setArtists={setArtists} name={artist.name} />
              
            <img src={artist.photo_url} alt="artist"/>
            <h4>{artist.nationality}</h4>
           
            {/* <Link to='/updateArtist'><button className="update">update artist</button></Link>  */}
        {/* <button onClick={()=>update(artist.id)}>update</button> */}
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