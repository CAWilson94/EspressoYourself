import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';

function NavBarCoffee() {
    return (
        <Navbar expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">Espresso Yourself</Navbar.Brand>
          </Container>
        </Navbar>
      );
}

export default NavBarCoffee;