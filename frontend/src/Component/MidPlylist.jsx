import React from 'react'
import style from '../CSS/Home.module.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HomeFooter from './HomeFooter'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import AllCards from './AllCards';

export default function MidPlylist({ artist , album , radio , playlist}) {
    
    const [artistHoveredIndex, setArtistHoveredIndex] = useState(null);
    const [albumHoveredIndex, setAlbumHoveredIndex] = useState(null);
    const [radioHoveredIndex, setRadioHoveredIndex] = useState(null);
    const [playlistHoveredIndex, setPlaylistHoveredIndex] = useState(null);
    
    const handleMouseEnter = (index, type) => {
        if (type === 'artist') {
            setArtistHoveredIndex(index);
        } else if (type === 'album') {
            setAlbumHoveredIndex(index);
        } else if (type === 'radio') {
            setRadioHoveredIndex(index);
        } else if (type === 'playlist') {
            setPlaylistHoveredIndex(index);
        }
    };
    
    const handleMouseLeave = (type) => {
        if (type === 'artist') {
            setArtistHoveredIndex(null);
        } else if (type === 'album') {
            setAlbumHoveredIndex(null);
        } else if (type === 'radio') {
            setRadioHoveredIndex(null);
        } else if (type === 'playlist') {
            setPlaylistHoveredIndex(null);
        }
    };
    

    //---------------------------------------------------------------------------------------------------
                                     //use state for show all cards 
     //---------------------------------------------------------------------------------------------------
     const [showAllClicked, setShowAllClicked] = useState(false);
    const [showAllData, setShowAllData] = useState([]); // State to hold data for Show All
    const [albumsec , setalbumsec] = useState(true)
    const[radiosec,setradiosec]=useState(true)
    const[playlistsec, setplaylistsec] = useState(true);

    const handleShowAllClick = (e, type) => {
    e.preventDefault(); // Prevent the default behavior of the link
    if (type === 'artist') {
        setShowAllData(artist);
    } else if (type === 'album') {
        setShowAllData(album);
    } else if (type === 'radio') {
        setShowAllData(radio);
    } else if (type === 'playlist') {
        setShowAllData(playlist);
    }
    setShowAllClicked(true);
    setalbumsec(false);
    setradiosec(false);
    setplaylistsec(false)


};



    //-----------------------------------------------------------------------------------------------------
                                              //alert on click any card
    //-----------------------------------------------------------------------------------------------------
    
    const handleCardClick = (index) => {
        console.log('Clicked on card:', index);
        Swal.fire({
            background:'#121212',
            color:'white',
            title:'Playlist',
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
   
    return (
        
    <Container fluid className={`${style.scrollStart}`} style={{marginTop:'12px'}}>
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Artist */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}
      <section className="forartist">
        {showAllClicked ? (
             <AllCards
             data={showAllData}
             type="artist"
             handleCardClick={handleCardClick}
             hoveredIndex={artistHoveredIndex}
             handleMouseEnter={handleMouseEnter}
             handleMouseLeave={handleMouseLeave}
         />
            ) : (
                <div>
                <Row
                    className="justify-content-between align-items-center p-2"
                    style={{
                        backgroundImage: 'linear-gradient(to top , #121212 , rgba(37, 33, 33, 0.693)  )',
                    }}
                >
                    <Col xs={12} sm={8}>
                        <a href="/" className="text-decoration-none text-white">
                            <h5 style={{ fontWeight: '700', fontSize: '22px' }} className={style.Heading} >
                            Popular artists                          
                            </h5>
                        </a>
                    </Col>
                    <Col xs={12} sm={4} className={`${style.list} text-end`}>
                        <a href="/" className="text-decoration-none text-white">
                        <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'artist')}>
                                        Show all
                                    </p>
                        </a>
                    </Col>
                </Row>

                <Row xs={1} md={2} lg={3} xl={6} className="g-0">
                    {artist.slice(0,6).map((value, index) => (
                        <Col key={index}>
                                <Card
                                 onMouseEnter={() => handleMouseEnter(index, 'artist')}
                                 onMouseLeave={() => handleMouseLeave('artist')}
                                 className={`mb-2 p-2 border-0`}
                                 onClick={() => handleCardClick(index)}
                                 style={{
                                     height: '14rem',
                                     backgroundColor: artistHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212',
                                     cursor: 'pointer',
                                     display: 'block',
                                 }}
                                >
                                    <Card.Img
                                        style={{ borderRadius: '50vh', height: '21vh', width: '21vh' }}
                                        variant="top"
                                        src={value.img}
                                    />
                                    <div className="mt-2" style={{ color: 'white', fontWeight: '500' }}>
                                        <h6 style={{ fontSize: '15px', fontWeight: '550' }} className={style.headingname}>
                                            {value.name}
                                        </h6>
                                        <p className={style.p}>{value.desc}</p>
                                    </div>

                                    {artistHoveredIndex === index && (
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
                                </Card>
                        </Col>
                    ))}
                </Row>
                </div>
                )}
            </section>
     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Album */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}

    <section className='foralbum'>
        {albumsec ?
        <div>
            <Row className="justify-content-between align-items-center mt-4">
            <Col xs={12} sm={8}>
                <a href="/" className="text-decoration-none text-white">
                <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading}>
                Popular album
                </h5>
                </a>
            </Col>
            <Col xs={12} sm={4} className={`${style.list} text-end`}>
                <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'album')}>
                                        Show all
                </p>
                </a>
            </Col>
        </Row>
            <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
                {album.slice(0,6).map((value, index) => (
                    <Col key={index}>       
                        <Card
                            onMouseEnter={() => handleMouseEnter(index, 'album')}
                            onMouseLeave={() => handleMouseLeave('album')}
                            className={`mb-2 p-2 border-0`}   onClick={() => handleCardClick(index)}
                            style={{height:'16rem', backgroundColor: albumHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={value.img} />
                            <div className='mt-2' style={{  color: 'white' }}>
                            <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.name}</h6>
                                    <p className={style.p}>{value.desc}</p>
                                    </div>
                            
                            
                                {albumHoveredIndex === index && (
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
       
        </div> :""}   
    </section> 

     {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Radio */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}
     <section className='forradio'>
        {radiosec ?
        <div>
            <Row className="justify-content-between align-items-center mt-4">
            <Col xs={12} sm={8}>
                <a href="/" className="text-decoration-none text-white">
                <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading}>
                Popular radio
                </h5>
                </a>
            </Col>
            <Col xs={12} sm={4} className={`${style.list} text-end`}>
                <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'radio')}>
                                        Show all
                </p>
                </a>
            </Col>
        </Row>
            <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
                {radio.slice(0,6).map((value, index) => (
                    <Col key={index}>       
                        <Card
                            onMouseEnter={() => handleMouseEnter(index, 'radio')}
                            onMouseLeave={() => handleMouseLeave('radio')}
                            className={`mb-2 p-2 border-0`}   onClick={() => handleCardClick(index)}
                            style={{height:'16rem', backgroundColor: radioHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={value.img} />
                            <div className='mt-2' style={{  color: 'white' }}>
                            <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.name}</h6>
                                    <p className={style.p}>{value.desc}</p>
                                    </div>
                            
                            
                                {radioHoveredIndex === index && (
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
       
        </div> :""}   
    </section> 


      {/* ---------------------------------------------------------------------------------------------------------------- */}
                                                   {/* Section for Playlist */}
     {/* ---------------------------------------------------------------------------------------------------------------- */}

     <section className='forplaylist'>
        {playlistsec ?
        <div>
            <Row className="justify-content-between align-items-center mt-4">
            <Col xs={12} sm={8}>
                <a href="/" className="text-decoration-none text-white">
                <h5 style={{fontWeight:'700', fontSize:'22px' }} className={style.Heading}>
                Popular Playlist
                </h5>
                </a>
            </Col>
            <Col xs={12} sm={4} className={`${style.list} text-end`}>
                <a href="/" className="text-decoration-none text-white" >
                <p className={`${style.Showall}`} onClick={(e) => handleShowAllClick(e,'playlist')}>
                                        Show all
                </p>
                </a>
            </Col>
        </Row>
            <Row xs={1} md={2} lg={3} xl={6} className="g-0 ">
                {playlist.slice(0,6).map((value, index) => (
                    <Col key={index}>       
                        <Card
                            onMouseEnter={() => handleMouseEnter(index, 'playlist')}
                            onMouseLeave={() => handleMouseLeave('playlist')}
                            className={`mb-2 p-2 border-0`}   onClick={() => handleCardClick(index)}
                            style={{height:'16rem', backgroundColor: playlistHoveredIndex === index ? 'rgb(82, 82, 82)' : '#121212', cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={value.img} />
                            <div className='mt-2' style={{  color: 'white' }}>

                            <h6 style={{fontSize:'15px', fontWeight:'550'}} className={style.headingname}>{value.name}</h6>
                                    <p className={style.p}>{value.desc}</p>
                                    </div>
                            
                            
                                {playlistHoveredIndex === index && (
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
       
        </div> :""}   
    </section> 

    <HomeFooter />
</Container>
);
}