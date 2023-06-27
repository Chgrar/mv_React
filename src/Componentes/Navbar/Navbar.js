import React from 'react'
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
            <img
                className="img-logo"
                src={require(`../../Imagenes/logo/logo.jpg`)}
                alt="logo"
            />
            <ul className="lista-container">
                    <li className="lista-item">
                        <Link  to='/' className="lista-item_link">Inicio</Link>
                    </li>
                    <li className="lista-item">
                        <Link  to='/Productos' className="lista-item_link">Hombre</Link>
                    </li>
                    <li className="lista-item">
                        <Link  to='/Productos' className="lista-item_link">Mujer</Link>
                    </li>
                    <li className="lista-item">
                        <Link  to='/Productos' className="lista-item_link">Ofertas</Link>
                    </li>
                    <li className="lista-item">
                        <Link  to='/Contacto' className="lista-item_link">Contacto</Link>
                    </li>
            </ul>
            <div>
            <h2 className='carrito'>🛒</h2>
            <span className='item-Total'>0</span>
            </div>
        </nav>
    </div>
  )
}
