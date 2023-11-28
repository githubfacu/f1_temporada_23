import React, {useState} from 'react'
import '../styles/Circuitos.css'
import Card from './Card'

const Circuitos = () => {

    const circuitos = [
        {
            id: 1, flag: 'https://media.formula1.com/content/dam/fom-website/flags/Bahrain.jpg', pais: 'BAHRAIN', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/3col/image.png', ganador: 'Max Vexstappen', onboardLap: 'https://youtu.be/RMpWukELqCc'
        },
        {
            id: 2, flag: 'https://media.formula1.com/content/dam/fom-website/flags/Saudi-Arabia.jpg', pais: 'SAUDI ARABIAN', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245030/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Saudi%20Arabia%20carbon.png.transform/3col/image.png', ganador: 'Sergio Perez', onboardLap: 'https://youtu.be/RMpWukELqCc'
        },
        {
            id: 3, flag: 'https://media.formula1.com/content/dam/fom-website/flags/Australia.jpg', pais: 'AUSTRALIA', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245032/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Australia%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/7NfsXFY_V2o'
        },
        {
            id: 4, flag: 'https://media.formula1.com/content/dam/fom-website/flags/azerbaijan-flag.jpg', pais: 'AZERBAIJAN', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245030/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png.transform/3col/image.png', ganador: 'Sergio Perez', onboardLap: 'https://youtu.be/M56qZEbUL8Q'
        },
        {
            id: 5, flag: 'https://media.formula1.com/content/dam/fom-website/flags/United-States.jpg', pais: 'UNITED STATES', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Miami%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/zJRswyrJ7XY'
        },
        {
            id: 6, flag: 'https://media.formula1.com/content/dam/fom-website/flags/Monaco.jpg', pais: 'MONACO', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245032/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monte%20Carlo%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/lZ0bHr8UW7k'
        },
        {
            id: 7, flag: 'https://media.formula1.com/content/dam/fom-website/manual/races/Spain/spanish-flag.GIF', pais: 'ESPAÑA', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1680529432/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/_6JyAbjdGNU'
        },
        {
            id: 8, flag: 'https://media.formula1.com/content/dam/fom-website/manual/races/Canada/flag-canada-96x64.jpg', pais: 'CANADA', img: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/PSjVVhET4M8'
        },
        {
            id: 9, flag: 'https://media.formula1.com/content/dam/fom-website/manual/races/Austria/austria-flag.GIF', pais: 'AUSTRIA', img: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/6wbGOfp7GYg'
        },
        {
            id: 10, flag: 'https://media.formula1.com/content/dam/fom-website/manual/races/Great%20Britain/uk-flag.GIF', pais: 'GREAT BRITAIN', img: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/y8RhMJp0Rbg'
        },
        {
            id: 11, flag: 'https://media.formula1.com/content/dam/fom-website/manual/races/Hungary/HUNG0001.GIF', pais: 'HUNGRIA', img: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungar%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/E4kx5PFk8jU'
        },
        {
            id: 12, flag: 'https://media.formula1.com/content/dam/fom-website/flags/Belgium.jpg', pais: 'BELGIUM', img: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/Zk3SUXcVsd8'
        },
        {
            id: 13, flag: 'https://media.formula1.com/content/dam/fom-website/flags/Netherlands.jpg', pais: 'NETHERLANDS', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245033/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Netherlands%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/eCn1xbVjdW8'
        },
        {
            id: 14, flag: 'https://media.formula1.com/content/dam/fom-website/flags/Italy.jpg', pais: 'ITALY', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245031/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/X7_5VQWTj6s'
        },
        {
            id: 15, flag: 'https://media.formula1.com/content/dam/fom-website/flags/Singapore%20original.jpg', pais: 'SINGAPORE', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1683639275/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Singapore%20carbon.png.transform/3col/image.png', ganador: 'Carlos Sainz Jr', onboardLap: 'https://youtu.be/CikmVwYrpGg'
        },
        {
            id: 16, flag: 'https://media.formula1.com/content/dam/fom-website/flags/Japan.jpg', pais: 'JAPAN', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245031/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Japan%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/tm8FFbIHnPk'
        },
        {
            id: 17, flag: 'https://media.formula1.com/content/dam/fom-website/flags/Qatar.jpg', pais: 'QATAR', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245031/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Qatar%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/CHe9Qr_mqko'
        },
        {
            id: 18, flag: 'https://media.formula1.com/content/dam/fom-website/flags/United-States.jpg', pais: 'UNITED STATES', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/USA%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/MSbF9FlU_bE'
        },
        {
            id: 19, flag: 'https://media.formula1.com/content/dam/fom-website/manual/races/Mexico/flag-mexico-96x64.jpg', pais: 'MEXICO', img: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Mexico%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/E8v01p4NiLM'
        },
        {
            id: 20, flag: 'https://media.formula1.com/content/dam/fom-website/flags/brazil.jpg', pais: 'BRAZIL', img: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Brazil%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://youtu.be/A6QtZ-RQPHE'
        },
        {
            id: 21, flag: 'https://media.formula1.com/content/dam/fom-website/flags/United-States.jpg', pais: 'UNITED STATES', img: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1677249931/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Las%20Vegas%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://www.youtube.com/watch?v=BFad9RPG8EY'
        },
        {
            id: 22, flag: 'https://media.formula1.com/content/dam/fom-website/flags/UAE-Flag.jpg', pais: 'ABU DHABI', img: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhab%20carbon.png.transform/3col/image.png', ganador: 'Max Verstappen', onboardLap: 'https://www.youtube.com/watch?v=ucLUqZhObMs'
        }
    ]

    const elementosPorPagina = 4
    const [paginaActual, setPaginaActual] = useState(1)

    const inicio = (paginaActual - 1) * elementosPorPagina
    const fin = inicio + elementosPorPagina
    const elementosMostrados = circuitos.slice(inicio, fin)
  
    const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina)}

    const styles = {
        color: 'rgb(26, 26, 26)',
    }

    function retroceder(){
        cambiarPagina(paginaActual - 1)
    }

    function avanzar(){
        cambiarPagina(paginaActual + 1)
    }



  return (
    <>
        <div className='titlediv'>
            <h1>Schedule</h1>              
        </div>
        <div className='contenedor-circuitos'>

            <button 
            className={`anterior ${paginaActual === 1 ? 'disabled' : ''}`}
            onClick={() => retroceder()}
                disabled={paginaActual === 1}>
            <i style={styles} class="fa-solid fa-chevron-right fa-rotate-180"></i></button>

            <ul>
                {elementosMostrados.map(circuito => <li key={circuito.id}><Card circuito={circuito}/></li>)}
            </ul>

            <button 
            className={`siguiente ${paginaActual * elementosPorPagina >= circuitos.length ? 'disabled' : ''}`}
            onClick={() => avanzar( )}
                disabled={paginaActual * elementosPorPagina >= circuitos.length}>
            <i style={styles} class="fa-solid fa-chevron-right"></i></button>

        </div>
    </>
  )
}

export default Circuitos