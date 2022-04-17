import React, { useState,useRef } from 'react'; 
import { Button,Container,Navbar,Nav } from 'react-bootstrap';
import { GoPerson,GoMail,GoFile,GoBriefcase } from 'react-icons/go';


const Header = ({ currentPage,pageChanger }) => {


    return(
      <Navbar bg="dark" variant="dark" expand='lg'>
        <Container fluid>
          <Navbar.Brand className='text-left mx-4'><h1>Hunter Nelson</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="navbar">

              <Nav.Item onClick={() => {pageChanger('About');}} className={currentPage ==='About'?'btn btn-light m-2':'btn btn-outline-light m-2'}>
                <GoPerson/> About
              </Nav.Item>

              <Nav.Item onClick={() => {pageChanger('Projects');}} className={currentPage ==='Projects'?'btn btn-light m-2':'btn btn-outline-light m-2'}>
                <GoFile/> Projects
              </Nav.Item> 

              <Nav.Item onClick={() => {pageChanger('Contact');}} className={currentPage ==='Contact'?'btn btn-light m-2':'btn btn-outline-light m-2'}>
                <GoMail/> Contact
              </Nav.Item>

              <Nav.Item onClick={() => {pageChanger('Resume');}} className={currentPage ==='Resume'?'btn btn-light m-2':'btn btn-outline-light m-2'}>
                <GoBriefcase/> Resume
              </Nav.Item> 

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;