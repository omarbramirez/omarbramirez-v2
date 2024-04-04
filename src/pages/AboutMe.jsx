import Profile from '../assets/images/profile.jpg'

function AboutMe (){
    return (
        <>
      <div className="col-12" style={{ marginTop: "100px" }}></div>

      <div className="about-slide1 col-6 col-md-10 text-display">
        <div>
          <h1>Programador de profesión, diseñador como vocación y humanista por convicción.</h1>
          <p>
            <br />Sería fácil pensar que mi pequeño proyecto como profesional independiente fue un accidente de los drásticos cambios sufridos durante el 2020. Pero estaría mintiendo. Lo cierto es que, aunque precipitada, esta reorientación era algo insoslayable.
            <br /><br />Empecemos con lo más básico. Estudié en la facultad de Filosofía y Letras de mi ciudad (Puebla, México) y obtuve mi título hace algún tiempo (2018). Sin embargo, terminé de formarme fuera del aula. En humanidades todos alrededor te dicen exactamente lo mismo; "para ti hay solo tres caminos: el posgrado, la investigación, o la docencia". Por mucho, tres actividades con las que nunca me identifiqué. Mi alternativa era clara, la única forma de abrirme una cuarta opción vendría de la educación en línea.
          </p>
        </div>
      </div>

      <div className="about-slide1B col-6 col-md-10 text-display">
        <div>
          <img src={Profile} alt="Perfil" />
          <p>
            <br /><br />En estos días soy un desarrollador web con 3 años de experiencia creando páginas y aplicaciones web para distintos perfiles profesionales. Experto en JavaScript, NodeJs y REACT. Usuario regular de: Java, Git, Sass, PHP, MySQL, MongoDB y TypeScript.
            <br /><br />Como community manager he colaborado internacionalmente en la Feria Internacional del Libro de Quito (2020 - 2022 respectivamente), y para el proyecto multimedia: Mujeres al Oído (con más de 80,000 reproducciones en Youtube).
            <br /><br />Siendo diseñador digital me he apoyado de la Suite de Adobe para crear la imagen corporativa de múltiples negocios particulares. Así como para producir animaciones en algunos proyectos editoriales independientes.
            <br /><br />Cuando no estoy estudiando o programando me gusta dibujar, aprender de filosofía, leer comics y jugar en Steam. Estoy aprendiendo árabe.
            <br />
            <br />
          </p>
        </div>
      </div>

      <div className="col-12" style={{ marginTop: "50px" }}></div>

      {/* <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ FIN SECCION UNO -->

      <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++SECCION DOS --> */}

      <div className="col-12" style={{ marginTop: "100px" }}></div>

      {/* <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++FIN SECCION DOS -->

      <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++SECCION TRES --> */}

      {/* <!-- <div className="about-slide3 col-12 col-md-10 text-display">
        <div>
          <h1>FORMACIÓN</h1>

          <h2><br>The Complete 2022 Web Development Bootcamp: Dr. Angela Yu</h2>
          <p>Certificación digital obtenida.</p>

          <h2><br>Responsive Web Desing Certification: Free Code Camp</h2>
          <p>Certificación digital obtenida.</p>

          <h2><br> Introducción al desarrollo web con PHP: Ignacio Cruz Moreno</h2>
          <p>Certificación digital obtenida.</p>

          <h2><br>The Complete JavaScript Course 2022, From Zero to Expert!: Jonas Schmedtmann</h2>
          <p>Certificación digital obtenida.</p>

          <h2><br>Become a UX Designer: Brendan Bolton-Klinger</h2>
          <p>Certificación digital obtenida.</p>

          <h2><br>Node.js, Express, MongoDB & More, The Complete Bootcamp 2022: Jonas Schmedtmann</h2>
          <p>Certificación digital obtenida.</p>

          <br />
          <h2>Otros</h2>

          <h2><br>Licenciatura en Lingüística y Literatura Hispánica: Benemérita Universidad Autónoma de Puebla </h2>
          <p> Título obtenido.</p>

          <h2><br>TOEFL ITP B2 CEFR Level (2018)</h2>
          <p>Certificación obtenida.</p>

          <h2><br>The English with Lucy Business English Course: Lucy Bella Earl</h2>
          <p>Certificación obtenida.</p>

          <br />
        </div>
      </div> --> */}

      {/* <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++FIN SECCION TRES --> */}
        </>
    )
}

export default AboutMe;