import React,{useState} from 'react'
import { Card } from 'react-bootstrap'
import PlylistNavbar from './PlylistNavbar'
import MidPlylist from './MidPlylist';
// import Showall from './Showall';


// const album=[{
//   img:'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb9b62680615324d5ee61a98e9/1/en-GB/default',
//   name:'Daily Mix 1',
//   desc:'Amrinder gill, Nivair Pannu, Love Sivia and more'
// },
// {
//   img:'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb9973157bdaedef3f77ef8e13/2/en-GB/default',
//   name:'Daily Mix 2',
//   desc:'Sidhu Moose Wala, Karan Aujla, AP Dhillon and more'
// },
// {
//   img:'https://dailymix-images.scdn.co/v2/img/ab67616d0000b273869ab7ebd03e0fc211518164/3/en-GB/default',
//   name:'Daily Mix 3',
//   desc:'Sant Niranjan Singh Ji, Bir Singh , Bhai Rai Singh and more'
// },
// {
//   img:'https://i.scdn.co/image/ab67706f0000000263ef641f3fa47592fe798e91',
//   name:'Daily Mix 4',
//   desc:'Jassi Gill, Akhil, B Praak and more'
// },
// {
//   img:'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6ca53f9cef775f08f0c1f5d2/5/en-GB/default',
//   name:'Daily Mix 5',
//   desc:'Jordan Sandhu, Balraj, Diljit Dosanjh and more'
// },
// {
//   img:'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6ca53f9cef775f08f0c1f5d2/6/en-GB/default',
//   name:'Daily Mix 6',
//   desc:'Jordan Sandhu, Kulbir Jhinjer, Amrinder Gill and more'
// }    ]



export default function Plylist({artist, radio, album, playlist}) {



// this is for forwrd and backwrd button on the top of the navbar
  const [cmpname, setcmpname] = useState('cmp1');

  const handleNavClick = (newCmpName) => {
    setcmpname(newCmpName);
  };

  return (
    <div className='mx-1 py-2'>
    <Card  style={{backgroundColor:'#121212',border:'none'}}>
      <PlylistNavbar  handleNavClick={handleNavClick}/>
    
    <div>
    {cmpname === "cmp1" && 
    <MidPlylist artist={artist} album={album} radio={radio} playlist={playlist} />
    }
      {/* <Showall artist={artists} album={album} radio={radio} playlist={playlist} /> */}
    </div>
    </Card>
    </div>
  )
}