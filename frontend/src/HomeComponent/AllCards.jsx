import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AllCards = ({ items }) => {
    return (
        <div>
        <h1>hevrkh</h1>
        <Row className="justify-content-between align-items-center p-2">
          <Col xs={12} sm={8}>
            <h5 style={{ fontWeight: '700', fontSize: '22px', color: 'white' }}>Popular artists</h5>
          </Col>
          <Col xs={12} sm={4} className="text-end">
            {/* Use Link component to navigate back to Showall component */}
            <Link to="/" style={{ color: 'white' }} className="text-decoration-none"
            onClick={() => setShowAllCards(!showAllCards)}>
                  {showAllCards ? 'Show less' : 'Show all'}
              
            </Link>
          </Col>
        </Row>
  
        {showAllCards ? (
          <Row>
            {artist.map((value, index) => (
              <Col key={index}>
                <Card>
                  <Card.Img style={{ borderRadius: '50vh', height: '21vh', width: '21vh' }} variant="top" src={value.img} />
                  <Card.Body>
                    <Card.Title>{value.name}</Card.Title>
                    <Card.Text>{value.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : null}
      </div>
    );
};

export default AllCards;
