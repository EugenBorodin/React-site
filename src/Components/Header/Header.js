import React, { Component } from 'react';
import { Button, Container, FormControl, Navbar, Nav, Form } from "react-bootstrap";
import logo from './logo195.png';
import { NavLink } from 'react-router-dom';
import "../Header/Header.css"


export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar position="fixed" sticky="top" collapseOnSelect expand="lg" bg="black" variant="dark" style={{ borderRadius: '10px' }}>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Salamanka Logistics
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto custom-nav">
                                <NavLink className="custom-nav-link" to="/">Home</NavLink>
                                <NavLink className="custom-nav-link" to="/about">About us</NavLink>
                                <NavLink className="custom-nav-link" to="/contacts">Contacts</NavLink>
                                <NavLink className="custom-nav-link" to="/reviews">Reviews</NavLink>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="d-inline mx-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}