import NavStore from './components/NavStore'
import ContenedorCards from './components/ContenedorCards'
import Footer from './components/Footer'
import { BsChevronCompactDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";

function App() {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Aqui esta el componente del navegador */}
      <header>
        <NavStore />
      </header>

      <main>
        {/** Aqui esta el boton flotante para que haga scroll hacia top */}
        <div className='float-button' onClick={scrollToTop}>
          <span><BsArrowUp /></span>
        </div>
        {/**Aqui esta el componente donde se visualizan todos los card con los productos */}
        <ContenedorCards />
        <div className='more-style'>
          <button >Ver más<span><BsChevronCompactDown /></span></button>
        </div>
      </main>
      {/**El componente footer */}
    <Footer />
  </>
  )
}

export default App
