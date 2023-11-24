import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineCurrencyExchange } from "react-icons/md";


function Navbarnav() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home" className='fs-4 fw-bold'><small>SAIF</small> <MdOutlineCurrencyExchange style={{width:'35px', height:'35px'}} />

</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-4 gap-3 fw-bold">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarnav;