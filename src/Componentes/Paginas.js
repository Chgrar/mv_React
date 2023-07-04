import React from 'react'
import { Routes, Route} from "react-router-dom"
import  {Inicio}  from "./Inicio/Inicio"
import { Productos } from "./Productos/Productos"
import { ProductoVista } from './Productos/ProductoVista'

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='/' exact Component={Inicio}/>
        <Route path='/productos' exact Component={Productos}/>
        <Route path='/productos/:id' exact Component={ProductoVista}/>
      </Routes>
    </section>
  )
}
