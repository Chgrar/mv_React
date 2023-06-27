import React from 'react'
import Portada from "../../Imagenes/fotos/ImagenBanner.jpg"
import { Link } from "react-router-dom"

export const Inicio = () => {
  return (
    <div className='inicio'>
        <Link to="/">
          <h1>Inicio</h1>
        </Link>
        <Link to="/Productos">
          <h1>Productos</h1>
        </Link>
        <img className='img' src={Portada} alt="inicio"/>


    </div>
  )
}
