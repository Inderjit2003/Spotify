import React, { useState , useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import style from '../CSS/LoginHome.module.css';
import Artist from '../assets/svg/martist.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const 

Plc = ({ items, index, onPlayPause  }) => {
    const [addFavourite, setAddFavourite] = useState(false);

    const selectedItem = items[index];
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying); // Toggle isPlaying state
        onPlayPause(selectedItem.src);
    };
    const handleAddFavourite = () => {
        setAddFavourite(!addFavourite)
        const message = addFavourite ? 'Added to favorites' : ' Removed from favorites';
        toast.success(message);
    };

    return (
        
        <div style={{backgroundColor:selectedItem.color}} >
            <Container  >
                <Row>  
                    <Col className='m-4' xs={3}  >
                        <img src={selectedItem.img_src} alt={selectedItem.title} className='img-thumbnail rounded' style={{ width: '35vh' }} />
                    </Col>
                    <Col className='text-white ms-2' style={{ marginTop: '6%' }} >
                        <h1>{selectedItem.title}</h1>
                        <div>
                            <img src={Artist} alt="" />
                            <span className={`ms-3 m-2 mb-2 fs-5 mt-3 fw-semibold`}>{selectedItem.artist}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
            <Container>
                <Row className='mt-4'>
                    <Col xs={1} >
                        <span >
                            <div className={` mt-1 ${style.play}`} onClick={handlePlayPause}>
                        {isPlaying ? (
                            <FontAwesomeIcon icon={faPause} />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} />
                        )}
                            </div>
                        </span>
                    </Col>
                    <Col className='mt-1' >
                        <span className='ms-3  '>
                        <span 
                              style={{
                                  backgroundColor:selectedItem.color ,
                                  border: 'none',
                                  transition: 'background-color 0.3s ease-in-out', // Smooth background color transition
                                  borderRadius: '50%', // Make the button circular
                                  overflow: 'hidden', // Hide overflow content for circular shape
                                  width: '50px', // Adjust width and height for the circular button
                                  height: '50px',
                                    }}
                                    onClick={handleAddFavourite}>
                               {addFavourite ? (
                                   <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="40"
                                       height="40"
                                       viewBox="0 0 24 24"
                                       fill="white"
                                     
                                   >
                                       <path d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"></path>
                                       <path d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0       1 1 1z"></path>
                                   </svg>      
                               ) : (      
                                   <svg      
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="40"
                                       height="40"
                                       viewBox="0 0 24 24"
                                       fill="white"
                                       style={{
                                           transition: 'transform 0.3s ease-in-out', // Smooth transform transition for the checked icon
                                           transform: 'rotate(360deg)', // Rotate the icon 360 degrees
                                       }}
                                   >
                                       <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0       0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
                                   </svg>      
                               )}      </span>      
                        </span>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-4  text-white' style={{background:'linear-gradient(180deg,#282828, #121212), url(${selectedItem.color})'}} >
            <Container>
                <Row>
                    <Col className='mt-4'>
                    <div>
                         <span className='fs-5 fw-semibold ms-4'>Lyrics</span>
                         <span>{selectedItem.lyrics}</span>
                         </div>
                    </Col> 
                </Row>
            </Container>
        
            <div className='mt-4' >
                <h1 className=''></h1>
                        <Row >
                         <Col className='ms-4' xs={1} >
                         <img src={selectedItem.img_src} alt={selectedItem.title}  style={{width:'7vh' ,height:'7vh' , marginTop:"4vh", borderRadius:'50%'}}/>
                         </Col>
                         <Col className='text-white ' style={{marginTop:'4vh'}}>
                         <span className='fs-6 fw-bold'>Arist</span>
                         <span className='fs-6'><p>{selectedItem.artist}</p></span>
                         </Col>
                     </Row>

            </div>
            </Container>
            </div>
                    {/* ToastContainer for displaying toasts */}
                    <ToastContainer position="bottom-center" animation='true' autoClose={500} hideProgressBar='true' />
        </div>
    );
};

export default Plc;
