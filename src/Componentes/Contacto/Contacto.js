import React from 'react'

export const Contacto = () => {
  return (
    <div className='div-form'>
        <h2 className='titulo-form'>Contacto</h2>
        <form className='form-mail'>

            <label>Nombre:</label>
            <input type="text" name="user_name"/>
            <hr/>

            <label>Correo Electrónico:</label>
            <input type="email" name="user_email"/>
            <hr/>

            <label>Mensaje:</label>
            <textarea name="user_mensaje" id="" cols="30" rows="10"></textarea>
            <hr/>

            <button className='button'>Enviar</button>


        </form>
    </div>
    
  )
}
