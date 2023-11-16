import { useNavigate } from "react-router-dom";
import AccountList from "../../components/organisms/AccountList/AccountList";
import { useDataContext } from "../../contexts/DataContext";
import "./Account.scss";
import { useEffect, useState } from "react";

const Account = () => {
  const { userData } = useDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, []);

  return (
    <div className="account fadeIn">
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
