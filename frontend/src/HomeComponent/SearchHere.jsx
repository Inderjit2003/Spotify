import React, { useState } from 'react';
import style from '../CSS/Home.module.css';
import SearchNav from '../SharedComponent/SearchNav'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Style from '../CSS/LoginHome.module.css';

import HomeFooter from '../Component/HomeFooter';
const SearchHere = ({ items,handleInstallClick , handleprofileClick, handleBellIconClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    // <div style={{ backgroundColor: '#121212' }}>
    //   {/* Search Bar */}
    //   <div>
    //   <SearchNav val={searchQuery} se={handleSearch} />
    //   </div>
    //   <Container className={`mt-5 ms-5 `}>
    //     <h4>Browse All</h4>
    //   </Container>
    //   <Container>
    //     <Row xs={1} md={2} lg={6} xl={6} className="mt-4 p-2">
    //       {/* Render filtered playlist items */}
    //       {filteredItems.length > 0 ? (
    //         filteredItems.map((item, index) => (
    //           <Col key={index} className='ms-4'>

    //            <div className={`mb-4 ${Style.searcdiv}`} style={{background:item.color,height:'8rem'}}>
    //            <span className={`${Style.searchspan}`}>{item.title}</span>
    //               <img src={item.img_src} className={`${Style.searchimg}`} alt="" />
                
    //            </div>
    //           </Col>
    //         ))
    //       ) : (
    //         <h2>Not found</h2>
    //       )}
    //     </Row>
    //   </Container>
    // </div>
    <>
     <div style={{ backgroundColor: '#121212', borderRadius:'1vh' }} className={` mx-1 mt-2 py-2' ${style.scrolllog}`}>
      {/* Search Bar */}
      <div>
      <SearchNav val={searchQuery} se={handleSearch} handleInstallClick={handleInstallClick} handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick}/>
      </div>
      <Container className={`mt-5 ms-5 `}>
        <h4>Browse All</h4>
      </Container>
      <Container>
        <Row xs={1} md={2} lg={6} xl={6} className="mt-4 p-2">
          {/* Render filtered playlist items */}
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Col key={index} className='ms-4'>

               <div className={`mb-4 ${Style.searcdiv}`} style={{background:item.color,height:'8rem'}}>
               <span className={`${Style.searchspan}`}>{item.title}</span>
                  <img src={item.img_src} className={`${Style.searchimg}`} alt="" />
                
               </div>
              </Col>
            ))
          ) : (
            <Col xs={12} sm={8}>
            <div style={{ marginLeft: '25vh', marginTop: '25vh' }}>
              <h5 style={{ fontWeight: '700', fontSize: '22px', color: 'white', width: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                No Results found
              </h5>
              <h5 style={{ fontWeight: '500', fontSize: '15px', color: 'white', width: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }} >
                Please make sure your words are spelled correctly, or use fewer or different keywords.
              </h5>
            </div>
          </Col>
          )}
        </Row>
        <HomeFooter />
      </Container>
    </div>
    </>
  );
};

export default SearchHere;
