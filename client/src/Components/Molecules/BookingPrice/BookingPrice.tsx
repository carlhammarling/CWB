import React from 'react'
import { useBookingContext } from '../../../Context/BookingContext';
import './BookingPrice.scss'

const BookingPrice = (thisCoworkingSpace: CoworkingSpace) => {
    const {arriveDate, checkoutDate } = useBookingContext()
  return (
    <div className='bookingPrice'>
        {arriveDate && !checkoutDate && (
            <div className="totPrice">
              <p className="darkGray">Total price</p>
              <p className="darkGray">
                {thisCoworkingSpace.price.day} THB
              </p>
            </div>
          )}
          {arriveDate && checkoutDate && (
            <div className="totPrice">
              <p className="darkGray">Total price</p>
              <p className="darkGray">
                {thisCoworkingSpace.price.week} THB
              </p>
            </div>
          )}
    </div>
  )
}

export default BookingPrice