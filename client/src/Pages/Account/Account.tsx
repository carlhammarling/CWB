import { useNavigate } from "react-router-dom";
import AccountList from "../../Components/Organisms/AccountList/AccountList";
import { useDataContext } from "../../Context/DataContext";
import "./Account.scss";

const Account = () => {
  const { userData } = useDataContext();
  const navigate = useNavigate();

  if (!userData) {
    navigate("/");
  }
  return (
    <div className="account">
      <div className="accountHeaderWrapper">
        <div className="accountHeader">
          <div className="accountLogo">
            <div className="h1">
              <i className="fa-solid fa-user fa-2xl darkGray"></i>
              <h1>Account</h1>
            </div>
          </div>
          <div className="userInfo">
            <div className="dot"></div>
            <p className="darkGray bold"> {userData?.userName}</p>
          </div>
        </div>
      </div>
      <AccountList />
    </div>
  );
};

export default Account;
