import React from 'react'
import FacilityTextAtomRow from '../../Molecules/FacilityTextAtomRow/FacilityTextAtomRow'
import './DetailsContent.scss'
import AdressContact from '../../Molecules/AdressContact/AdressContact'

const DetailsContent = (props: CoworkingSpace) => {
  return (
    <div className='detailsContent'>
        <div>
            <h1>{props.name}</h1>
        </div>
        <AdressContact email={props.email} adress={props.adress} />
        <FacilityTextAtomRow facilities={props.facilities}/>
        <p className='description'>{props.description}</p>
    </div>
  )
}

export default DetailsContent