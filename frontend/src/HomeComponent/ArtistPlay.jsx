import React , {useState} from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import libtable from '../CSS/LibTable.module.css'
export default function ArtistPlay({index , artist}) {
    // Define state to store original content
const [originalContent, setOriginalContent] = useState('');

// Event handler for mouse enter
const handleMouseEnter = (event) => {
  setOriginalContent(event.target.innerText); // Store original content
  event.target.innerText = ''; // Clear the content when hovered
};

// Event handler for mouse leave
const handleMouseLeave = (event) => {
  event.target.innerText = originalContent; // Restore the original content when not hovered
};

  const selectedItem = artist[index];
  return (
    <div>
        <Container >
                <Row>  
                    <Col className='m-4' xs={3}  >
                        <img src={selectedItem.img}  className='img-thumbnail rounded' style={{ width: '35vh' }} />
                    </Col>
                    <Col className='text-white ms-2 ' style={{ marginTop: '6%' }} >
                    <div className='mt-3'> 
                    <svg data-encore-id="icon" role="img" fill='blue' width="24" height="20" aria-hidden="true" class="Svg-sc-ytk21e-0 gxNUVX b0NcxAbHvRbqgs2S8QDg" viewBox="0 0 24 24"><path d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path></svg>
                            <span className={` m-2 mb-5 fs-6 mt-3 fw-semibold`}>{selectedItem.desc}</span>
                        </div>
                        <h1 className='mt-3 fw-bold'>{selectedItem.name}</h1>
                    </Col>
                </Row>
            </Container>

            <div className='text-white ms-3 '>
              <h5>Popular</h5>
              <div className={libtable.tableContainer}>
           <Table style={{ backgroundImage: `linear-gradient(180deg, #282828, #121212) `}} hover variant='dark' className={` ${libtable.table}`}>
  <thead className="text-muted">
    <tr style={{ backgroundColor: 'red' }}>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Singer</th>
      <th scope="col">Album</th>
      <th scope="col">Date Added</th>
    </tr>
  </thead>
  <tbody>
    {artist.slice(0,5).map((value, index) => (
      <tr key={index}>
        <th scope="row" className={`${libtable.play}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{index + 1}</th>
        <td>
          <a href='/home' className={`${libtable.a}`}>{value.name}</a>
        </td>
        <td>
          <a href='/home' className={`${libtable.a}`}>{value.singer}</a>
        </td>
        <td>
          <a href='/home' className={`${libtable.a}`}>{value.desc}</a>
        </td>
        <td style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{value.date}</td>
      </tr>
    ))}
  </tbody>
</Table>
    </div>
            </div>
    </div>
  )
}
