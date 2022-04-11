import React from "react"; 
import { Navbar,Container,Offcanvas,Nav } from 'react-bootstrap';



const Header = () => {
    return(
        <Navbar bg="dark" expand={false}>
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
          <Nav.Link href="#action1">About</Nav.Link>
          <Nav.Link href="#action2">Projects</Nav.Link>
          <Nav.Link href="#action2">Contact Me</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    )
}

export default Header;