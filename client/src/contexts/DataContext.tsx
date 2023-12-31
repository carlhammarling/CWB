import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

//DataContext is what we will be able to import thrue the contexts in other components.
const DataContext = createContext<DataContextProps | undefined>(undefined);

//In the Provider we put all the functionality - We have to encapsule the components where this should be reachable.
export const DataProvider = ({ children }: DataProviderProps) => {
  const [coworkingSpaces, setCoworkingSpaces] = useState<CoworkingSpace[]>();

  useEffect(() => {
    const getCoworkingSpaces = async () => {
      try {
        const res = await axios.get(BASE_URL + "/api/cowork");
        const coworkingArray: CoworkingSpace[] = res.data;
        setCoworkingSpaces(coworkingArray);
      } catch (err) {
        console.log(err);
      }
    };
    getCoworkingSpaces();
  }, []);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [editBooking, setEditBooking] = useState<BookedData>()
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);

  const getUserData = async () => {
    if (!token) {
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "/api/user/bytoken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData: User = res.data;
      setUserData(userData);
    } catch (err) {
      console.log(err);
    }
  };

  const expiredToken = (res: any) => {
    if(res.status === 401) {
      setToken(null);
    }
  };

  useEffect(() => {
    axios.interceptors.response.use(res => res, error => {
      if(error.response) {
        expiredToken(error.response);
      }
      else {
        Promise.reject(error);
      }
    });
  }, []);

  useEffect(() => {
    if (typeof token == "string") {
      localStorage.setItem("token", token);
      getUserData();
    }
    setUserData(null);
  }, [token]);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

 

  return (
    <DataContext.Provider
      value={{
        coworkingSpaces,
        setCoworkingSpaces,
        showModal,
        setShowModal,
        showMenu,
        setShowMenu,
        token,
        setToken,
        userData,
        edit,
        setEdit,
        editBooking,
        setEditBooking,
        bookingSuccess,
        setBookingSuccess
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
