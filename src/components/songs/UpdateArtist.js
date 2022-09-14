import axios from 'axios'
import React, {useEffect,useState} from 'react'

const UpdateArtist = ({id,artists,setArtists,name}) => {
    const [nameData,setNameData]=useState(name)
    const [showArtist,setShowArtist]=useState(false)
    function handleForm(){
        setShowArtist(showArtist=> !showArtist)
    }
   const handleChange=(e)=>{

    setNameData(e.target.value)
    console.log(nameData)
   }
    const handleUpdate=(e)=>{
         e.preventDefault()
    fetch(`https://localhost:9292/artist/${id}`,{
       
        method: "PATCH",
        headers: {
                 "Content-Type": "application/json"
            },
        body: JSON.stringify({nameData:nameData})
        
    })
    .then(resp=>resp.json())
    .then(data=>{
       
       const newArtists = artists.map(artist=>{
        if (artist.id ===id){
            return data
        } else{
            return artist
        }
        })
        console.log(newArtists)
         setArtists(newArtists)
    })
   
}


  return (
    <div>
        {showArtist ?<form onSubmit={handleUpdate} className="form">
            <input type="text" value={nameData} onChange={handleChange}/>
            <input type='submit'value="save"/>

        </form>:null }
        
        <button onClick={handleForm} className="update">Update</button>
    </div>
    )
   
}

export default UpdateArtist