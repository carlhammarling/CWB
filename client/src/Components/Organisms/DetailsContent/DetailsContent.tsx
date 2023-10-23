import React from 'react'
import FacilityTextAtomRow from '../../Molecules/FacilityTextAtomRow/FacilityTextAtomRow'
import './DetailsContent.scss'

const DetailsContent = (props: CoworkingSpace) => {
  return (
    <div className='detailsContent'>
        <div>
            <h1>{props.name}</h1>
        </div>
        <div>
            <p className='xs'><i className="fa-solid fa-location-dot fa-sm"></i> {props.adress}</p>
            <p className='xs'><i className="fa-regular fa-envelope fa-sm"></i> {props.email}</p>
        </div>
        <FacilityTextAtomRow facilities={props.facilities}/>
        <p className='description'>{props.description}</p>
    </div>
  )
}

export default DetailsContent