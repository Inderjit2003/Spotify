import React, { useState } from 'react'
import SplitPane from 'react-split-pane'
import Sidebar from './Sidebar'
import Plylist from './Plylist'
import { Container } from 'react-bootstrap'
import Style from '../CSS/Home.module.css'
import Bottom from './Bottom'
import SearchHome from './SearchHome'

export default function Home() {
    
// artists items
const artist=[
  {
    img:'https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca',
    name:'Pritam',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3',
  name:'Arijit Singh',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c',
  name:'A.R. Rahman',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab676161000051746220fc5e958ab498b96f5835',
  name:'Vishal Mishra',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab67616100005174fc7c542c04b5f7dc8f1b1c16',
  name:'Anirudh Ravichander',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab6761610000517490b6c3d093f9b02aad628eaf',
  name:'Vishal-Shekhar',
  desc:'Artist'
},
,
{
  img:'https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c',
  name:'A.R. Rahman',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab676161000051746220fc5e958ab498b96f5835',
  name:'Vishal Mishra',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab67616100005174fc7c542c04b5f7dc8f1b1c16',
  name:'Anirudh Ravichander',
  desc:'Artist'
},
{
  img:'https://i.scdn.co/image/ab6761610000517490b6c3d093f9b02aad628eaf',
  name:'Vishal-Shekhar',
  desc:'Artist'
}
]

//album items
const album=[{
  img:'https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9',
  name:'ANIMAL',
  desc:'Manan Bhardwaj, Vishal Mishra, Jaani '
},
{
  img:'https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0',
  name:'Still Rollin',
  desc:'Shubh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae',
  name:'Moosetape',
  desc:'Sidhu Moose Wala'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02cb2f9520171129a3df7a241a',
  name:'Ghost',
  desc:'Diljit Dosanjh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36',
  name:'Making Memories',
  desc:'Karan Aujla,Ikky'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02ecdddbfde15bc99b5bedffd4',
  name:'Angrej',
  desc:'Amrinder Gill'
} ,
{
  img:'https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0',
  name:'Still Rollin',
  desc:'Shubh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae',
  name:'Moosetape',
  desc:'Sidhu Moose Wala'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02cb2f9520171129a3df7a241a',
  name:'Ghost',
  desc:'Diljit Dosanjh'
},
{
  img:'https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36',
  name:'Making Memories',
  desc:'Karan Aujla,Ikky'
}   ]


//radio items
const radio=[{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4YRxDV8wJFPHPTeXepOstw/en-GB',
  name:'Arijit Singh Radio',
  desc:'With Nwha Kakkar, Pritam, KK and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/2FKWNmZWDBZR4dE5KX4plR/en-GB',
  name:'Diljit dosanjh Radio',
  desc:'With Garry Sandhu, Ranjit Bawa, Amrinder Gill and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4K6blSRoklNdpw4mzLxwfn/en-GB',
  name:'Kumar Sanu Radio',
  desc:'With Udit Narayan, Alka Yagnik, Anuradha Paudwal and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4PULA4EFzYTrxYvOVlwpiQ/en-GB',
  name:'Sidhu Moose Wala Radio',
  desc:'With Ammy Virk, Amrit Maan, Karan Aujla and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4fEkbug6kZzzJ8eYX6Kbbp/en-GB',
  name:'KK Radio',
  desc:'With Mohit chauhan, Ankit Tiwari, Javed Ali and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5r3wPya2PpeTTsXsGhQU8O/en-GB',
  name:'Shubh Radio',
  desc:'With AP Dhillon, Gurinder Gill, Ikky and more'
} ,
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4K6blSRoklNdpw4mzLxwfn/en-GB',
  name:'Kumar Sanu Radio',
  desc:'With Udit Narayan, Alka Yagnik, Anuradha Paudwal and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4PULA4EFzYTrxYvOVlwpiQ/en-GB',
  name:'Sidhu Moose Wala Radio',
  desc:'With Ammy Virk, Amrit Maan, Karan Aujla and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4fEkbug6kZzzJ8eYX6Kbbp/en-GB',
  name:'KK Radio',
  desc:'With Mohit chauhan, Ankit Tiwari, Javed Ali and more'
},
{
  img:'https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/5r3wPya2PpeTTsXsGhQU8O/en-GB',
  name:'Shubh Radio',
  desc:'With AP Dhillon, Gurinder Gill, Ikky and more'
}    ]

//playlist items
const playlist=[{
  img:'https://i.scdn.co/image/ab67706f0000000254473de875fea0fd19d39037',
  name:'lofi beats',
  desc:'chill beats, lofi vibes, new tracks every week...'
},
{
  img:'https://i.scdn.co/image/ab67706f000000023386614f0885feec7bc6bfc5',
  name:'Today`s Top Hits ',
  desc:'Dua Lips is on top of the Hottest 50!'
},
{
  img:'https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d',
  name:'Chillout Lounge',
  desc:'Just lean back and enjoy relaxed beats.'
},
{
  img:'https://i.scdn.co/image/ab67706f00000002baed3d65fac432ea1f7f7cd0',
  name:'All Out 2020s',
  desc:'The biggest songs of the 2020s.'
},
{
  img:'https://i.scdn.co/image/ab67706f00000002bdeb1c317ac2dd10f2397e4c',
  name:'Jazz in the Background ',
  desc:'Soft instrumental Jazz for all your activities.'
},
{
  img:'https://i.scdn.co/image/ab67706f00000002f4d83a6cb7f51f6d9f6717de',
  name:'Chill Hits',
  desc:'Kick back to the best new and recent chill hits.'
}    ]


  const [srchhm,setsrchhm]=useState(true)

  const handelclick=()=>{
    setsrchhm(false)
  }

   // Combine all items into an object and pass it as the 'items' prop
   const items = { artist, album, radio, playlist };

  return (
   <>
       <div className='container'>  
        <Container className={`${Style.container}`}>
          <SplitPane   split='vertical'
             minSize={305}
             maxSize={-1100}
             defaultSize={406}
             style={{backgroundColor:'black'}}
             >
            <div  className={` me-1 ${Style.pane}`} >
                  <Sidebar handelclick={handelclick} />
            </div>
            <div className={`me-1 ${Style.pane}`}>
                {srchhm?<Plylist artist={artist} album={album} radio={radio} playlist={playlist}/>:<SearchHome items={items}/>}
            </div>
          </SplitPane>
          </Container>
       </div>
       
       <Bottom />
   </>
  )
}