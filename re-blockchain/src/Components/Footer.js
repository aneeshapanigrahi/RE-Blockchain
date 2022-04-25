import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
const Footer = () =>{
    return(
        <Container className="container">
            <Row >
                <h4>Footer</h4>
            </Row>
            <hr/>
            <Row >
                <Col sm><p>
                
                &copy;{new Date().getFullYear()}
                </p></Col>
            </Row>
        </Container>
    )
}
export default Footer;