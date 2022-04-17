import React, { useState,useRef } from 'react'; 
import { Button,Container,Navbar,Nav } from 'react-bootstrap';
import { GoPerson,GoMail,GoFile,GoBriefcase } from 'react-icons/go';
import Navi from '../Navi';


const Header = ({ currentPage,pageChanger }) => {


    return(
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Hunter Nelson</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Item className='btn btn-outline-light m-2' onClick={() => {pageChanger('About');
            }}>
              <a> 
                <GoPerson/> About
              </a>
            </Nav.Item>

            <Nav.Item className='btn btn-outline-light m-2'>
              <a onClick={() => {pageChanger('Projects');
              }}> 
                <GoFile/> Projects
              </a>
            </Nav.Item> 

            <Nav.Item className='btn btn-outline-light m-2'>
              <a onClick={() => {pageChanger('Contact');
              }}> 
                <GoMail/> Contact
              </a>
            </Nav.Item>

            <Nav.Item className='btn btn-outline-light m-2'>
              <a onClick={() => {pageChanger('Resume');
              }}> 
                <GoBriefcase/> Resume
              </a>
            </Nav.Item> 
            
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header;