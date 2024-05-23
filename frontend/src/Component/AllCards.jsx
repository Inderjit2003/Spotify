import React from 'react';
import style from '../CSS/Home.module.css'
import { Card, Col, Row } from 'react-bootstrap';

export default function AllCards({ data, type, handleCardClick, hoveredIndex, handleMouseEnter, handleMouseLeave }) {
    return (
        <div>
            <section>
                <h3 style={{ fontWeight: '700', color: 'white' }} className='mt-5'>{type === 'artist' ? 'Popular artists' : 'Popular radios'}</h3>
                <Row xs={1} md={2} lg={3} xl={6} className="g-0">
                    {data.map((value, index) => (
                        <Col key={index}>
                            <Card
                                onMouseEnter={() => handleMouseEnter(index, type)}
                                onMouseLeave={() => handleMouseLeave(type)}
                                className={`mb-2 p-2 border-0`}
                                onClick={() => handleCardClick(index)}
                                style={{
                                    height: '16rem',
                                    backgroundColor: hoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212',
                                    cursor: 'pointer',
                                    
                                }}
                            >
                                <Card.Img
                                 style={{ borderRadius: '1vh', height: '21vh', width: '21vh' }}
                                    variant="top"
                                    src={value.img}
                                />
                                <div className="mt-2" style={{ color: 'white'}}>
                                    <h6 style={{ fontSize: '15px', fontWeight: '550' }} className={style.headingname}
                                    >{value.name}</h6>
                                    <p className={style.p}>{value.desc}</p>
                                </div>

                                {hoveredIndex === index && (
                                    <div className={style.play} >
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
                    ))}
                </Row>
            </section>
        </div>
    );
}