import React from 'react';
import { Container } from 'react-bootstrap';

function Footer({ darkMode }) {
  return (
    <footer className={`py-3 mt-auto ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="text-center">
        <small>© {new Date().getFullYear()} justinhasda. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;
