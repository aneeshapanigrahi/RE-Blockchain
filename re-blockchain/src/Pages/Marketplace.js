import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Navbar,Container, Col, Card } from 'react-bootstrap';
import img1 from '../Images/1.png';
import img2 from '../Images/2.png';
import img3 from '../Images/3.png';
import img4 from '../Images/4.png';

class Marketplace extends React.Component {
    render() {
        const listings = [
            {id: 1, add: 'Ford', img: {img1}},
            {id: 2, add: 'BMW', img: {img2}},
            {id: 3, add: 'Audi', img: {img3}},
            {id: 4, add: 'Mercedes', img: {img4}}
        ];
        return (
            <div>
                <Row xs={1} md={2} className="g-4">
                    {listings.map((listing) => 
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={require('../Images/1.png')}/>
                            <Card.Body>
                            <Card.Title>Address</Card.Title>
                            <Card.Text>
                                {listing.add}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    )}
                </Row>
          </div>
        );
    }
}
  
export default Marketplace;