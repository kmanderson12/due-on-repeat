import { createContext, useReducer } from 'react';

// TODO: Research methods of data persistence - Next.js will
// require unique method for localStorage

let initialState = {
  name: 'Dewey Finn',
  email: 'dewey@schoolofrock.com',
  items: [
    {
      id: 1,
      type: `income`,
      title: `Substitute Teaching`,
      recurrence: `bi-weekly`,
      amount: `1000`,
      dayOfMonth: `first`,
      dayOfWeek: `Friday`,
      customDay: 15
    },
    {
      id: 2,
      type: `income`,
      title: `Gig Money`,
      recurrence: `weekly`,
      amount: `150`,
      dayOfMonth: `first`,
      dayOfWeek: `Friday`,
      customDay: 15
    },
    {
      id: 3,
      type: `expense`,
      title: `Guitar Strings`,
      recurrence: `monthly`,
      amount: `20`,
      dayOfMonth: `first`,
      dayOfWeek: `Monday`,
      customDay: 15
    },
    {
      id: 4,
      type: `expense`,
      title: `Gas for Van`,
      recurrence: `weekly`,
      amount: `40`,
      dayOfMonth: `first`,
      dayOfWeek: `Monday`,
      customDay: 15
    },
    {
      id: 5,
      type: `expense`,
      title: `Spotify`,
      recurrence: `monthly`,
      amount: `11`,
      dayOfMonth: `custom`,
      dayOfWeek: `Monday`,
      customDay: 20
    }
  ]
};
const store = createContext(initialState);
const { Provider } = store;

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (item.id !== action.payload.id) {
      return item;
    }
    return {
      ...item,
      ...action.payload
    };
  });
}

function removeItem(array, action) {
  return array.filter((item, index) => item.id !== action.payload.id);
}

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        initialState = {
          ...state,
          items: [...state.items, action.payload]
        };
        localStorage.setItem('data', JSON.stringify(initialState));
        return initialState;
      case 'UPDATE_ITEM':
        const updatedItems = updateObjectInArray(initialState.items, action);
        initialState = {
          ...state,
          items: updatedItems
        };
        localStorage.setItem('data', JSON.stringify(initialState));
        return initialState;
      case 'DELETE_ITEM':
        initialState = {
          ...state,
          items: removeItem(initialState.items, action)
        };
        localStorage.setItem('data', JSON.stringify(initialState));
        return initialState;
      case 'CANCEL':
        return { ...initialState, disabled: true };
      case 'HANDLE_CHANGE':
        return { ...state, [action.name]: action.value };
      case 'SUBMIT':
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
