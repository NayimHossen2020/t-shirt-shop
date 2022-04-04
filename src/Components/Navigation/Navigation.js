import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" expand="sm" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='link-style' to="/home">Home</Link>
                            <Link className='link-style' to="/review">Review</Link>
                            <Link className='link-style' to="/grandpa">GrandPa</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;