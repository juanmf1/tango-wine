import Container from "react-bootstrap/Container";

import GoogleMaps from "simple-react-google-maps";
// AIzaSyBpsG_JhsDJk_shXW4awehbFCksNVZmuT0

const Ubicacion = () => {
  return (
    <Container fluid className="container-ubicacion d-flex flex-column align-items-center py-5 px-3" id="ubicacion">
        <h3 data-aos="fade-down" className="titulo align-self-center mb-3">
        UBICACIÓN
      </h3>
      <p data-aos="zoom-in" className="align-self-center mb-5 h3">
        Nos encontramos en GUATEMALA 5674, Palermo CABA
      </p>
      <GoogleMaps
        apiKey={"AIzaSyBpsG_JhsDJk_shXW4awehbFCksNVZmuT0"}
        style={{ height: "400px", width: "600px", maxWidth: "100%" }}
        zoom={19}
        center={{ lat: -34.57967704467448, lng: -58.432157631218814 }}
        markers={{lat: -34.57967704467448, lng: -58.432157631218814}}
      />
    </Container>
  );
};

export default Ubicacion;
