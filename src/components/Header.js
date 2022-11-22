import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Github, Linkedin, House} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

function Header(props) {
    return (
      <>
        <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <House className='home' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
            <Nav.Link className='resume-button' href="https://pdfhost.io/v/NGTu3pHqN_JoeyCaltabellottaResume2022" target="_blank" rel="noreferrer" type="application/pdf" media="print">
            <Button className= 'resume-button' variant= "outline-success">My resume</Button>
              </Nav.Link>
          <Nav>
            <Nav.Link href="https://github.com/joeycalt" target="_blank" rel="noreferrer">
            <Github className='mygit' />
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://www.linkedin.com/in/joey-caltabellotta/" target="_blank" rel="noreferrer">
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