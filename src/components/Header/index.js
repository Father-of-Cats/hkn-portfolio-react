import React from 'react'; 
import { useState,useRef } from 'react'
import { Button,Navbar,Container,Offcanvas,Nav,Overlay,OverlayTrigger,Popover,Tooltip } from 'react-bootstrap';
import { GoPerson,GoMail,GoFile } from 'react-icons/go'



const Header = () => {

    return(
        <Navbar bg='dark' expand={false}>
  <Container fluid>
    <Navbar.Brand className="text-light" href="#">Hunter Nelson</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      className="bg-dark"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header className="text-light" closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body bg="dark">
        <Nav className="justify-content-end flex-grow-1 pe-3">
          
          
          <Nav.Item>
              <a className='btn btn-outline-light m-2' href='#' >
                <GoPerson/> About
              </a>
          </Nav.Item>
          
          
          <Nav.Item>
          <a className='btn btn-outline-light m-2' href='#'>
          <GoFile/> Projects
          </a>
          </Nav.Item>
          <Nav.Item>
          <a className='btn btn-outline-light m-2' href='#'>
          <GoMail/> Contact
          </a>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    )
}

export default Header;