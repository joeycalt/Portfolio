import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(props) {
    return (
      <>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">JOEY_CALT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/joeycalt">
              <img src='https://i.im.ge/2022/11/11/SlLGym.imagesqtbnANd9GcSGuWrfLHbMlkXKF8uj7G7Bs98zmNZVW26YgRmGktRA3ws.png' height='40px' width='40px' alt='' />
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://www.linkedin.com/in/joey-caltabellotta/">
              <img src= 'https://i.im.ge/2022/11/11/SlUuYG.imagesqtbnANd9GcSN0osVQcblBhUadmcs7iFmZXdRR7iNA8QWJAusqpCAU.png' height='40px' width='40px' alt= '' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    )
  }
  
  export default Header;