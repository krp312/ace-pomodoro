import {combineReducers} from 'redux'
import cheeses from './cheese'
import addCheese from './add-cheese'

const rootReducer = combineReducers({
  cheeses,
  addCheese
})

export default rootReducer
