import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/artist"><li>Artist</li></Link>
        
        <Link to='/displayArtist'><li>display artist</li></Link>
          {/* <Link to='/updateArtist'><li>update artist</li></Link>  */}
    </ul>
      
    </div>
  )
}

export default Navbar
