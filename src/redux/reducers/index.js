import { combineReducers } from 'redux'
import userDuck from './userDuck'

const allReducers = combineReducers({
    user: userDuck,
})

export default allReducers
