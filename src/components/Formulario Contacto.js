import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import emailjs from "emailjs-com";

const FormularioContacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeTel = (e) => {
    setTel(e.target.value);
  };

  const handleChangeMensaje = (e) => {
    setMensaje(e.target.value);
  };

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "tango_wine",
        "tango_wine_contact",
        e.target,
        "user_exbG9An8nILMfGnN8X3cf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container
      fluid
      className="container-contacto d-flex flex-column px-3 py-5 align-items-center"
      id="contacto"
    >
      <h3 data-aos="fade-down" className="titulo align-self-center mb-3">
        CONTACTANOS
      </h3>
      <p data-aos="zoom-in" className="align-self-center m-4 h3">
        ¿Tenés alguna duda?, ¿una recomendación? ¡Hacenoslo saber!
      </p>
      <Form
        data-aos="zoom-in"
        className="form-contacto p-2"
        onSubmit={enviarEmail}
      >
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            value={nombre}
            onChange={handleChangeNombre}
            type="text"
            placeholder="Ingresá tu nombre"
            name="nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            value={email}
            onChange={handleChangeEmail}
            type="email"
            placeholder="Ingresá tu correo electrónico"
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tel">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            onChange={handleChangeTel}
            value={tel}
            type="text"
            placeholder="Ingresá tu teléfono"
            name="tel"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="mensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            value={mensaje}
            onChange={handleChangeMensaje}
            style={{ height: "200px" }}
            type="text"
            placeholder=""
            name="mensaje"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 "
          controlId="formBasicCheckbox"
        ></Form.Group>
        <Button className="w-100" variant="dark" type="submit">
          Enviar
        </Button>
      </Form>
      <div className="div-contacto-ig">
        <p style={{fontSize:"2rem"}} className="align-self-center m-5 h3">
          Contactanos también a través de nuestro instagram <a href="www.instagram.com" className="icono-ig " target="_blank"><i style={{color:"#fff"}} className="icono-ig bi bi-instagram"></i></a>
        </p>
      </div>
    </Container>
  );
};

export default FormularioContacto;
