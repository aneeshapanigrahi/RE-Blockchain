import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () =>{
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">RE</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/marketplace">Marketplace</Nav.Link>
          <Nav.Link href="#pricing">Sell Tokens</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Team</Nav.Link>
          <Nav.Link href="#deets">Cart</Nav.Link>
          <Nav.Link href="#deets">Profile</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}
export default Header