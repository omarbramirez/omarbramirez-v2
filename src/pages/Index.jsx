import Profile from '../assets/images/profile.jpg'

// eslint-disable-next-line react/prop-types
function Index ({setPage}){
    return(
        <>
        <div className="col-12" style={{ marginTop: "100px" }}></div>
  
        <div className="home-slide col-6 col-md-10 text-display">
          <h1>¡Hola, soy Omar!</h1>
          <p>
            <br />Desarrollador web con 4 años de experiencia. Experto en JavaScript, NodeJs y REACT.
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
            <br />
            Creación de páginas profesionales.<br />
            <br />Desarrollo de aplicaciones web.<br />
            <br />Producción de contenido digital para redes sociales.<br />
            <br />Diseño de logotipos.<br />
            <br />Ilustración digital.<br />
          </p>
        </div>
  
       {/* <div className="col-12" style={{ marginTop: "100px" }}></div>
  
        <div className="background col-12">
          <div className="section4 col-12 text-jumbo">
          LO QUE MIS CLIENTES OPINAN
          </div>
  
           <div className="slideropinion col-12" style={{ minHeight: "700px" }}>
            <ul>
              <li>
                <img src="assets/images/review01.png" alt="Opinión 1" />
                <div className="texto-slider">
                <h1>Valeria Guzmán</h1>
                  <h2>Escritora profesional</h2>
                  <p>
                  El trabajo de Omar es impecable. Sus ideas son frescas e innovadoras, pero siempre trabaja con conocimiento de causa. Me ha ayudado con el manejo de mi cuenta profesional de Instagram, la creación de contenido para mi editorial y para el salón de la poesía de la Feria Internacional del Libro de Quito. Asimismo, me ayudó a crear y publicar mi página web con absoluta comprensión de los múltiples roles profesionales en los que me desenvuelvo. ¡Estoy muy agradecida de trabajar con él!
                  </p>
                </div>
              </li>
              <li>
              <img src="assets/images/review02.png" alt="Opinión 2" />
              <div className="texto-slider">
                  <h1>Valeria Adalid</h1>
                  <h2>Nutrióloga especialista</h2>
                  <p>
                  El trabajo de Omar para mi marca personal resultó todo un éxito. Gracias a su análisis para mi marca, él logró desarrollarme un logo con el cual me sentí identificada; ahora ese logo ya es parte de mi imagen en redes sociales. Actualmente se encuentra elaborando una aplicación de reservación automatizada de consultas para mi página web, por lo que me siento muy emocionada del resultado final ¡Gracias por el excelente trabajo!!
                  </p>
                  </div>
                  </li>
                  <li>
                <img src="assets/images/review03.png" alt="Opinión 3" />
                <div className="texto-slider">
                <h1>Azuany Fuentes</h1>
                <h2>Odontóloga</h2>
                <p>
                    Excelente resultado de traducción, respetando el orden e imágenes (formato) en general.
                    
                    El tiempo de entrega fue antes de lo esperado, estoy totalmente satisfecha con la calidad de su trabajo.
                    Así mismo siempre mostró mucho profesionalismo y disponibilidad sobre alguna duda que me pudiera surgir con respecto a los resultados de mi formato. ¡1000% recomendado!
                    </p>
                    </div>
                    </li>
                    </ul>
                    </div> 
                </div>*/}
  
        <div className="finalone col-12" style={{ height: "100px" }}></div>
    </>
    )
}

export default Index;