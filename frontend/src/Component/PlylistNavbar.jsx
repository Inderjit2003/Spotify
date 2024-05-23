import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Style from '../CSS/Home.module.css'

export default function PlylistNavbar({handleNavClick}) {
  const handleBackwardClick = () => {
    handleNavClick('cmp1');
  };

  const handleForwardClick = () => {
    handleNavClick('cmp2');
  };
  return (
    <div className='mx-1 '>    
    <Navbar  sticky='top' expand="lg" >
       <Container className='mt-1'>


         <Button variant='dark' className='me-2 rounded-circle border-0' size='sm' onClick={handleBackwardClick}> 
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
             </svg>
         </Button>


         <Button variant='dark' className='me-2 rounded-circle border-0' size='sm'  onClick={handleForwardClick}> 
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                       </svg>
         </Button>

         
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto">
   </Nav>
   <Nav>
     <div className={` ${Style.list}`}>
     <Button href='/Signup' className={`mx-3 border-0 fs-6 fw-semibold ${Style.text}`} style={{backgroundColor:'#121212'}} >Sign up</Button></div>
     <Button href='/Login' variant='light' className={`me-4 rounded-pill  p-2 px-4 py-2 fw-bold ${Style.button}`} >Login</Button>
   </Nav>
 </Navbar.Collapse>
</Container>
</Navbar>
</div>

  )
}