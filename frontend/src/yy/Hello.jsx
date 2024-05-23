import React, { useEffect, useState ,useRef } from 'react';
import SplitPane from 'react-split-pane';
import a1 from '../assets/music/Bir Zindagi.mp3';
import a2 from '../assets/music/Apa Fer Milange.mp3';
import a3 from '../assets/music/Bhali Kare Kartar.mp3';
import a4 from '../assets/music/Chal Jindiye.mp3';
import a5 from '../assets/music/My Pride.mp3';
import { Row ,Container } from 'react-bootstrap';
import PLayer from './PLayer';
import Bottom from './Bottom';

export default function hello() {
    const songs = [
        {
          img_src: 'https://i.scdn.co/image/ab67616d00001e02d6ae8f55846c610a0b112960',
          title: 'Zindagi',
          artist: 'Bir Singh',
          src: a1,
          color:' #1e3b60'
        },
        {
          img_src: 'https://i.scdn.co/image/ab67616d00001e0284a4d897fd4310573be70012',
          title: 'Apa fer milanga (Lofi version)',
          artist: 'Savi kahlon',
          src: a2,
          color:'#1e6051'
        },
        {
          img_src: 'https://i.scdn.co/image/ab67616d00001e023180f91f2221f258e5865b1e      ',
          title: 'Bhale Kare Kartar',
          artist: 'Bir Singh',
          src: a3,
          color:'#333073'
        },
        {
          img_src: 'https://i.scdn.co/image/ab67616d00001e021bbccdf9094270ef73e39b91      ',
          title: 'Chal jindiye',
          artist: 'Amrinder Gill',
          src: a4,
          color:'#73305b'
        },
        {
          img_src: 'https://i.scdn.co/image/ab67616d00001e020bf67e6f69d194a32295c686',
          title: 'My Pride',
          artist: 'Tarsem Jasar',
          src: a5,
          color:'#72100e'
        },
      ];
      const audio = useRef(null);
      const [isPlaying,setIsPlaying ] = useState(false);
    
      useEffect(() =>{
        if(isPlaying){
          audio.current.play();
        }else{audio.current.pause();}
      })
  return (
    <div>
      <Container>
        <Row>
         <PLayer songs={songs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </Row>
        <Row>
            <Bottom />
        </Row>
      </Container>
    </div>
  )
}
