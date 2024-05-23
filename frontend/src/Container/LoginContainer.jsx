import React from 'react'
import { Card, Container } from 'react-bootstrap'
import SplitPane from 'react-split-pane'
          
          export default function LoginContainer() {
            const handlelibclick = (playlist) => {
                console.log(playlist)
                setPlaylist(playlist);
            
              };
              const lib=[{
                imag:'https://misc.scdn.co/liked-songs/liked-songs-64.png',
                name:'Liked Songs',
                title:'Playlist',
                color:' linear-gradient(to right , #121212 0%, rgb(118, 118, 255) 100%)'
              },
              {
                imag:'https://misc.scdn.co/your-episodes/SE-64.png',
                name:'Your Episodes',
                title:'Episodes',
                color:'linear-gradient(to right , #121212 0%, rgb(0, 100, 80) 100%)'
              },
             
            ]
            return (
              <div>
                  <div className='container'>
                      <Container className={`${Style.container}`} >
                          <SplitPane   split='vertical'
                      minSize={305}
                      maxSize={-1100}
                      defaultSize={400}
                      style={{ backgroundColor: 'black' }} >
                             <div className={` me-1 ${Style.pane}`}>
                             <div className='upsidebar'>
                  <Stack gap={2}>
                    <div className='Up'>
                      <Card style={{backgroundColor:'#121212' , border:'none'}} className='ms-2 mt-2'>
                      <div className='upsidebar'>
                 <ul style={{listStyle:'none'}}>
                 
                  <li className='mt-4'>
                      <a href="/Home" className={`text-decoration-none text-white ${Style.list}`}>
                      <svg className={`${Style.icon}`} fill='white' width="26" height="26"  data-encore-id="icon" role="img" aria-hidden="true"
                       viewBox="0 0 24 24">
                       <path  d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path></svg>
                       <span className={`ms-3 fs-6 ${Style.text}`}>Home</span>
                      </a>
                  </li>
                  <li className='mt-4'>
                      <a href="/search" className={`text-decoration-none text-white ${Style.list}`}>
                      <svg className={Style.icon} fill='white' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path 
                        d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                      </svg>
                      <span className={`ms-3 fs-6 ${Style.text}`}  >Search</span>
                      </a>
                  </li>
                 </ul>
              </div>
                      </Card>
                    </div>
                    <div className='mid'>
                      <Card style={{backgroundColor:'#121212' , border:'none', maxHeight:'500px'}} className=' ms-2'>
                      <div className='midsidebar'>
                             <div style={{height:'77vh'}}>
                <Row>
                  <Col xs={8}  className={`my-3 mx-4` }>
                     <a href="/home" className={`text-decoration-none text-white ${Style.icon}`}> 
                       <svg  data-encore-id="icon" className={Style.icon} width="26" height="26" fill='white'
                                role="img" aria-hidden="true" viewBox="0 0 24 24"
                                class="Svg-sc-ytk21e-0 bneLcE">
                                <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 
                                0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0
                                0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                                 <span   className={`ms-3 `} class="Svg-sc-ytk21e-0 ms-3 bneLcE"  style={{fontSize:'17px'}}>Your Library</span>
                       </a>
                  </Col>
                  {/* <Col xs={2}  className={`${Style.list}`} style={{marginTop:'14px'}}>
                       <Button variant="none" style={{marginLeft:'5vh'}} size="sm">
                       <svg data-encore-id="icon" className={Style.icon} width="16" height="16" fill='white'  role="img" aria-hidden="true" viewBox="0 0 16 16" >
                             <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
           
                       </Button>
               
                  </Col> */}
                 <Col xs={2} className={`mt-2 ${Style.list}`} >
                       <Button variant="none" size="sm" >
                       <svg xmlns="http://www.w3.org/2000/svg"className={Style.icon} width="34" height="34" fill="white"  viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                        </svg>
                     </Button>
                   </Col>
               </Row>
          
          
                  {/* ----------------------button on library-------------------- */}
                 <Row className="m-1">
                <Col>
                  {/* <Button
                    variant="dark"
                    size="sm"
                    className=" px-3"
                    style={{ borderRadius: '25px', fontWeight: '500' }}
                    onClick={handleFirstButtonClick}
                  >
                    All
                  </Button>
                  {showAll && ( */}
                    <>
                      <Button
                        variant="dark"
                        size="sm"
                        className="mx-1"
                        style={{ borderRadius: '25px', fontWeight: '500' }}
                      >
                        Playlists
                      </Button>
                      <Button
                        variant="dark"
                        size="sm"
                        className="mx-1"
                        style={{ borderRadius: '25px', fontWeight: '500' }}
                      >
                        Albums
                      </Button>
                      </>
                  {/* )} */}
                  
                </Col>
               
               </Row>
          
               {/* --------------for search------------- */}
               <Row className='mx-2 my-1'>
               <div style={{ display: 'flex', alignItems: 'center', marginTop: '3px' }}>
                <div
                  style={{
                    paddingLeft:'1vh',
                    backgroundColor: searchOpen ? '#333' : 'transparent',
                    width: '30vh',
                    height: '5vh',
                    border: 'white',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={toggleSearch}
                >
                  <span style={{ color: '#b3b3b3', marginRight: '10px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white"
                    style={{ marginLeft: '1vh' }} className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                  </span>
                  <input 
                    type="text" 
                    value={searchQuery} 
                    onChange={handleSearch} 
                    className='m-0 p-0' 
                    style={{ 
                      backgroundColor: 'transparent', 
                      borderColor: 'transparent', 
                      color: 'white', 
                      width: searchOpen ? '25vh' : '0',
                      paddingLeft: '0', 
                      paddingRight: '10px', // Margin to the right of the search icon
                      outline: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'width 0.4s ease'
                    }} 
                    placeholder="Search in your Library"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
          
          
          </Row>
          
          
          
               
               {/* ---------------------------your library playlist-------------------------- */}
               <Container className={style.scrolllib}>
            {searchQuery === '' ? (
              // If search query is empty, show all library items
              lib.map((value, index) => (
                <Row key={index} onClick={() => handlelibclick(value)}>
                  <Card
                    className={`${style.libcards}`}
                    style={{
                      cursor: 'pointer',
                      marginLeft: '1vh',
                      border: 'none',
                      width: '41vh',
                      backgroundColor: hoveredIndex === index ? '#333' : '#121212',
                      transition: 'background-color 0.3s', // Add transition for smooth effect
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Row className='mt-1'>
                      <Col xs={2}>
                        <Card.Img src={value.imag} style={{ width: '7vh', height: '7vh', borderRadius: '4px' }} variant="top" />
                      </Col>
                      <Col>
                        <Row>
                          <h6 className='mt-2 mx-2' style={{ color: 'white' }}>{value.name}</h6>
                        </Row>
                        <Row>
                          <h6 className=' mx-2' style={{ color: 'rgba(104, 104, 104, 0.693)', fontWeight: '600', fontSize: '11px' }}>{value.title}</h6>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Row>
              ))
            ) : (
              // If search query is not empty, filter library items and show filtered ones
              filteredItems.length > 0 ? (
                filteredItems.map((value, index) => (
                  <Row key={index} onClick={() => handlelibclick(value)}>
                    <Card
                      className={`${style.libcards}`}
                      style={{
                        cursor: 'pointer',
                        marginLeft: '1vh',
                        border: 'none',
                        width: '41vh',
                        backgroundColor: hoveredIndex === index ? '#333' : '#121212',
                        transition: 'background-color 0.3s', // Add transition for smooth effect
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Row className='mt-1'>
                        <Col xs={2}>
                          <Card.Img src={value.imag} style={{ width: '7vh', height: '7vh', borderRadius: '4px' }} variant="top" />
                        </Col>
                        <Col>
                          <Row>
                            <h6 className='mt-2 mx-2' style={{ color: 'white' }}>{value.name}</h6>
                          </Row>
                          <Row>
                            <h6 className=' mx-2' style={{ color: 'rgba(104, 104, 104, 0.693)', fontWeight: '600', fontSize: '11px' }}>{value.title}</h6>
                          </Row>
                        </Col>
                      </Row>
                    </Card>
                  </Row>
                ))
              ) : (
                // If no matching item found, display "Not Found"
                <h2>Not Found</h2>
              )
            )}
          </Container>
            </div>
          
                             </div>
                      </Card>
          
                    </div>
                  </Stack>
                            </div>
                          
                             </div>
                             <div className={` me-1 ${Style.pane}`}>
                                <div className='mx-1'>
                                    <Card  style={{ backgroundColor: '#121212', border: 'none' }}>
                                        
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
           <div className='m-1'>
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
        <Row className='mx-2 mb-1'>
          <Col>
          <Button variant="light"  className='mx-1 btn-sm' style={{borderRadius:'25px'}}>All</Button>
          <Button variant="dark" className='mx-1 btn-sm' style={{borderRadius:'25px'}}>Music</Button>
          <Button variant="dark" className='mx-1 btn-sm' style={{borderRadius:'25px'}}>Podcasts</Button>
          </Col>
        </Row>
                              </div>
                              <div className={`mt-2 ${Style.scrollStart}`}>
                                          <div></div>
                                        </div>
                                    </Card>
                                </div>
                             </div>
                          </SplitPane>
                      </Container>
                  </div>
              </div>
            )
          }
