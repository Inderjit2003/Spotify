import React ,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

import { BiSearch } from 'react-icons/bi'; // Import the search icon from react-icons library
import Style from '../CSS/LoginHome.module.css';

import style from '../CSS/Home.module.css';
export default function SearchNav({val , se,handleInstallClick , handleprofileClick, handleBellIconClick}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMenuItemClick = () => {
    setShowDropdown(false);}
    // Handle menu item click actions here
  return (
//     <div>
//          <div className='mx-1 '>    
//     <Navbar  sticky='top' expand="lg" >
// <Container className='mt-2'>
//  <Button variant='dark' className='me-2 rounded-circle border-0' size='sm' disabled > 
//  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
//       <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
//      </svg>
//  </Button>
//  <Button variant='dark' className='me-2 rounded-circle border-0' size='sm' disabled> 
//  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
//     <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
//                </svg>
//  </Button>
//  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//  <Navbar.Collapse id="responsive-navbar-nav">
//  <Nav className="me-auto">
//  <div className={`ms-4 rounded-pill `} >
//                  <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-search" viewBox="0 0 16 16">
//                   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
//                 </svg>
//              <input type="text" value={val} onChange={se} className='m-2 p-2' style={{backgroundColor:'#121212',borderColor:'#121212',color:'white',width:'25rem',border:'0', }} />
//               </div>
// </Nav>
//  </Navbar.Collapse>
// </Container>
// </Navbar>
// </div>
//     </div>
<div>
<div className='mx-1 '>    
<Navbar  sticky='top' expand="lg" >
<Container className='mt-2'>
<Button variant='dark' className='me-2 rounded-circle border-0' size='sm' href='/home' > 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>
</Button>
<Button variant='dark' className='me-2 rounded-circle border-0' size='sm' disabled> 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
      </svg>
</Button>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">


<Nav className="me-auto">

<div style={{ position: 'relative', backgroundColor: '#333',width:'50vh', height:'6vh', border:'white', borderRadius: '50px', padding: '10px' }}>
<div style={{ display: 'flex', alignItems: 'center'}}>
<span style={{ color: '#b3b3b3', marginRight: '10px' }}>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white"
style={{marginLeft:'1vh'}} class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
</span>
<input 
type="text" 
value={val} 
onChange={se} 
className='m-0 p-0' 
style={{ 
backgroundColor: '#333', 
borderColor: 'transparent', 
color: 'white', 
width: '48vh',
paddingLeft: '0', 
paddingRight: '10px', // Margin to the right of the search icon
outline: 'none',
fontSize: '14px',
fontWeight: '500'
}} 
placeholder="What do you want to play?"
/>
</div>


</div>
</Nav>
<Nav className="me-auto">
</Nav>
       <Nav >
       <Button
className={`mx-1 btn-sm px-3 ${style.button}`}  style={{borderRadius:'25px', backgroundColor:'black', borderColor:'black'}}>
 <a 
 onClick={handleInstallClick}
 className={style.navA} style={{color:'white'}}>
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
<Button variant="dark" 
onClick={handleBellIconClick}
style={{borderRadius:"100px", backgroundColor:'black', borderColor:'black'}} className='mx-2 btn-sm'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>
</Button>
<Button
   variant="dark"
   style={{ borderRadius: '100px', paddingBottom: '6px', backgroundColor: 'black', borderColor: 'black' }}
   className="mx-1 btn-sm p-1"
   onClick={handleButtonClick}
 >
   <svg  height={'24px'} width={'24px'} style={{ borderRadius: '100px' }} alt="Profile"  fill="white" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="Icons" stroke="none" stroke-width="1" fill="white" fill-rule="evenodd">
<g id="Color-" transform="translate(-200.000000, -460.000000)" fill="white">
   <path d="M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460" id="Spotify">

</path>
</g>
</g>
</svg>
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
       </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
</div>
</div>
  )
}
