import { UPDATE_COINS, UPDATE_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_COINS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((e) => e !== 'USDT'),
    };
  case UPDATE_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
      total: state.total + (
        Number(action.payload.exchangeRates[action.payload.currency].ask)
        * Number(action.payload.value)),
    };
  default:
    return state;
  }
};

export default wallet;
