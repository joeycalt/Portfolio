import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Github, Linkedin} from 'react-bootstrap-icons'

function Header(props) {
    return (
      <>
        <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">JOEY_CALT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/joeycalt">
            <Github className='mygit' />
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://www.linkedin.com/in/joey-caltabellotta/">
            <Linkedin className='mylink' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    )
  }
  
  export default Header;