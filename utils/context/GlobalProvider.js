import { createContext, useReducer } from "react";

// TODO: Research methods of data persistence - Next.js will
// require unique method for localStorage

let initialState = {
  name: "Jim Halpert",
  email: "jimothy@dundermifflin.com",
  items: [
    {
      type: `income`,
      title: `Jim's Check`,
      occurrence: `Every month on the 15th`,
      amount: `1550`
    },
    {
      type: `expense`,
      title: `Internet`,
      occurrence: `Every month on the 13th`,
      amount: `65`
    }
  ]
};
const store = createContext(initialState);
const { Provider } = store;

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        initialState = {
          ...state,
          items: [...state.items, action.payload]
        };
        localStorage.setItem("data", JSON.stringify(initialState));
        return initialState;
      case "CANCEL":
        return { ...initialState, disabled: true };
      case "HANDLE_CHANGE":
        return { ...state, [action.name]: action.value };
      case "SUBMIT":
        console.log(action.payload);
        initialState = { ...state };
        return initialState;
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, GlobalProvider };
