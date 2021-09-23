import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Componentes
import PantallaPrincipal from "./components/Pantalla Principal";
import NavigationBar from "./components/Navbar";
import Presentacion from "./components/Presentacion";
import FormularioContacto from "./components/Formulario Contacto";

AOS.init();

function App() {
  const [isEntered, setIsEntered] = useState(false);

  const handleClickLogo = () => {
    setIsEntered(true);
  };

  return (
    <>
      {!isEntered && <PantallaPrincipal onClick={handleClickLogo} />}

      {isEntered && (
        <>
          <NavigationBar />
          <Presentacion />
          <FormularioContacto />
        </>
      )}
    </>
  );
}

export default App;
