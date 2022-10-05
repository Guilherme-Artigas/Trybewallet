import { UPDATE_COINS, UPDATE_EXPENSES, DEL_EXPENSES, EDIT_EXPENSES,
  SAVE_EDITED_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_COINS: {
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((e) => e !== 'USDT'),
    };
  }
  case UPDATE_EXPENSES: {
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
    };
  }
  case DEL_EXPENSES: {
    return {
      ...state,
      editor: false,
      expenses: action.payload,
    };
  }
  case EDIT_EXPENSES: {
    return { ...state, editor: true, idToEdit: action.payload.id };
  }
  case SAVE_EDITED_EXPENSE: {
    const newList = state.expenses.map((curr) => {
      if (action.payload.id === curr.id) {
        return action.payload;
      }
      return curr;
    });
    return { ...state,
      editor: false,
      expenses: newList,
    };
  }
  default:
    return state;
  }
};

export default wallet;
