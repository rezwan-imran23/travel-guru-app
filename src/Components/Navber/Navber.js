import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from "../../Image/Logo.png"

import { NavLink } from 'react-router-dom';
import "./Navber.css";

const Navber = () => {
    return (
        
        <div>
        <Container>
        <Navbar bg="" expand="lg">
        <Navbar.Brand to="/home"><img src={logo} width="120px" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <FormControl type="text" placeholder="Search your Destination" className="mr-sm-2" />
        
        <Nav className="navList">
            <ul> 
            <li><NavLink  to="/home" className="nav_link">Home</NavLink></li>
            <li><NavLink  to="/stays"className="nav_link">Stays</NavLink></li>
            <li><NavLink  to="/contact"className="nav_link">Contact</NavLink></li>
            <li><NavLink  to="/login" className="login-btn">Login</NavLink></li>
            </ul>
            
        </Nav>    
        
        {/* <Form inline>
            
            <Button variant="warning">Login</Button>
            
        </Form> */}
        </Navbar.Collapse>
</Navbar>
</Container>
</div>

    );
};

export default Navber;