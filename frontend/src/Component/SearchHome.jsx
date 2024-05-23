import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container } from 'react-bootstrap';
import Style from '../CSS/Home.module.css';
import Searchcomp from '../Component/Searchcomp';
import Swal from 'sweetalert2';
import HomeFooter from './HomeFooter';


const SearchHome = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const[hoveredIndex, sethoveredindex] =  useState(null)

  const handleMouseEnter=(index)=>{
    sethoveredindex(index);
  }
  
  const handleMouseLeave=()=>{
    sethoveredindex(null);
  }

  //alert on card click
  const handleCardClick = (index) => {
    console.log('Clicked on card:', index);
    Swal.fire({
        background:'#121212',
        color:'white',
        title:'Start listening with a free Spotify account',
        html:'Log in to play playlists.',
        // timer:1500,
        width: 800,
        height: 800,
        padding: "3em",
        confirmButtonText:'Login',
        cancelButtonColor:'#121212',
        showCancelButton:true,
        cancelButtonText:'Not now',
      
    }).then((result) =>{
        if(result.isConfirmed){
            window.location.href = '/login'
        }
    })
    // Add your logic here to handle the click event
};


  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the specific array you want to search through
  //   const filtered = items.playlist.filter((item) =>
  //     item.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredItems(filtered);
  // };

   // Filter through all items
   const filtered = Object.values(items).flatMap(itemGroup =>
    itemGroup.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
  );
  setFilteredItems(filtered);
};
  return (
    <div className='mx-1 py-2'>
      <Card style={{ backgroundColor: '#121212', border: 'none' }}>
        {/* ----------------------------------for navbar----------------------------------------- */}
        <div className='mx-1 '>
          <Navbar sticky='top' expand="lg">
            <Container className='mt-1' style={{marginBottom:'-1vh'}}>
            <Button variant='dark' className='me-2 rounded-circle border-0' size='sm' > 
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                       </svg>
                   </Button>

                   <Button variant='dark' className='me-2 rounded-circle border-0' size='sm'  > 
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                 </svg>
                   </Button>
              <div>
                <Searchcomp val={searchQuery} se={handleSearch} />
              </div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  {/* Nav content */}
                </Nav>
                <Nav>
                  <div className={` ${Style.list}`}>
                    <Button href='/Signup' className={`mx-3 border-0 fs-6 fw-semibold ${Style.text}`} style={{ backgroundColor: '#121212' }}>Sign up</Button>
                  </div>
                  <Button href='/Login' variant='light' className={`me-4 rounded-pill  p-2 px-4 py-2 fw-bold ${Style.button}`} >Login</Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        {/* ----------------------------------for playlist----------------------------------------- */}
        <div  className={`mt-2 ${Style.scrollStart}`}>
          <Row
            className="justify-content-between align-items-center p-2"
            style={{
              backgroundImage: 'linear-gradient(to top , #121212 , rgba(37, 33, 33, 0.693)  )',
            }} >
            <Col xs={12} sm={8}>
              <h5 style={{ fontWeight: '700', fontSize: '22px', color: 'white', width:"100%" }} className={` mx-4 my-4`}>
                Browse all
              </h5>
            </Col>
          </Row>

          <Row xs={1} md={2} lg={6} xl={6} className="g-0">
  {filteredItems && filteredItems.length > 0 ? (
    filteredItems.map((item, index) => (
      <div>
      <Col key={index} className='mx-2 my-2'>
        <Card
         onMouseEnter={() => handleMouseEnter(index)}
         onMouseLeave={handleMouseLeave}
         className={`mb-2 p-2 border-0`}
         onClick={() => handleCardClick(index)}

         style={{ height: '12rem',
        border:'none',
        backgroundColor: hoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212',
                 cursor: 'pointer'}}>
          <Card.Img src={item.img}   style={{ borderRadius: '2vh', height: '21vh', width: '21vh' }}
                          variant="top"/>
                          <h6 style={{ fontSize: '15px', fontWeight: '550', marginTop:'1vh', color:'white' }} >
                              {item.name} </h6>
                              {hoveredIndex === index && (
                                        <div className={Style.play}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="black"
                                                className="bi bi-play-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                            </svg>
                                        </div>
                                    )}
        </Card>
      </Col>
  </div>
    ))
  ) : (
   
            <Col xs={12} sm={8}>
              <div style={{marginLeft:'25vh',marginTop:'25vh'}}>
              <h5 style={{ fontWeight: '700', fontSize: '22px', color: 'white', width:'100vh' , alignItems:'center', justifyContent:'center', display:'flex' }}>
              No Results found
              </h5>
              <h5 style={{ fontWeight: '500', fontSize: '15px', color: 'white', width:'100vh', alignItems:'center', justifyContent:'center', display:'flex' }} >
              Please make sure your words are spelled correctly, or use fewer or different keywords.
        
              </h5>
              </div>
            </Col>
  )}
</Row>
<HomeFooter />
        </div>
      </Card>
    </div>
  );
}

export default SearchHome;