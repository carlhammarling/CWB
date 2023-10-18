import React from 'react'
import './CoffeeDivider.scss'
import Macchiato from '../../../Assets/images/Macchiato.png'

const CoffeeDivider = () => {
  return (
    <div className='coffeeDivider'>
      <div className='coffeeCircle'>
        <img src={Macchiato} alt="Coffee" />
      </div>
      <p className='banner white'>Do you <span className='yellow'>love coffee</span>  as much as us? Most of our places have <span className='yellow'>free coffee!</span> </p>
    </div>
  )
}

export default CoffeeDivider