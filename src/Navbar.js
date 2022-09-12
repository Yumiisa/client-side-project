import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/artist"><li>Artist</li></Link>
        <Link to='/deleteArtist'><li>delete artist</li></Link>
    </ul>
      
    </div>
  )
}

export default Navbar
