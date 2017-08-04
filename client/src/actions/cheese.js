// Make an async action called fetchCheeses
// Use fetch API to make GET request to api/cheeses
// Make three sync actions: fetchCheeseRequest, fetchCheesesSuccess, fetchCheesesError

const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
const fetchCheeseRequest = () => ({
  type: FETCH_CHEESE_REQUEST
});

const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
const fetchCheeseSuccess = (cheeses) => ({
  type: FETCH_CHEESE_SUCCESS,
  cheeses
});

const FETCH_CHEESE_ERROR = 'FETCH_CHEESEE_ERROR';
const fetchCheesesError = (message) => ({
  type: FETCH_CHEESE_ERROR,
  message
});

export default const fetchCheeses = () => {
  return (dispatch) => {
    dispatch(fetchCheeseRequest())

    setTimeout(() => {
      fetch('/api/cheeses')
      .then(response => response.json())
      .then(cheeses => dispatch(fetchCheeseSuccess(cheeses)))
      .catch(err => console.log(err))
    }, 2000)
  }
}
