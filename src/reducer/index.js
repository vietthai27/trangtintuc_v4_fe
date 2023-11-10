import { combineReducers } from 'redux'
import baiBaoReducer from './BaiBaoReducer'
import userReducer from './UserReducer'

const rootReducer = combineReducers({
    baiBaoReducer,userReducer
})

export default rootReducer