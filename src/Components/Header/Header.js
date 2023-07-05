import React, { Component } from 'react';
import { Button, Container, FormControl, Navbar, Nav, Form } from "react-bootstrap";
import logo from './logo195.png';
import { NavLink } from 'react-router-dom';
// import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
// import Home from '../../Pages/Home'
// import About from '../../Pages/About'
// import Blog from '../../Pages/Blog'
// import Contacts from '../../Pages/Contacts/Contacts'

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
                            <Nav className="me-auto">
                                <NavLink to="/" > Home </NavLink>
                                <NavLink to="/about" > About us </NavLink>
                                <NavLink to="/contacts" > Contacts </NavLink>
                                <NavLink to="/blog" > Blog </NavLink>
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
                {/* <HashRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </HashRouter> */}
            </div>
        );
    }
}