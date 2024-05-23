import React, { useState , useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import style from '../CSS/LoginHome.module.css';
import Artist from '../assets/svg/martist.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Howl, Howler } from 'howler';

export default function AlbumPlay({album , index}) {
  const selectedItem = album[index];

  
  return (
    <div>
      <Container >
      <Row>

</Row>

            </Container>
    </div>
  )
}
