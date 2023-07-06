import React from 'react'
import "boxicons"

export const Banner = () => {
  return (
    <div className="Banner">
        <div className="Banner-container">
            <h1>MV</h1>
            <p>Indumentaria Deportiva</p>
            <div className='btn-wsp' >
            <a href='http://api.whatsapp.com/send?phone=1164616606'>
            <box-icon name='whatsapp' type='logo' color='#11ea13' ></box-icon>
            </a>
            </div>
        </div>
    </div>
  )
}
