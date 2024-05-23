import React, { useEffect, useState } from 'react';
import SplitPane from 'react-split-pane';
import Sidebar from './Sidebar';
import Plylist from './Plylist';
import { Container } from 'react-bootstrap';
import Style from '../CSS/Home.module.css';
import Bottom from './Bottom';
import SearchHere from './SearchHere';
import a1 from '../assets/music/Bir Zindagi.mp3';
import a2 from '../assets/music/Apa Fer Milange.mp3';
import a3 from '../assets/music/Bhali Kare Kartar.mp3';
import a4 from '../assets/music/Chal Jindiye.mp3';
import a5 from '../assets/music/My Pride.mp3';

export default function Search() {
  const songs = [
    {
      img_src: 'https://i.scdn.co/image/ab67616d00001e02d6ae8f55846c610a0b112960',
      title: 'Zindagi',
      artist: 'Bir Singh',
      src: a1,
      color:'rgb(220,20,140)'
    },
    {
      img_src: 'https://i.scdn.co/image/ab67616d00001e0284a4d897fd4310573be70012',
      title: 'Apa fer milanga (Lofi version)',
      artist: 'Savi kahlon',
      src: a2,
      color:'#2882c9'
    },
    {
      img_src: 'https://i.scdn.co/image/ab67616d00001e023180f91f2221f258e5865b1e      ',
      title: 'Bhale Kare Kartar',
      artist: 'Bir Singh',
      src: a3,
      color:'#6a0b0b'
    },
    {
      img_src: 'https://i.scdn.co/image/ab67616d00001e021bbccdf9094270ef73e39b91      ',
      title: 'Chal jindiye',
      artist: 'Amrinder Gill',
      src: a4,
      color:'#93800d'
    },
    {
      img_src: 'https://i.scdn.co/image/ab67616d00001e020bf67e6f69d194a32295c686',
      title: 'My Pride',
      artist: 'Tarsem Jasar',
      src: a5,
      color:'#537556'
    },
  ];
  
  const [install, setInstall] = useState('');
  
  const handleInstallClick = () => {
    setInstall('install');
  };

  const handleBellIconClick = () => {
    setInstall('bellIcon');
  };
  const handleprofileClick = () => {
    setInstall('profile');
  };
  
  const [playlist, setPlaylist] = useState(''); // State to manage playlist data

  const handlelibclick = (playlist) => {
    console.log(playlist)
    setPlaylist(playlist);

  };

   
  return (
    <>
      <div className='container'>
        <Container className={`${Style.container}`}>
          <SplitPane
            split='vertical'
            minSize={305}
            maxSize={-1100}
            defaultSize={400}
            style={{ backgroundColor: 'black' }}
          >
            <div className={` me-1 ${Style.pane}`}>
              <Sidebar  handlelibclick={handlelibclick} />
            </div>

            
            <div className={`me-1 ${Style.pane}`}>
             {/* <SearchHere items ={songs} /> */}
             {install === 'install' && <InstallApp handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick} />}
              {install === 'bellIcon' && <BellIcon handleprofileClick={handleprofileClick} handleInstallClick={handleInstallClick} />}
              {install === 'profile' && <Profile handleInstallClick={handleInstallClick} handleBellIconClick={handleBellIconClick} />}
              
             {install === '' && (<SearchHere items ={songs} handleprofileClick={handleprofileClick} handleInstallClick={handleInstallClick} handleBellIconClick={handleBellIconClick} />)}
            </div>
          </SplitPane>
        </Container>

      </div>
            <Bottom />
    </>
  );
}
