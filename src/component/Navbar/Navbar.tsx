import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.style.scss";
import Logo from '../../assets/image/logo_big.png';
const NavbarComponent = (props:any) => {
  return (
    <Navbar className="Navbar"  expand="lg">
      <Navbar.Brand className="Navbar__brand">
        <img
          src={Logo}
          width="120"
          className="d-inline-block align-top Navbar__logo"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto Navbar__link">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="Navbar__dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ms-auto Navbar__profile">
          <Nav.Link  href="#profile">
            icon
            <i className="fas fa-user-circle fa-lg"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

