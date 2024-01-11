import logoRnB from "../img/rednblue.png"
import { BsFillTelephoneFill, BsFillGeoFill, BsFillEnvelopeFill  } from "react-icons/bs";

function Footer() {

    let year = new Date().getFullYear();

  return (
    <footer className='footer-style'>
        <section className='footer-section-1'>
            <div>
                <form className="form-footer">
                    <img src={logoRnB} />
                    <p>Somos una familia en constante crecimiento y mejora, agradecemos su retroalimentación.</p>
                    <input type="text" placeholder="¡Dinos lo que piensas de la página web!" />
                </form>
            </div>


            <div className="list-div">
                <div>
                    <ul className='list-footer'>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contáctanos</a></li>
                        <li><a href="#">Regístrate</a></li>
                        <li><a href="#">Portal</a></li>
                    </ul>
                </div>

                <div>
                    <ul className='list-footer'>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Ventaja de comprar <br></br> por internet</a></li>
                        <li><a href="#">RednBlue Logistics</a></li>
                        <li><a href="#">Soporte técnico</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="contact-section">
            <div className="contact-nav">
                <h3><span><BsFillGeoFill /></span>Av. 6a oeste y calle G sur, David, Chiriquí, Panamá.</h3>
                <h3><span><BsFillTelephoneFill /></span>+507 787-0022</h3>
                <h3><span><BsFillEnvelopeFill /></span>info@rednbluepty.com</h3>
            </div>
        </section>

        <div className="footer-final">
            <h1>RednBlue</h1>
            <h3>© Copyright. Todos los derechos reservados RednBlue {year}</h3>
        </div>

    </footer>

  )
}

export default Footer