import React, { useState,useRef } from 'react'; 
import { Button,Navbar,Container,Offcanvas,Nav,Overlay,OverlayTrigger,Popover,Tooltip } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../util/helper';



const Header = (props) => {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  const handleClick = (item) => {
    console.log(item)
    return(item);
  };

    return(
    <Navbar bg='dark' expand={false}>
      <Container fluid>
      <Navbar.Brand className="text-light" href="#">Hunter Nelson</Navbar.Brand>
      <Navbar.Toggle className='btn-light' aria-controls="offcanvasNavbar" />
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
              {categories.map((category) => (
              <Nav.Item
              className={`btn btn-outline-light m-2 ${
                currentCategory.name === category.name && 'btn-light text-dark'
                }`}
                >
                <a
                key={category.name}
                onClick={() => {
                setCurrentCategory(category);
                }}
                > {category.icon}
                {capitalizeFirstLetter(category.name)}
                </a>
              </Nav.Item> 
            ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    )
}

export default Header;