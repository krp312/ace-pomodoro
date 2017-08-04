export const POST_CHEESE_REQUEST = 'POST_CHEESE_REQUEST';
const postCheeseRequest = () => ({
  type: POST_CHEESE_REQUEST
});

export const POST_CHEESE_SUCCESS = 'POST_CHEESE_SUCCESS';
const postCheeseSuccess = (cheese) => ({
  type: POST_CHEESE_SUCCESS,
  cheese
});

export const POST_CHEESE_ERROR = 'POST_CHEESE_ERROR';
const postCheesesError = (message) => ({
  type: POST_CHEESE_ERROR,
});

export const postCheese = (inputBody) => {
  return (dispatch) => {
    dispatch(postCheeseRequest())
    console.log('input valu' + inputBody.value)
    setTimeout(() => {
      fetch('/api/addcheeses', {
        method: 'POST',
        body: JSON.stringify({test: inputBody.value}),
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(cheeses => dispatch(postCheeseSuccess(inputBody.value)))
      .catch(err => dispatch(postCheesesError(err.message)))
    }, 2000)
  }
}
