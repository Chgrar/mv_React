import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/Dataprovider'

export const ProductoItem = ({
    
        id,
        nombre,
        descripcion,
        imagen,
        imagen2,
        precio
}) => {

  const value = useContext(DataContext)
  const addCarrito = value.addCarrito
  

  return (
    <div  className='producto'>
      <Link to={`/producto/${id}`}>
        <div className='producto_img'>
          <img src={imagen} alt={nombre}/>
          </div>
          </Link>
      <div className='producto_footer'>
        <h1>{nombre}</h1>
        {/* <p>{descripcion}</p> */}
        <p className='precio'>${precio}</p>
      </div>
      <div className='button'>
        <button  className='btn' onClick={()=>addCarrito(id)}>
          Agregar a Carrito
        </button>
        <div>
        <Link to={`/productos/${id}`} className='btn'>
          Vista
        </Link>
        </div> 
        </div>
      </div>
  )
}
