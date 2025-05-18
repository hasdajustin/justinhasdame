import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar({ darkMode, toggleMode }) {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          <b>JH</b>
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Collapsible nav links */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link href="https://github.com/hasdajustin" target="_blank" rel="noopener noreferrer">
              Github
            </Nav.Link>
          </Nav>

          {/* Right side: Hire Me button and Theme toggle */}
            <div className="d-flex align-items-center gap-2">
                <a
                    href="https://www.facebook.com/justin.hasdak/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                    variant={darkMode ? 'outline-light' : 'outline-dark'}
                    className="ms-lg-2"
                    >
                    Hire Me
                    </Button>
                </a>

                <Button
                    variant={darkMode ? 'outline-light' : 'outline-dark'}
                    onClick={toggleMode}
                    className="d-flex align-items-center ms-lg-2"
                    title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                    {darkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}
                </Button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
