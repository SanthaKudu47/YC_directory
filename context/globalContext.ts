import { createContext, Dispatch } from "react";

const initialState:globalStateType = {
  isMenuOpened: false,
  dispatch: null,
};

const GlobalContext = createContext(initialState);

export type actionType = {
  type: "openMenu" | "closeMenu";
  value: any;
};
export type globalStateType = {
  isMenuOpened: boolean;
  dispatch: Dispatch<actionType> | null;
};

export { GlobalContext, initialState };
