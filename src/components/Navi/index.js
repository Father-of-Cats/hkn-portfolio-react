import React from 'react'
import { Button,Navbar,Container,Nav } from 'react-bootstrap';
import { GoPerson,GoMail,GoFile,GoBriefcase } from 'react-icons/go';


const Navi = ({ currentPage,pageChanger }) => {
  return (
        <Nav className="justify-content-end flex-grow-1 pe-3">
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
  )
}

export default Navi