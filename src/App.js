

import './App.css';
import Song from './components/songs/Song';
import UpdateArtist from './components/songs/UpdateArtist';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
// import Navbar from './Navbar'
import Navbar from './Navbar';
import DeleteArtist from './components/songs/DeleteArtist';
import Artist from './components/songs/Artist';
import DisplayArtist from './components/songs/DisplayArtist';

function App() {
  return (
    <div className="App">
      <p>Enjoy watching your favourite video</p>
    <Router>
       <Navbar/> 
      <Routes>
        <Route path='/' exact element={<Song />} />
        <Route path='/artist' element={<Artist />} />
         <Route path='/deleteArtist' element={<DeleteArtist />} />
         <Route path='/displayArtist' element={<DisplayArtist />} />
          <Route path='/updateArtist' element={<UpdateArtist />} /> 
         
         
      </Routes>
       
    </Router>
   
    </div>
  );
}

export default App;
