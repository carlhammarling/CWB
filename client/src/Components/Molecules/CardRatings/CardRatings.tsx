import React from 'react'
import './CardRatings.scss'
import { sumAverageRating  } from '../../../Utils/SumAverageRating';

const CardRatings = (props: CardRatingsProps) => {
  
  const averageRating = sumAverageRating(props.reviews)

  return (
    <div className="cardRating">
        <div>
          <i className="fa-solid fa-star"></i>
        </div>
        <p>{averageRating}</p>
      </div>
  )
}

export default CardRatings