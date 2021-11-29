import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            style={{ backgroundColor: '#000' }}
            variant="dark"
            className="border-bottom"
            fixed="top"

        >
            <Container>
                <Navbar.Brand as={HashLink} to="#app">Md Imran Hossain</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="#app">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="#projects">Projects</Nav.Link>
                        <Nav.Link as={HashLink} to="#skills">Skills</Nav.Link>
                        <Nav.Link as={HashLink} to="#education">Education</Nav.Link>
                        <Nav.Link as={HashLink} to="#contactForm">Contact Me</Nav.Link>
                        <Nav.Link target="_blank" href="https://drive.google.com/file/d/1x0r8YeI1cGs_7Gb_aG6KCGntuifxDB1A/view?usp=sharing">Download Resume</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;