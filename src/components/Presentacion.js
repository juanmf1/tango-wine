import Container from "react-bootstrap/Container";
import slide2 from "../images/WhatsApp Image 2021-09-19 at 22.21.45.jpeg";
import slide3 from "../images/WhatsApp Image 2021-09-19 at 22.21.45 (1).jpeg";
import img from "../images/tango_wine.png";
import malenaimg from "../images/malena.jpeg";
import matiasimg from "../images/matiasdiaz.jpeg";
import carlaimg from "../images/carli.jpg";
import luciaimg from "../images/lucia.jpeg";
import rominaimg from "../images/romina.jpeg";

const Presentacion = () => {
  return (
    <>
      <Container fluid className="container-intro px-5 d-flex flex-column flex-lg-row" id="tango">
        <div className="w-50">
          <h1>Tango Wine</h1>
          <p> Bar de vinos y picadas</p>
        </div>
        <div className="w-50 d-flex flex-column justify-content-around align-items-center">
          <img data-aos="flip-right" className="img-intro d-none d-lg-block" src={slide2} alt="" />
          <img data-aos="flip-left" className="img-intro d-none d-lg-block" src={slide3} alt="" />
        </div>
      </Container>
      <Container fluid className="container-presentacion d-flex flex-column justify-content-around px-xl-5" id="somos">
        <h3 data-aos="fade-down" className="titulo align-self-center">
          QUIÉNES SOMOS
        </h3>
        <div data-aos="fade-right" className=" align-self-start mt-5 mb-5">
          Somos un grupo de 5 amigos amantes del vino, el proyecto surgió luego
          de haber realizado varios cursos de cata de vinos y donde nos
          conectamos con el mundo vinícola. La idea es la de crear un ambiente
          confortable para la cata de vinos traídos de toda argentina
          acompañadas de unas deliciosas picadas.
        </div>
        <div  data-aos="fade-right" className=" align-self-end mb-5">
          TANGO WINE, se ubica en el corazón del barrio porteño de Palermo
          Soho.
          <br />
          Nuestras puertas están abiertas a todos aquellos que desean
          distenderse y perderse de la rutina por un momento, acompañado de una
          copa de vino y una abundante picada con productos de primera calidad.
        </div>
        <div data-aos="fade-right" className=" align-self-start mb-5">
          Además de ser un bar privado de vinos y picadas también se proveen
          conservas, y especias orgánicas. <br />A su vez la idea de ofrecer la
          experiencia de catar vinos acompañados con picada, se ofrecerá la
          oportunidad de que el cliente pueda comprar los vinos exhibidos en el
          local.
        </div>
      </Container>

      <Container
        fluid
        className="container-miembros d-flex flex-column py-5 px-3"
        id="staff"
      >
          <h3 style={{color:"#b58243"}} data-aos="fade-down" className="titulo align-self-center mb-5">
          NUESTRO STAFF
        </h3>
        <div data-aos="fade-right" className="d-flex flex-column flex-lg-row">
          <p className="info-miembro">
            ●{" "}
            <span>
              <u>Malena Sbarra:</u>
            </span>
            <br />
            Actualmente me encuentro trabajando en Banco de Galicia buenos aires
            en el área de sucursales ejerciendo como oficial de empresas, manejo
            una cartera de más de 500 clientes y aun así se busca que la cartera
            siga creciendo con la búsqueda de nuevos negocios.
            <div className="quote">
              ¡Lo que más me gusta es pasar momentos con mi familia y mi amado
              perro!
            </div>
          </p>
          <img data-aos="flip-left" data-aos-easing="ease-in-sine" className="img-miembro" src={malenaimg} alt=""/>
        </div>
        <div data-aos="fade-right"  className="d-flex flex-column flex-lg-row">
          <p className="info-miembro">
            ●{" "}
            <span>
              <u>Matías Díaz:</u>
            </span>{" "}
            <br />
            Actualmente me encuentro trabajando en el JP. Morgan en el área de
            sistemas desde hace 5 años, mi principal objetivo es brindar un
            servicio de excelencia a los empleados del banco y garantizar que
            los servidores no tengan problemas.{" "}
            <div className="quote">
              Soy un apasionado del fútbol y de compartir buenos momentos con
              mis amigos tomando un buen vino
            </div>
          </p>
            <img data-aos="flip-right" data-aos-easing="ease-in-sine" className="img-miembro" src={matiasimg} alt=""/>
        </div>
        <div data-aos="fade-right"  className="d-flex flex-column flex-lg-row">
          <p className="info-miembro">
            ●{" "}
            <span>
              <u>Carla Rempel:</u>
            </span>{" "}
            <br />
            En este momento estoy desempeñándome en tareas administrativas en
            Prefectura, más específicamente con farmacias de la fuerza. Me
            encuentro en el sector de pagos y cobranzas. Me encuentro en
            constante relación con farmacéuticos, auxiliares de farmacia,
            proveedores y cobradores de droguerías tratando de resolver
            problemas que se presentan día a día y coordinando la facturación.{" "}
            <div className="quote">
              Disfruto mucho relajarme al final del día viendo alguna película o
              comer algo rico con amigos, pareja o distenderse con mi familia. Y
              cada tanto acompañar esos momentos con una buena copa de vino.
            </div>
          </p>
            <img data-aos="flip-left" data-aos-easing="ease-in-sine" className="img-miembro" src={carlaimg} alt=""/>
        </div>
        <div data-aos="fade-right"  className="d-flex flex-column flex-lg-row">
          <p className="info-miembro">
            ●{" "}
            <span>
              <u>Romina Vellido:</u>
            </span>{" "}
            <br />
            Actualmente me encuentro trabajando en una empresa de Medios
            Publicidad, la cual se llama Brand Plus SRL y se dedica a
            comercializar espacios publicitarios a agencias de publicidad o
            clientes directos. Me dedico a coordinación de ventas del sector
            comercial.
            <div className="quote">
              Disfruto de viajar, entrenar, estar al aire libre y salir a comer
              pasando un buen rato con familiares, pareja y amigos.
            </div>
          </p>
            <img data-aos="flip-right" data-aos-easing="ease-in-sine" className="img-miembro" src={rominaimg} alt=""/>
        </div>
        <div data-aos="fade-right"  className="d-flex flex-column flex-lg-row">
          <p className="info-miembro">
            ●{" "}
            <span>
              <u>Lucia Dellavedova:</u>
            </span>{" "}
            <br />
            Actualmente me encuentro trabajando en una empresa Pyme, son dos
            empresas en una, se divide en Odériz Hidráulica y Odériz
            Maquinarias, se especializa en la venta de repuestos hidráulicos y
            máquinas agrarias. Me encargo de realizar los papeles de garantía
            cuando se vende una máquina, además de vender repuestos para
            reparaciones, ya sea tractores, cosechadoras, camiones, etc. Mi
            principal objetivo es solucionar los problemas de los clientes, y de
            esa manera que nos sigan eligiendo.
            <div className="quote">
              Me encanta viajar, conocer diferentes culturas, comidas, conocer
              gente y pasar un buen momento con amigos y familiares.
            </div>
          </p>
            <img data-aos="flip-left" data-aos-easing="ease-in-sine" className="img-miembro" src={luciaimg} alt=""/>
        </div>
      </Container>
    </>
  );
};

export default Presentacion;
