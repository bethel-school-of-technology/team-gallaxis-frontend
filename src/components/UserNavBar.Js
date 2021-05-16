import React from "react";
import {Nav, NavBar} from 'react-bootstrap';

const UserNavBar = (props) => (
    
<NavBar collapseOnSelect expand="lg" bg="primary" >

    <NavBar.Brand href="./BuySell.js">Buy and Sell</NavBar.Brand>
    <NavBar.Toggle aria-controls="responsive-navbar-nav"/>
    <NavBar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" variant="light">
        </Nav>
        <Nav className="">
           <Nav.Link href="./Home"> Home</Nav.Link>
           <Nav.Link href="./Register"> Register</Nav.Link>
           <Nav.Link href="./BuySell"> Buy and Sell</Nav.Link>
        </Nav>
    </NavBar.Collapse>
</NavBar>
);

export default UserNavBar;
