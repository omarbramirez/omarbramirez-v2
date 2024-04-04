import LinkedIn from '../assets/images/icon03.png'
import GitHub from '../assets/images/icon07.png'

function Footer (){
    return(
        <>
<div className="footer">
      <div className="container grid">
        <div className="col-12">
          <a href="https://www.linkedin.com/in/omar-b-ramirez/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://github.com/omarbramirez" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="GitHub" />
          </a>
          {/*<a href="#">
            <img src="assets/images/icon02.png" alt="Icono 2" />
          </a>
          <a href="#">
            <img src="assets/images/icon01.png" alt="Icono 1" />
          </a>*/}
        </div>
        <div className="col-12">
          Desarrollado por Omar Ramirez &copy; 2021
          {/*<a href="#">Términos de uso</a>
          <a href="/contacto/">Políticas de privacidad</a>*/}
        </div>
      </div>
    </div>
        </>
    )
}

export default Footer;