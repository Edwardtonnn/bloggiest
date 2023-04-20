import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './style.scss';


function NavigationalBar() {
  return (
   <>
    <Navbar className='py-5' expand="lg">
      <Container  className='d-flex justify-content-between'>
        <Navbar.Brand>
          <Link to={'/'}>
          The Bloggiest
          
          </Link>
          </Navbar.Brand>
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
