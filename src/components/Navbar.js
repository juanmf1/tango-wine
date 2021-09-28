import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


const NavigationBar = () => {
  return (
    <Navbar className="navbar-custom" fixed="top" expand="lg">
      <Container fluid className="px-4">
        {/* <Navbar.Brand href="#home" className="h1" style={{color: "#B58243"}}>Tango wine</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-center">
          <Nav className="me-5">
          <Nav.Link className="nav-enlace" href="#tango">TANGO WINE</Nav.Link>
            <Nav.Link className="nav-enlace" href="#somos">Quiénes somos</Nav.Link>
            <Nav.Link href="#staff">Staff</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#ubicacion">Ubicación</Nav.Link>

            <Nav.Link href="#link"> <i className="bi bi-instagram"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
