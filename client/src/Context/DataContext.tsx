import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BASE_URL: string = "http://localhost:9999";

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


  return (
    <DataContext.Provider value={{ coworkingSpaces, setCoworkingSpaces }}>
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
