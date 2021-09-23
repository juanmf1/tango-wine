import Container from "react-bootstrap/Container";
import img from '../images/tango_wine.png';

const PantallaPrincipal = ({onClick}) => {
  return (
    <Container
      fluid
      className="container-main d-flex flex-column align-items-center justify-content-center"
    >
      <img onClick={onClick} className="logo mb-5" src={img} alt="Logo Tango Wine" />
      <h1 className="d-none">TANGO WINE</h1>
      <h3 className="h2">Bar de vinos y picadas</h3>
    </Container>
  );
};

export default PantallaPrincipal;
