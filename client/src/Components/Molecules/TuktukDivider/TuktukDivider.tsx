import React from 'react'
import './TuktukDivider.scss'
import Tuktuk from '../../../Assets/images/Tuktuk.jpeg'

const TuktukDivider = () => {
  return (
    <div className='tuktukDivider'>
      <p className='banner'>Not sure how long you will stay? We always have <span className='turquoise'>flexible booking</span>  and <span className='turquoise'>free cancelation!</span> </p>
        <img src={Tuktuk} alt="Tuktuk" />
    </div>
  )
}

export default TuktukDivider