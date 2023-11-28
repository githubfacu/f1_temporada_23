import React from 'react'
import {imgCircuito, circuitoCard, banderaImg, h3, h4} from '../styles/Card.module.css'

const Card = ({circuito}) => {
  return (
    <div className={circuitoCard}>
        <img className={banderaImg} src={circuito.flag} alt="bandera" />
        <h3 className={h3}>{circuito.pais}</h3>
        <div className={imgCircuito}>
          <img src={circuito.img} alt="img-circuito" />            
        </div>
        <h4  className={h4}>Ganador: {circuito.ganador}</h4>
        <a href={circuito.onboardLap} target='blank'><i class="fa-solid fa-square-arrow-up-right fa-rotate-90"></i> onboard lap</a>
    </div>
  )
}

export default Card