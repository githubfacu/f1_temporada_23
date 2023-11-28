import React from 'react'

const UlCard = () => {



    function isScrolledIntoView(element) {
        const rect = element.getBoundingClientRect()
        const elemTop = rect.top
        const elemBottom = rect.bottom

        const isVisible = elemTop < window.innerHeight / 2 && elemBottom >= 0
        return isVisible
    }

  return (
    <div className='resultados'>
        <ul>
            <li className='hidden-content'>
                <p>GRAND PRIX</p>
                <p>PUESTO</p>
            </li>
            <li>
                <p>Bahrain</p>
                <p>1°</p>
            </li>
            <li>
                <p>Saudi Arabian</p>
                <p>2°</p>
            </li>
            <li>
                <p>Australia</p>
                <p>1°</p>
            </li>
            <li>
                <p>Azerbaijan</p>
                <p>2°</p>
            </li>
            <li>
                <p>Miami</p>
                <p>1°</p>
            </li>
            <li>
                <p>Monaco</p>
                <p>1°</p>
            </li>
            <li>
                <p>Spain</p>
                <p>1°</p>
            </li>
            <li>
                <p>Canada</p>
                <p>1°</p>
            </li>
            <li>
                <p>Austria</p>
                <p>1°</p>
            </li>
            <li>
                <p>Great Britain</p>
                <p>1°</p>
            </li>
            <li>
                <p>Hungary</p>
                <p>1°</p>
            </li>
            <li>
                <p>Belgium</p>
                <p>1°</p>
            </li>
            <li>
                <p>Netherlands</p>
                <p>1°</p>
            </li>
            <li>
                <p>Italy</p>
                <p>1°</p>
            </li>
            <li>
                <p>Singapore</p>
                <p>5°</p>
            </li>
            <li>
                <p>Japan</p>
                <p>1°</p>
            </li>
            <li>
                <p>Qatar</p>
                <p>1°</p>
            </li>
            <li>
                <p>United States</p>
                <p>1°</p>
            </li>
            <li>
                <p>Mexico</p>
                <p>1°</p>
            </li>
            <li>
                <p>Brazil</p>
                <p>1°</p>
            </li>
            <li>
                <p>Las Vegas</p>
                <p>1°</p>
            </li>
            <li className='hidden-content'>
                <p>Abu Dhabi</p>
                <p>1°</p>
            </li>
        </ul>
    </div>
  )
}

export default UlCard