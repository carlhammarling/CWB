import React from "react";

const RegisterForm = ({ togglePage }: LoginFormProps) => {
  return (
    <form>
      <label className="bold" htmlFor="email">
        Email:
      </label>
      <input type="text" id="email"></input>
      <label className="bold" htmlFor="password">
        Password:
      </label>
      <input type="password" id="password"></input>
      <label className="bold" htmlFor="repeatPassword">
        Repeat password:
      </label>
      <input type="password" id="repeatPassword"></input>
      <div className="text-center">
        <p>Allready have an account? </p>
        <p className="underline" onClick={togglePage}>
          Login here
        </p>
      </div>
      <button className="greenButton h2">Register</button>
    </form>
  );
};

export default RegisterForm;
