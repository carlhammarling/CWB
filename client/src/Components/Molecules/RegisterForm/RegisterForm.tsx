import axios from "axios";
import React, { useState } from "react";
import { useDataContext } from "../../../Context/DataContext";

const RegisterForm = ({ togglePage }: LoginFormProps) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const { setToken } = useDataContext()

  const [formData, setFormData] = useState<RegisterFormData>({
    userName: "",
    password: "",
    passwordRepeat: "",
  })

  const [error, setError] = useState<string| null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setError(null)
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }


  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    if(formData.userName.length < 1 || formData.password.length < 1 || formData.passwordRepeat.length < 1) {
      setError("You have to fill in all the input fields!")
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if(!passwordRegex.test(formData.password)) {
      setError("Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.");
      return;
    }

    if(formData.password !== formData.passwordRepeat) {
      setError('Passwords are not matching');
      return;
    }

    try {
      const res = await axios.post(BASE_URL + "/api/user/register", formData)
      
      setToken(res.data);
    } catch (err) {
      if(axios.isAxiosError(err)) {
        setError(err.response?.data.message)
        return;
      }
      setError("Unknown error");
      console.log(err)
      return;
    }
  }



  return (
    <form onSubmit={submitHandler}>
      <label className="bold" htmlFor="userName">
        Email:
      </label>
      <input type="email" id="userName" name="userName" value={formData.userName} onChange={handleChange}></input>
      <label className="bold" htmlFor="password">
        Password:
      </label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}></input>
      <label className="bold" htmlFor="passwordRepeat">
        Repeat password:
      </label>
      <input type="password" id="passwordRepeat" name="passwordRepeat" value={formData.passwordRepeat} onChange={handleChange}></input>
      <div className="text-center">
        <p>Allready have an account? </p>
        <p className="underline pointer" onClick={togglePage}>
          Login here
        </p>
      </div>
      <p>{error}</p>
      <button className="greenButton h2">Register</button>
    </form>
  );
};

export default RegisterForm;
