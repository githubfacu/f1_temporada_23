import React from 'react'
import Tabla from './Tabla'
import Destacados from './Destacados'
import '../styles/Resumen.css'

const Resumen = () => {

  return (
    <>
        <div className='tablaDestacados'>
            <div className='subdiv'>
                <Tabla />
                <Destacados />                
            </div>
        </div>    
    </>

  )
}

export default Resumen