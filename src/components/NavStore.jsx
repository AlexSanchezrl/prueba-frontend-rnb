import React, { useState } from 'react'
import { BsJustify } from "react-icons/bs";

function NavStore() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav id='nav'>
        
        <div className='first-nav'>

            <h1>RednBlue</h1>

            <div className={`list-nav ${isOpen && "open"}`}>
                    <a href='#'>Nosotros</a>
                    <a href='#'>Servicios</a>
                    <a href='#'>Contáctanos</a>
                    <a href='#'>Regístrate</a>
                    <a href='#'>Pasantías RNB</a>

            </div>

            <button>Portal</button>

            <div className={`nav-principal-toggle ${isOpen && "open"}`} onClick={() =>{setIsOpen(!isOpen)}}>
                <span className='bar'><BsJustify /></span>
            </div>

        </div>

    </nav>
  )
}

export default NavStore