import React,{useState} from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import Style from '../CSS/Home.module.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../assets/images/1.png';
import style from '../CSS/Homefooter.module.css'
import HomeFooter from './HomeFooter';
import PlylistNavbar from './PlylistNavbar';

export default function BellIcon({handleInstallClick, handleBellIconClick, handleprofileClick}) {
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
        {/* ------------------------for navbar--------------- */}
        <PlylistNavbar handleInstallClick={handleInstallClick} handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick} />


        {/* -----------------------for mid ------------------- */}

    <div className={`mt-3 ${Style.scrollInstallApp}`} 
    style={{backgroundImage: 'linear-gradient(to top , #121212 , rgba(37, 33, 33, 0.693)  )', borderEndEndRadius:'1vh', borderEndStartRadius:'1vh'}}>
  

          <div className='mt-5 mx-4'>
          <h2 style={{fontWeight:'700', color:'white'}} >
                What’s New
             </h2>
             <h6 style={{color:'rgb(103, 100, 100)',fontWeight:'700', fontSize:'14px'}}>
                The latest releases from artists, podcasts and shows you follow.
             </h6>

          </div>
          
            <div className=' mx-5' style={{marginTop:'17vh', marginBottom:'29vh'}}>
            <h3 style={{fontWeight:'700', color:'white', marginLeft:'20vh'}} className='mb-3'>
            We don’t have any updates for you yet
             </h3>
             <h6 style={{color:'white',fontWeight:'700', fontSize:'16px'}}>
             When there’s news, we’ll post it here. Follow your favourite artists and podcasts to stay updated on them too.
             </h6>
            </div>

          
           
           <HomeFooter />
           </div>
</Card>
</div>


  )
}