import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Col, Row } from 'react-bootstrap';
import img1 from '../assets/logo.svg';
import style from '../CSS/Homefooter.module.css'
import { Dropdown } from 'react-bootstrap';
import Style from '../CSS/Home.module.css'


export default function PlylistNavbar({handleBellIconClick ,handleInstallClick, handleprofileClick}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMenuItemClick = () => {
    setShowDropdown(false);
    // Handle menu item click actions here
  };
  return (
    <div className='mx-1 '>    
    <Navbar  sticky='top' expand="lg" >
      <Container className='mt-1'>
       <Button variant='dark' className='mx-1' style={{borderRadius:'50%'}} size='sm' disabled> 
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
           </svg>
       </Button>
       <Button variant='dark'  className='mx-1' style={{borderRadius:'50%'}} size='sm'  disabled> 
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                     </svg>
       </Button>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
         </Nav>
         <Nav>
           <div className='m-4'>
        <Button variant="light" className={`mx-1 btn-sm px-3 ${style.button}`} style={{borderRadius:'25px'}}  >
          <a  className={style.navA} style={{color:'black'}} >
          Explore Premium
          </a>
        
        </Button>
        <Button onClick={handleInstallClick} className={`mx-1 btn-sm px-3 ${style.button}`}  style={{borderRadius:'25px', backgroundColor:'black', borderColor:'black'}}>
          <a  className={style.navA} style={{color:'white'}}>
            <span>
                <svg data-encore-id="icon" role="img"
                style={{paddingBottom:'1px'}}
                width="16"
                height="16" 
                fill='white'
                 aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path></svg></span>

            <span className='ms-1'>
              
                   Install App
            </span>
            </a>
        </Button>
        <Button
        onClick={handleBellIconClick}
        variant="dark" style={{borderRadius:"100px", backgroundColor:'black', borderColor:'black'}} className='mx-2 btn-sm'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
         </svg>
        </Button>
 {/* Button to toggle dropdown */}
           
            <Button
            variant="dark"
            style={{ borderRadius: '100px', paddingBottom: '6px', backgroundColor: 'black', borderColor: 'black' }}
            className="mx-1 btn-sm p-1"
            onClick={handleButtonClick}
          >
            <img src={img1} height={'24px'} width={'24px'} style={{ borderRadius: '100px' }} alt="Profile" />
          </Button>
          {/* Dropdown menu */}
          {showDropdown && (
            <div className="dropdown-menu show" style={{ position: 'absolute', right: '0', zIndex: '1', backgroundColor:'' }}>
              <Button  className={`dropdown-item ${style.dropdownItem}`} onClick={handleprofileClick}>
              
              
                Profile
              </Button>
              <Button  className={`dropdown-item ${style.dropdownItem}`} onClick={handleMenuItemClick}>
                Settings
              </Button>
              <div className="dropdown-divider"></div>
              <Button className={`dropdown-item ${style.dropdownItem}`} onClick={handleMenuItemClick}>
                <a href='/'>
                Logout
                </a>
               
              </Button>
            </div>
          )}
          </div>
         </Nav>
       </Navbar.Collapse>
      
      </Container>
     
</Navbar>
 
<Row className='mx-2 mb-2'>
          <Col>
          <Button variant="light"  className='mx-1 btn-sm' style={{borderRadius:'25px'}}>All</Button>
          <Button variant="dark" className='mx-1 btn-sm' style={{borderRadius:'25px'}}>Music</Button>
          <Button variant="dark" className='mx-1 btn-sm' style={{borderRadius:'25px'}}>Podcasts</Button>
          </Col>
        </Row>
</div>


  )
}