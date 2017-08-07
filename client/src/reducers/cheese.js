import {FETCH_CHEESE_REQUEST,
FETCH_CHEESE_SUCCESS,
FETCH_CHEESE_ERROR} from '../actions/cheese'


const initialState = {
  cheeses: [],
  loading: false,
  error: null
}
// I made an info modal

const cheeses = (state = initialState, action) => {
  if (action.type === FETCH_CHEESE_REQUEST) {
    return ({
      ...state,
      loading: true
    })
  }
  else if (action.type === FETCH_CHEESE_SUCCESS) {
    return ({
      cheeses: action.cheeses,
      loading: false,
      error: null
    })
  }
  else if (action.type === FETCH_CHEESE_ERROR) {
    return ({
      loading: false,
      error: action.message
    })
  }
  return state
}

export default cheeses
