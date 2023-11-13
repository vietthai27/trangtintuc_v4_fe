import { combineReducers } from 'redux'
import baiBaoReducer from './BaiBaoReducer'
import userReducer from './UserReducer'
import menuReducer from './MenuReducer'

const rootReducer = combineReducers({
    baiBaoReducer,userReducer,menuReducer
})

export default rootReducer