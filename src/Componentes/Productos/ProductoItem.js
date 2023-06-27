import React from 'react'


export const ProductoItem = ({
    
        id,
        nombre,
        descripcion,
        imagen,
        imagen2,
        precio
}) => {
  

  return (
    <div className='producto'>
      <a href='#'>
        <div className='producto_img'>
          <img src={imagen.default} alt={nombre}/>
          </div>
      </a>
      <div className='producto_footer'>
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <p className='precio'>${precio}</p>
      </div>
      <div className='button'>
        <button  className='btn'>
          Añadir a Carrito
        </button>
        <div>
          <a href='#' className='btn'>Vista</a>
        </div>
        </div>
      </div>
  )
}
