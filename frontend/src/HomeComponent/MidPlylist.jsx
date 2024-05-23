import React, { useState } from 'react';
import style from '../CSS/Home.module.css';
import Style from '../CSS/LoginHome.module.css';
import { Card, Col, Container, Row ,CardBody} from 'react-bootstrap';
import HomeFooter from './HomeFooter';
import Plc from '../SharedComponent/Plc';

export default function MidPlylist({ items, onPlay }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };
    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    const handleCardClick = (index) => {
        if (selectedCardIndex === index) {
            // If the same card is clicked again, deselect it

            setSelectedCardIndex(null);
        } else {
            setSelectedCardIndex(index);
            setIsPlaying(!isPlaying);
            setAudioPath(selectedItem.src);
            onPlay(selectedItem.src);
        }
    };
    const handleShowAllClick = () => {
        setSelectedCardIndex(null); // Deselect the selected card
    };

    return (
        <div>
            <Container fluid className={` ${Style.scrollStart}`}>
                <div>
                    <section>
                
                    </section>
                    <section className="mt-2">
                        {!selectedCardIndex ? (
                            <div>
                                <Row className="justify-content-between align-items-center">
                                    <Col xs={12} sm={8}>
                                        <a href="/" className="text-decoration-none text-white">
                                            <h4>Spotify Playlist</h4>
                                        </a>
                                    </Col>
                                    <Col xs={12} sm={4} className={`${style.list} text-end`}>
                                        <a href="/" className="text-decoration-none text-white">
                                            <p className={`${style.text}`} onClick={handleShowAllClick}>show all</p>
                                        </a>
                                    </Col>
                                </Row>
                                <Row xs={1} md={2} lg={3} xl={6} className="g-0 p-2">
                                    {items.map((value, index) => (
                                        <Col key={index}>
                                            <Card
                                                className={`mb-2 p-2 ${style.cardbody}`}
                                                onClick={() => handleCardClick(index)}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}
                                                style={{ backgroundColor: hoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                                            >
                                                <Card.Img variant="top" src={value.img_src} style={{ borderRadius: '1vh' }} />
                                                <Card.Body style={{ color: 'white', height: '7rem' }}>
                                                    <Card.Text>
                                                        <h6>{value.title}</h6>
                                                        <p className={style.p}>{value.artist}</p>
                                                    </Card.Text>
                                                    {hoveredIndex === index && (
                                                        <div className={style.play}>
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
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        ) : (
                            <Plc items={items} index={selectedCardIndex} onPlay={onPlay} />
                        )}
                    </section>
                </div>
                <HomeFooter />
            </Container>
        </div>
    );
}
