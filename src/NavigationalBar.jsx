import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


function NavigationalBar() {
  return (
   <>
    <Navbar bg="light" expand="lg">
      <Container fluid className='d-flex justify-content-between'>
        <Navbar.Brand href="#home">The Bloggiest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to={'/'}>                
              Home
              </Link>
              </Nav.Link>
            <Nav.Link>
              <Link to={'/about'}>
              About
              </Link>
              </Nav.Link>
            <Nav.Link>
              <Link to={'/articles'}>
              Articles
              </Link>
              </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default NavigationalBar
