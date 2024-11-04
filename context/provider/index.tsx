"use client";

import { ReactNode, useReducer } from "react";
import { GlobalContext, initialState } from "../globalContext";
import globalContextReducer from "../reducer/reducer";

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(globalContextReducer, initialState);
  return (
    <GlobalContext.Provider value={{...state, dispatch:dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}
