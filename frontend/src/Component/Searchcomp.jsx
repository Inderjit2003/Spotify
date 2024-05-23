import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
// import { BiSearch } from 'react-icons/bi'; // Import the search icon from react-icons library

import Style from '../CSS/LoginHome.module.css'


export default function SearchNav({val , se}) {
  return (

 <div style={{ position: 'relative', backgroundColor: '#333',width:'50vh', height:'7vh', border:'white', borderRadius: '50px', padding: '10px' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginTop:'3px' }}>
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
  )
}