import React, { useContext, useState } from 'react'
import { Card, CardBody, CardImg, CardText, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import style from '../CSS/Home.module.css';
import Style from '../CSS/LoginHome.module.css';
import songContext from '../contexts/songContext';
export default function HomeARPM({items , onPlayPause}) {

    const {currentSong,setCurrentSong}= useContext(songContext);
    console.log(currentSong);
   
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [audioPath, setAudioPath] = useState(null);

    const handleCardClick = (index) => {
      setSelectedCardIndex(index);
      setCurrentSong(items[index]);
      setAudioPath(items[index].src); // Set audio path when card is clicked
      setIsPlaying(true); // Auto-play when card is clicked
      onPlayPause(items[index].src); // Notify parent component about play action
   
    };
  
    const handlePlayPause = (path) => {
        // setIsPlaying(!isPlaying); // Toggle play/pause state
        // onPlayPause(audioPath); // Notify parent component about play/pause action    
        if(isPlaying){
            setIsPlaying(false);
            onPlayPause(null);
        }else{
            setIsPlaying(true);
            onPlayPause(audioPath)
        }
    };
  return (
<div>
            <Container fluid className={` ${Style.scrollStart}`}>
                <div>
                    
                    <section className="mt-2">
                            <div>
                                <Row className="justify-content-between align-items-center">
                                    <Col xs={12} sm={8}>
                                        <a href="/" className="text-decoration-none text-white">
                                            <h4>Spotify Playlist</h4>
                                        </a>
                                    </Col>
                                    <Col xs={12} sm={4} className={`${style.list} text-end`}>
                                        <a href="/" className="text-decoration-none text-white">
                                            <p className={`${style.text}`} >show all</p>
                                        </a>
                                    </Col>
                                </Row>
                                <Row xs={1} md={2} lg={3} xl={6} className="g-0 p-2">
                                    {items.map((value, index) => (
                                        <Col key={index} >
                                            <Card   onClick={() => handleCardClick(index)}
                                            style={{background:'#434343'}}
                                                className={`mb-2 p-2 ${style.cardbody}`} >
                                                <Card.Img variant="top" src={value.img_src} style={{ borderRadius: '1vh' }} />
                                                <Card.Body  style={{ color: 'white', height: '7rem' }}>
                                                    <Card.Text>
                                                        <h6>{value.title}</h6>
                                                        <p className={style.p}>{value.artist}</p>
                                                    </Card.Text>
                                                        <div className={style.play} onClick={handlePlayPause}>
                                                        {isPlaying ? (
                            <FontAwesomeIcon icon={faPause} />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} />
                        )}
                                                        </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                    </section>
                </div>
            </Container>
        </div>
  )
}
