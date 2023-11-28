import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Tabla = () => {

  const [drivers, setDrivers] = useState([])
  const url = ('https://v1.formula-1.api-sports.io/rankings/drivers?season=2023')

  const headers = {
    headers: {
      'x-rapidapi-key': '5e4589f6667afda2b7b7e7fdd88c8fad',
      'x-rapidapi-host': 'v1.formula-1.api-sports.io',
    },
  }

  useEffect(() => {
        axios(url, headers)
        .then((resp) => setDrivers(resp.data.response))
        .catch((err) => console.log(err))
        console.log(drivers)
  }, [])


  return (
    <div className='tabla'>
      <ul>
        <li>
          <p className='pos'>POS</p>
          <p  className='dri'>DRIVER</p>
          <p className='team'>AUTO</p>
          <p>PUNTOS</p>
        </li>
        {drivers.map(conductor=>(<li key={conductor.driver.id}>
          <p  className='pos'>{conductor.position}</p>
          <p  className='dri'>{conductor.driver.name}</p>
          <p className='team'>{conductor.team.name}</p>
          <p>{conductor.points}</p>
        </li>))}
      </ul>
    </div>
  )
}

export default Tabla