import React, { useState } from "react";
import "./LoginRegister.scss";
import LoginForm from "../../Molecules/LoginForm/LoginForm";
import RegisterForm from "../../Molecules/RegisterForm/RegisterForm";

const LoginRegister = () => {
  const [toggler, setToggler] = useState<boolean>(true);

  const togglePage = (e: React.MouseEvent) => {
    e.preventDefault();
    setToggler((state) => !state);
  };

  return (
    <div className="loginRegister">
      <div className="form">
        <h1>{toggler ? "Login" : "Register"}</h1>
        {toggler ? (
          <LoginForm togglePage={togglePage} />
        ) : (
          <RegisterForm togglePage={togglePage} />
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
