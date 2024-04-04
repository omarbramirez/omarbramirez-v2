import Logo from '../assets/images/logo-mio.png'


function Header({setPage}) {

    const ScrollToTop = () => {
        window.scrollTo(0, 0);
        setPage("index");
      }

    return (
      <>
<div className="header">
<div className="container">
  {/* <div className="nav">
    <a href="portafolio">Portafolio</a>
    <a href="sobre_mi">Sobre mí</a>
  </div> */}
  <div className="header-logo">
    <a onClick={ScrollToTop}>
      <img src={Logo} alt="Omar B Ramírez" />
    </a>
    <h1>Desarrollador Web</h1>
  </div>
</div>
</div>
      </>
    )
  }
  
  export default Header