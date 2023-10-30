import { useBookingContext } from '../../../Context/BookingContext';
import './PaymentMethod.scss'

const PaymentMethod = () => {

  const { selectedPM, setSelectedPM } = useBookingContext();

  return (
    <div className='paymentMethod'>
      <h2 className="darkGray">
        Choose payment method <i className="fa-solid fa-credit-card fa-sm"></i>
      </h2>
      <div className="paymentSelect">
        <img
          className={`paymentImg ${selectedPM === "paypal" ? "active" : ""}`}
          onClick={() => setSelectedPM("paypal")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJdjso_lcyN_0SmKZH4T0LwvUKVms39KghA&usqp=CAU"
          alt=""
        />
        <div className="line"></div>
        <img
          className={`paymentImg ${
            selectedPM === "visa-mastercard" ? "active" : ""
          }`}
          onClick={() => setSelectedPM("visa-mastercard")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ539ufQZ_n9NoIO9CHegZ1c_mSEV3xKGqnOmvwXhAeb6Xy-3Vk2zMOO8veNOJjftC9Qw&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default PaymentMethod;
