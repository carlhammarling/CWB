import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

//DataContext is what we will be able to import thrue the contexts in other components.
const DataContext = createContext<DataContextProps | undefined>(undefined);

//In the Provider we put all the functionality - We have to encapsule the components where this should be reachable.
export const DataProvider = ({ children }: DataProviderProps) => {
  const [coworkingSpaces, setCoworkingSpaces] = useState<
    CoworkingSpace[] | undefined
  >(undefined);

  useEffect(() => {
    const getCoworkingSpaces = async () => {
      try {
        const res = await axios.get(BASE_URL + "/api/cowork");
        setCoworkingSpaces(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCoworkingSpaces();
  }, []);

  const [showModal, setShowModal] = useState<boolean>(false);

  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<User>({
    _id: "",
    userName: "",
    bookings: []
  });

  const getUserData = async () => {
    if(!token) {
      return
    }
    try {
      const res = await axios.get(BASE_URL + "/api/user/bytoken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData({
        _id: res.data._id,
        userName: res.data.userName,
        bookings: res.data.bookings
      })
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (typeof token == "string") {
      localStorage.setItem('token', token);
      getUserData()
    }
    setUserData({
      _id: "",
      userName: "",
      bookings: []
    })
  }, [token]);

  


  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    setToken(savedToken)
  }, [])

  return (
    <DataContext.Provider
      value={{
        coworkingSpaces,
        setCoworkingSpaces,
        showModal,
        setShowModal,
        token,
        setToken,
        userData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

//A function that let us bring out the values from the context Type-safe.
export const useDataContext = () => {
  const dataContext = React.useContext(DataContext);
  if (dataContext === undefined) {
    throw new Error("Context must be inside a provider");
  }
  return dataContext;
};
