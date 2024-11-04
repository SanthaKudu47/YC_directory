import { actionType, globalStateType } from "../globalContext";

export default function globalContextReducer(state: globalStateType, action: actionType) {
  switch (action.type) {
    case "openMenu": {
      const updatedState = { ...state };
      updatedState.isMenuOpened = true;
      return updatedState;
    }

    case "closeMenu": {
        const updatedState = { ...state };
        updatedState.isMenuOpened = false;
        return updatedState;
      }

    default:
      return state;
  }
}
