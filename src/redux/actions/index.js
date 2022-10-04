export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_COINS = 'UPDATE_COINS';
export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';
export const DEL_EXPENSES = 'DEL_EXPENSES';

export const upDateEmail = (email) => ({
  type: UPDATE_EMAIL,
  email,
});

export const upDateCoins = (payload) => ({
  type: UPDATE_COINS,
  payload,
});

export const upDateExpenses = (payload) => ({
  type: UPDATE_EXPENSES,
  payload,
});

export const deleteExpenses = (payload) => ({
  type: DEL_EXPENSES,
  payload,
});

export const fetchApiCoins = () => async (dispatch) => {
  const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await requestAPI.json();
  dispatch(upDateCoins(json));
};

export const fetchApiWallet = async () => {
  const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await requestAPI.json();
  return json;
};
