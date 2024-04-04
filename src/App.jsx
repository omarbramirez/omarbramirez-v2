import Header from './bases/Header.jsx'
import Footer from './bases/Footer.jsx'
import Index from './pages/Index.jsx'
import NotFound from './bases/NotFound.jsx'
import AboutMe from './pages/AboutMe.jsx'
import { useState } from 'react'

function App() {

  const [page, setPage] = useState('index');

  return (
    <>
      <div>
        <Header setPage={setPage}/>
        <div className="container grid">
        {page === 'about-me' ? <AboutMe /> :
          page === 'index' ? <Index setPage={setPage} />
          : <NotFound/>
        }
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
