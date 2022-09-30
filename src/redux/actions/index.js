export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_WALLET = 'UPDATE_WALLET';

export const upDateEmail = (email) => ({
  type: UPDATE_EMAIL,
  email,
});

export const upDateWallet = (payload) => ({
  type: UPDATE_WALLET,
  payload,
});

export const fetchAPI = () => async (dispatch) => {
  const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await requestAPI.json();
  dispatch(upDateWallet(Object.keys(json)));
};
