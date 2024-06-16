import Profile from '../assets/images/profile.jpg'

// eslint-disable-next-line react/prop-types
function Index ({setPage}){
    return(
        <>
        <div className="col-12" style={{ marginTop: "100px"  }}></div> 
  
        <div className="home-slide col-6 col-md-10 text-display" >
          <h1>¡Hola, soy Omar!</h1>
          <p>
            <br />Desarrollador web y diseñador digital con 4 años de experiencia trabajando de forma remota para múltiples clientes nacionales e internacionales. Experto en JavaScript, NodeJs y REACT; usuario regular de Git, Mongoose y TypeScript.
          </p>
          <a onClick={()=>{setPage("about-me")}}>
            <button className="button1">Saber más</button>
          </a>
        </div>
  
        <div className="imagen col-6 col-md-10" style={{}}>
          <img src={Profile} alt="Perfil" />
        </div>
  
        <div className="col-12" style={{ marginTop: "100px" }}></div>
  
        <div className="col-12" style={{ marginTop: "100px" }}></div>
  
        <div className="home-slide2 col-6 col-md-10 text-display">
          <h1>A veces programador...<br />A veces creativo... </h1>
          <p>
            <br />Tengo la experiencia y herramientas necesarias para ofrecer a mis clientes un excelente servicio en la creación y personalización de experiencias web, además de la capacidad para conceptualizar y producir contenido digital focalizado en distintas áreas comerciales.
            <br /><br />
            Contacto: <br />
            omar.ramirez94@hotmail.es <br />
            (+52 &#127474;&#127485;) 222-464-1005 <br />
            Zoom ID: 916 770 6556
          </p>
        </div>
  
        <div className="home-slide2B col-6 col-md-10" style={{}}>
          <h1>Servicios:</h1>
          <p>
            <br />Desarrollo de Aplicaciones Web y Móviles.<br />
            <br />Optimización de Performance y SEO.<br />
            <br />Mantenimiento y Soporte Aplicaciones.<br />
            <br />Consultoría y Auditoría de Código.<br />
            <br />Producción de Contenido Digital.<br />
            <br />Diseño Profesional de Logotipos.<br />

          </p>
        </div>
        <div className="col-12" style={{ marginTop: "100px"  }}></div> 
    </>
    )
}

export default Index;