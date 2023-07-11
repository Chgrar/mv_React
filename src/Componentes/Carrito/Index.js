import React, { useContext } from 'react'
import { DataContext } from '../../Context/Dataprovider'

import "boxicons"

export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu,setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito
    const total= value.total


    const tooglefalse = ()=>{
        setMenu(false)
    } 

    const show1 = menu ? "carritos show" : "carritos"
    const show2 = menu ? "carrito show" : "carrito"

    const resta = id =>{
        carrito.forEach(item=>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
            }
            setCarrito([...carrito])
        })
    }

    const suma = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad +=1;
            }
           setCarrito([...carrito]) 
        })
    }

    const removeProducto = id =>{
        if(window.confirm("¿Quieres suspender el producto?")){
            carrito.forEach((item, index)=>{
                if(item.id===id){
                item.cantidad=1;
                carrito.splice(index,1)
            }
            })
            setCarrito([...carrito])
        }
            
    }

  return (
    <div className={show1}>
        <div className={show2}>
        <div onClick={tooglefalse} className="carrito_close">
                <box-icon name="x"></box-icon>
            </div>
            <h2>Su Carrito</h2>
            <div className='carrito_center'>
            {

               carrito.length ===0 ? <h2 style={{textAling:"center", fontSize:"3rem"}}>Carrito Vacio</h2> 
                :<>{

                carrito.map((producto)=>(
                    <div className='carrito_item' key={producto.id}>
                    <img src={producto.imagen} alt={producto.nombre}/>
                    <div>
                       <h3>{producto.nombre}</h3> 
                       <p className='precio'>${producto.precio}</p>
                    </div>
                    
                    <div>
                       <box-icon name="up-arrow" type="solid" onClick={() => suma(producto.id)}/>
                        <p className='cantidad'>{producto.cantidad}</p>
                        <box-icon name="down-arrow" type="solid" onClick={() => resta(producto.id)}/>
                    </div>
                    <div className='remove_item' onClick={()=>removeProducto(producto.id)}>
                    <box-icon name="trash"/> 
                    </div>
                </div>

                ))
            }

</>}

            </div>
            <div className='carrito_footer'>
                <h3 >Total: ${total}
                </h3>
                <button className='btn'>Pago</button>
            </div>
        </div>
    </div>
  )
}