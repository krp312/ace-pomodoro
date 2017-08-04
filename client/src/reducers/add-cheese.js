import {POST_CHEESE_REQUEST,
POST_CHEESE_SUCCESS,
POST_CHEESE_ERROR} from '../actions/add-cheese'


const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

const cheeses = (state = initialState, action) => {
  if (action.type === POST_CHEESE_REQUEST) {
    return ({
      ...state,
      loading: true
    })
  }
  else if (action.type === POST_CHEESE_SUCCESS) {
    return ({
      cheeses: action.cheeses,
      loading: false,
      error: null
    })
  }
  else if (action.type === POST_CHEESE_ERROR) {
    return ({
      loading: false,
      error: action.message
    })
  }
  return state
}

export default cheeses