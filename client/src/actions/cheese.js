// Make an async action called fetchCheeses
// Use fetch API to make GET request to api/cheeses
// Make three sync actions: fetchCheeseRequest, fetchCheesesSuccess, fetchCheesesError

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
const fetchCheeseRequest = () => ({
  type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
const fetchCheeseSuccess = (cheeses) => ({
  type: FETCH_CHEESE_SUCCESS,
  cheeses
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
const fetchCheesesError = (message) => ({
  type: FETCH_CHEESE_ERROR,
  message
});

export const fetchCheeses = () => {
  return (dispatch) => {
    dispatch(fetchCheeseRequest())

    setTimeout(() => {
      fetch('/api/cheeses')
      .then(response => response.json())
      .then(cheeses => dispatch(fetchCheeseSuccess(cheeses)))
      .catch(err => dispatch(fetchCheesesError(err.message)))
    }, 2000)
  }
}
