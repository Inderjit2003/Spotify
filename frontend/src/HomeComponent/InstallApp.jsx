import React,{useState} from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import Style from '../CSS/Home.module.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../assets/images/1.png';
import style from '../CSS/Homefooter.module.css'
import HomeFooter from './HomeFooter';
import PlylistNavbar from './PlylistNavbar';

export default function InstallApp({handleBellIconClick, handleInstallClick ,  handleprofileClick}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  
  const handleMenuItemClick = () => {
    setShowDropdown(false);
    // Handle menu item click actions here
  };
  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>


    <PlylistNavbar handleInstallClick={handleInstallClick} handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick} /> 


    <div className={` mt-3 ${Style.scrollInstallApp}`}
     style={{ backgroundImage: 'linear-gradient(to top , #121212 , rgba(37, 33, 33, 0.693)  )', borderEndEndRadius:'1vh', borderEndStartRadius:'1vh'}}>
        
           <Card className={`border-0 mt-4 `} style={{height:'90vh', marginBottom:'-10vh',marginLeft:'32vh', width:'90vh',backgroundColor:'transparent' }}>
            <Card.Img  src={'https://open.spotifycdn.com/cdn/images/devices/mac.3fbeb8c6.png'} />
            <h3 style={{fontWeight:'700', color:'white'}}>
            Seamlessly listen to music you love. Download the Spotify app for your computer.
            </h3>
            <Button className='mt-4 ' 
             style={{ backgroundColor: '#1ed760', borderColor: '#1ed760',
              height:'8vh', width:'30vh',
               borderRadius:'30vh',
               marginLeft:'30vh'}}>
                <a href='https://download.scdn.co/SpotifySetup.exe' className={style.install}>
                Get our free App
                </a>
                
            </Button>
           </Card>
           <HomeFooter />
           </div>
</Card>
</div>


  )
}