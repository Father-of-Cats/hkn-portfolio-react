import React, { useState,useRef } from 'react'; 
import { Button,Container,Navbar,Nav } from 'react-bootstrap';
import { GoPerson,GoMail,GoFile,GoBriefcase } from 'react-icons/go';


const Header = ({ currentPage,pageChanger }) => {


    return(
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#About">Hunter Nelson</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Item onClick={() => {pageChanger('About');}} className='btn btn-outline-light m-2'>
              <GoPerson/> About
            </Nav.Item>

            <Nav.Item onClick={() => {pageChanger('Projects');}} className='btn btn-outline-light m-2'>
              <GoFile/> Projects
            </Nav.Item> 

            <Nav.Item onClick={() => {pageChanger('Contact');}} className='btn btn-outline-light m-2'>
              <GoMail/> Contact
            </Nav.Item>

            <Nav.Item onClick={() => {pageChanger('Resume');}} className='btn btn-outline-light m-2'>
              <GoBriefcase/> Resume
            </Nav.Item> 

          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header;