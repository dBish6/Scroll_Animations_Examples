import { GlobalContextValues } from "../@types/GlobalContextValues";
import { createContext, useState, useContext, useEffect } from "react";

const GlobalContextContext = createContext<GlobalContextValues | undefined>(
  undefined
);

export const GlobalContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState({
      animationType: false,
      observer: false,
    }),
    [animationType, setAnimationType] = useState(""),
    [disableActions, setDisableActions] = useState(true);

  // useEffect(() => {
  //   console.log("isLoaded", isLoaded);
  // }, [isLoaded]);

  // useEffect(() => {
  //   console.log("animationType", animationType);
  // }, [animationType]);

  return (
    <GlobalContextContext.Provider
      value={{
        animationType,
        setAnimationType,
        isLoaded,
        setIsLoaded,
        disableActions,
        setDisableActions,
      }}
    >
      {children}
    </GlobalContextContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextValues => {
  const context = useContext(GlobalContextContext);
  if (!context)
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider."
    );

  return context;
};
