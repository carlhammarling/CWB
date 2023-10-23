import React from 'react'
import './FacilityAtomRow.scss'

const FacilityAtomRow = (props: FacilityAtomProps ) => {

  console.log(props.facilities)
  return (
    <ul className='facilityAtomRow'>
      {props.facilities?.includes("food") && <li><i className="fa-solid fa-utensils"></i></li> }
      {props.facilities?.includes("coffee") && <li><i className="fa-solid fa-mug-hot"></i></li> }
      {props.facilities?.includes("gym") && <li><i className="fa-solid fa-dumbbell"></i></li> }
      {props.facilities?.includes("activities") && <li><i className="fa-solid fa-medal"></i></li> }
      {props.facilities?.includes("safetybox") && <li><i className="fa-solid fa-lock"></i></li> }
        
    </ul>
  )
}

export default FacilityAtomRow