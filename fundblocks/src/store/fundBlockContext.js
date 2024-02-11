import React, { useState, createContext } from "react";

export const FundBlockContext = createContext();

export function FundBlockProvider(props) {



  const [funds, setFunds] = useState(70);
  
  return (
    <div>
      <FundBlockContext.Provider
        value={{
          funds,
          setFunds,
         
        }}
      >
        {props.children}
      </FundBlockContext.Provider>
    </div>
  );
}