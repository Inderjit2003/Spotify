import React, { useState } from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Home from './Component/Home'
import Login from './AuthComp/Login'
import Signup from './AuthComp/Signup'
import LHome from './HomeComponent/LHome'
import Search from './HomeComponent/Search.jsx'
import Hello from './yy/Hello.jsx'
import AlbumPlay from './HomeComponent/AlbumPlay.jsx'
import ArtistPlay from './HomeComponent/ArtistPlay.jsx'
import songContext from './contexts/songContext.js'
import Playlist from './HomeComponent/Playlist.jsx'
import HomeARPM from './HomeComponent/HomeARPM.jsx'
import Mid from './yy/Mid.jsx'
export default function App() {
  const [currentSong , setCurrentSong ] =useState(null);
  const [soundPlayed,setSoundPlayed] = useState(null);
  const [isPaused , setIsPaused] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <>
    <div>
    <BrowserRouter>
    <div className='w-screen h-screen'>
    <songContext.Provider value={{currentSong , setCurrentSong ,soundPlayed ,setSoundPlayed ,isPaused ,setIsPaused }} >
     <Routes>
        <Route path='/' element = {<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
     
      
        <Route path ="/Home" element = { <LHome />} />
         <Route path="/Playlist" element={<Playlist setIsLoggedIn= {setIsLoggedIn} />} />
        <Route path='/Search' element={<Search /> } />
      
        <Route path='/Hello' element={<Hello /> } />

        <Route path='/Album' element ={<AlbumPlay />} />
        <Route path='/Artist' element ={<ArtistPlay />} />
        <Route path='/sf' element={<HomeARPM />} />
        <Route path='/midupload' element={<Mid />} />
    </Routes>
    </songContext.Provider>
     
     </div>
    </BrowserRouter>
    </div>
    </>
  )
}
