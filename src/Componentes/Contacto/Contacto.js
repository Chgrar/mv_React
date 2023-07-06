import React from 'react'

export const Contacto = () => {
  return (
   
    <div className='div-form'>
      
      <hr/>
        <h2 className='titulo-form'>Contacto</h2>
        <form className='form-mail'>

            <label>Nombre </label>
            <input type="text" name="user_name"/>
            <hr/>

            <label>Correo Electrónico </label>
            <input type="email" name="user_email"/>
            <hr/>

            <label>Mensaje </label>
            <textarea name="user_mensaje" id="" cols="50" rows="20"></textarea>
            <hr/>

            <button className='button'>Enviar</button>
            <hr/>


        </form>
    </div>
    
  )
}
