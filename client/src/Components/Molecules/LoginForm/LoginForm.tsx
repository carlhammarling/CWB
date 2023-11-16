import axios from "axios";
import React, { useState } from "react";
import { useDataContext } from "../../../contexts/DataContext";

const LoginForm = ({ togglePage }: LoginFormProps) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const { setToken } = useDataContext();

  const [formData, setFormData] = useState<LoginFormData>({
    userName: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);

    if (formData.userName.length < 1 || formData.password.length < 1) {
      setError("You have to fill in all the input fields!");
      return;
    }

    try {
      const res = await axios.post(BASE_URL + "/api/user/login", formData);

      setToken(res.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message);
        console.log(err);
        return;
      }
      setError("Unknown error");
      console.log(err);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="bold" htmlFor="userName">
        Email:
      </label>
      <input
        type="email"
        name="userName"
        id="userName"
        value={formData.userName}
        onChange={handleChange}
      ></input>
      <label className="bold" htmlFor="password">
        Password:
      </label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      ></input>
      <div className="text-center">
        <p>Don’t have an account yet? </p>
        <p className="underline pointer" onClick={togglePage}>
          Register here
        </p>
        <p>{error}</p>
      </div>
      <button className="greenButton h2">Login</button>
    </form>
  );
};

export default LoginForm;
