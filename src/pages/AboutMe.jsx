import Profile from '../assets/images/profile.jpg'

function AboutMe (){
    return (
        <>
      <div className="col-12"></div>

      <div className="about-slide1 col-12 col-md-10 text-display" style={{ marginTop: "100px", marginBottom: "100px"}}>
        <div style={{ marginTop: "100px"}}>
          <h1 style={{color: "var(--primary-5)"}}>Desarrollador web [ Marzo, 2020 – 2024]</h1>
          <p style={{ marginTop: "50px" }}>
            <h2>Secretaría de Cultura de Quito [Febrero, 2024 - Actualmente]            </h2>
            <br />Desarrollé una web aplicando metodología SCRUM debido a las necesidades institucionales del proyecto. Diseñé toda la interfaz con el enfoque mobile-first. Usé React como librería base. Tailwind  y Next.Js en su PMV; y Vite para la versión final. 
          </p>

          <p style={{ marginTop: "50px" }}>
            <h2>Valeria Adalid (cliente particular) [Diciembre, 2023 – Marzo, 2024]          </h2>
            <br />Desarrollé una aplicación web aplicando TDD básico. Usé las APIs de Paypal y Google para generar funcionalidades automatizadas de seguridad de datos, e-comerce y gestión de horario. Basé mi implementación en NodeJs, usando VanillaJs para presentar un PMV; y Vite para la versión final. 
          </p>

          <p style={{ marginTop: "50px" }}>
            <h2>Valeria Guzmán (cliente particular) [Mayo, 2023 – Enero,  2024]    </h2>
            <br />Migré el frontend de una web (previamente desarrollada con VanillaJs, HTML y CSS) a React, usando Zustand para la gestión de estados. Dada la poca flexibilidad y altos costos que tenía el alojamiento de esta web, decidí hacer una migración a otras plataformas con implementación JAMstack como Netlify.
          </p>
        </div>

        <div style={{ marginTop: "100px" }}>
          <h1 style={{color: "var(--primary-5)"}}>Diseñador digital [Septiembre, 2018 – Diciembre, 2023]          </h1>
          <p style={{ marginTop: "50px" }}>
            <h2>NOBILIS Café [Octubre, 2023 – Noviembre, 2024]           </h2>
            <br />Creé la identidad visual de una marca cafetera.  Realicé un estudio de mercado para comprender las tendencias del sector y los competidores más próximos. Diseñé el logotipo  garantizando su escalabilidad a otras áreas comerciales y su aplicación análoga (uniformes, flyers, empaques) y digital (redes sociales, web, apps). Estandaricé la documentación y los formatos: manuales, archivos editables, etc.

          </p>
          <p style={{ marginTop: "50px" }}>
            <h2>Osa de Anteojos [Junio, 2022 – Diciembre, 2022]          </h2>
            <br />Adapté un libro físico para niños a su versión digital animada usando las características del formato Epub 0.3. Usé Adobe InDesign y Calibre como softwares de diseño y gestión de elementos gráficos respectivamente.
          </p>
        </div>

        <div style={{ marginTop: "100px" }}>
          <h1 style={{color: "var(--primary-5)"}}>Formación</h1>
          <p style={{ marginTop: "50px" }}>
            <h2>UNAM | Ingeniería en Computación [2022]
            </h2>
          </p>
          <p style={{ marginTop: "50px" }}>
            <h2>BUAP | Licenciatura en Lingüística [2019]
            </h2>
          </p>
          <p style={{ marginTop: "50px" }}>
            <h2>Facultad de Lenguas (BUAP) | Examen de certificación de Nivel C1 en inglés [2017]
            </h2>
          </p>
        </div>
      </div>



      {/* <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++FIN SECCION TRES --> */}
        </>
    )
}

export default AboutMe;