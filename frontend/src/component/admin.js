import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap';
import{NavLink} from 'react-router-dom'
const Header=(props)=>{
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
  <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <nav className="mr-auto">
         {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
    </nav>
         <Nav>
             <li className="nav-item">
     <NavLink to="/signin" className="nav-link">
         SignIn
     </NavLink>
     </li>
     <li className="nav-item">
     <NavLink to ="/signup" className="nav-link">
         Signup
     </NavLink>
        </li>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
  }
  
  export default Header;