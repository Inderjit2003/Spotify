import React from 'react'
import { Card, Stack } from 'react-bootstrap'
import UpSidebar from './UpSidebar'
import MidSidebar from './MidSidebar'
import FotSidebar from './FotSidebar'

export default function Sidebar({handelclick}) {
  return (
    <>
       <div>
        <Stack gap={2}>
          <div className='Up'>
            <Card style={{backgroundColor:'#121212' , border:'none'}} className='ms-2 mt-2'>
            <UpSidebar handelclick={handelclick} />
            </Card>
          </div>
          <div className='mid'>
            <Card style={{backgroundColor:'#121212' , border:'none', maxHeight:'500px'}} className=' ms-2'>
                  <MidSidebar />
                  <div className='fot 'style={{marginTop:'10px'}} >
                      <FotSidebar  />
                  </div>
            </Card>

          </div>
        </Stack>
       </div>
    </>
  )
}