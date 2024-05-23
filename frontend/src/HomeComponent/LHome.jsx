import React, { useEffect, useState ,useRef,useNavigate, useContext } from 'react';
import SplitPane from 'react-split-pane';
import Sidebar from './Sidebar';
import Plylist from './Plylist';
import { Container } from 'react-bootstrap';
import Style from '../CSS/Home.module.css';
import Bottom from './Bottom';
import BellIcon from './BellIcon';
import InstallApp from './InstallApp';
import LibComp from './LibComp';
import Profile from './Profile'
import a1 from '../assets/music/Bir Zindagi.mp3';
import a2 from '../assets/music/Apa Fer Milange.mp3';
import a3 from '../assets/music/Bhali Kare Kartar.mp3';
import a4 from '../assets/music/Chal Jindiye.mp3';
import a5 from '../assets/music/My Pride.mp3';
import Playlist from './Playlist';
import songContext from '../contexts/songContext';
export default function LHome() {

  useEffect(() =>{
    fetch("http://localhost:3000",{
      method:'GET',
     })
    .then(res => res.json())
    .then(data => {
       console.log(data); // Log the fetched user details
       // Handle the data as needed, such as updating state to display user details
    })
    .catch(err => console.error(err));
  },[]);

const [songs , setSongs] = useState([]);

const [imageLoadError, setImageLoadError] = useState(false);

useEffect(() => {
  const fetchSongs = async () => {
    try {
      const response = await fetch('http://localhost:3000/song/api/songs'); // Update with your actual backend domain
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSongs(data);
      } else {
        throw new Error('Failed to fetch songs');
      }
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  fetchSongs();
}, []);


  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPath, setAudioPath] = useState(null);

  const handlePlayPause = (path) => {
    setIsPlaying(!isPlaying);
    setAudioPath(path);
  };

  const [install, setInstall] = useState('');
  
  const [playlist, setPlaylist] = useState(''); // State to manage playlist data

  const handleInstallClick = () => {
    setInstall('install');
  };

  const handleBellIconClick = () => {
    setInstall('bellIcon');
  };
  const handleprofileClick = () => {
    setInstall('profile');
  };
 
   // Function to handle playlist change
   const handlelibclick = (playlist) => {
    console.log(playlist)
    setPlaylist(playlist);

  };
  const playlistitems = [
    {
      img: 'https://i.scdn.co/image/ab67616d00001e02249e235cc514c7071e4bd049',
      name: 'Aam jahe munde',
      desc: 'PARDHANE',
      audio: a1,
      singer:'ranjit',
      date:'1 day ago'
    },
    {
      img: 'https://i.scdn.co/image/ab67616d00001e022494fb8ce966d471e74c81da',
      name: 'Apa fer milanga (Lofi version)',
      desc: 'Savi kahlon',
      audio: a2,
      singer:'kahlon',
      date:'5 days ago'
    },
    
  ];
  
  return (
    <>
    <div className='container'>
    <Container className={`${Style.container}`}>
          <SplitPane
            split='vertical'
            minSize={280}
            maxSize={-1100}
            defaultSize={340}
            style={{ backgroundColor: 'black' }}
          >
            <div className={`me-1 ${Style.pane}`}>
              {/* {install === 'library' && <Sidebar handleLibClick={handleLibClick}/> } */}
              <Sidebar handlelibclick={handlelibclick} />
            </div>
            <div className={`me-1 ${Style.pane}`}>
              {install === 'install' && 
              <InstallApp
               handleInstallClick={handleInstallClick} 
               handleprofileClick={handleprofileClick} 
               handleBellIconClick={handleBellIconClick} />}
              
              
              {install === 'bellIcon' && 
              <BellIcon
              handleBellIconClick={handleBellIconClick}
              handleprofileClick={handleprofileClick} 
              handleInstallClick={handleInstallClick} />}


              {install === 'profile' && 
              <Profile 
              handleInstallClick={handleInstallClick} 
              handleprofileClick={handleprofileClick} 
              handleBellIconClick={handleBellIconClick} />}
              
              {install === '' &&
               (playlist  ? 
              <LibComp cmp={playlist}
               playlistitems={songs}
              handleInstallClick={handleInstallClick} 
              handleprofileClick={handleprofileClick} 
               handleBellIconClick={handleBellIconClick} /> 
               :
                <Playlist playlistitems={songs}
                // radio={radio} album={album} artist={artist}
                // handleImageError={handleImageError}
                 onPlayPause={handlePlayPause}
                handleprofileClick={handleprofileClick} 
                handleInstallClick={handleInstallClick}
                handleBellIconClick={handleBellIconClick}  />)}
             </div>
          </SplitPane>
        </Container>
    </div>
    <Bottom audioPath={audioPath}  isPlaying ={isPlaying}  onPlayPause={handlePlayPause} playlistitems={songs}  />
  </>
  );
}
