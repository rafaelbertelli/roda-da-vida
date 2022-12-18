import { createContext, useContext, useState } from "react";
import { IIdentification } from "../@types/identification.interface";

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [identification, setIdentification] = useState<IIdentification>();

  return (
    <AppContext.Provider value={{ identification, setIdentification }}>
      {children}
    </AppContext.Provider>
  );
}

// const MyContext = createContext({});
// export default MyContext;
