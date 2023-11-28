import React from 'react'
import '../styles/Articulo.css'
import UlCard from './UlCard'

const Articulo = () => {
  return (
    <div className='seccion'>
        <div className='banner'>
            <div className='max1'>
                <img src="https://media.formula1.com/content/dam/fom-website/flags/Netherlands.gif" alt="holanda flag" />
                <p>Max VERSTAPPEN</p>           
            </div>

        </div>

        <div className='tablaimgs'>

            <UlCard />

            <div className='maxAlbum'>
                <img src="https://media.formula1.com/content/dam/fom-website/sutton/2023/Bahrain/Sunday/1471435615.jpg.img.1920.medium.jpg/1678027550607.jpg" alt="" />
                <img src="https://media.formula1.com/content/dam/fom-website/manual/DriverGalleries2023/Verstappen/verstappen-miami-race.png.img.1920.medium.png/1692720347142.png" alt="" />
                <img src="https://media.formula1.com/content/dam/fom-website/sutton/2023/Bahrain/Sunday/1471490184.jpg.img.1920.medium.jpg/1678045692074.jpg" alt="" />
                <img className='lastImg' src="https://media.formula1.com/content/dam/fom-website/manual/DriverGalleries2023/Verstappen/1488926732-16by9Centre.jpg.img.1920.medium.jpg/1692720342749.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Articulo