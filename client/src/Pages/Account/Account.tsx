
import { useNavigate } from "react-router-dom";
import BookingsList from "../../Components/Templates/BookingsList/BookingsList";
import { useDataContext } from "../../Context/DataContext";
import "./Account.scss";

const Account = () => {
  const { userData } = useDataContext();

  return (
    <div className="account">
      <div className="accountHeader">
        <div className="h1">
          <i className="fa-solid fa-user fa-2xl darkGray"></i>
          <h1>Account</h1>
        </div>
      </div>
      <div className="userInfo">
        <div className="dot"></div>
        <p className="darkGray bold"> {userData?.userName}</p>
      </div>
      <BookingsList />
    </div>
    
  );
};

export default Account;
