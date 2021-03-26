import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useState} from 'react';

const Header = (props) => {

  const handleClick = (event) => {
    props.onClick(event.target.attributes[0].nodeValue)
  }
  
  return (
      
  <Navbar className="header" expand="lg">

    <Navbar.Brand>HomeBuyer Helper</Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
        <Nav.Link value={'Landing'} onClick={handleClick}>Home</Nav.Link>
        <Nav.Link value={'SignIn'} onClick={handleClick}>Login</Nav.Link>
        <Nav.Link value={'SignUp'} onClick={handleClick}>Sign Up</Nav.Link>
        </Nav>

    </Navbar.Collapse>

  </Navbar>
    )
}

export default Header
