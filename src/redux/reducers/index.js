import { combineReducers } from 'redux'
import TabBottomReducer from './TabBottomReducer'
import GlobalReducer from './GlobalReducer'
import UsersReducer from './UsersReducer'

const reducer = combineReducers({
    GlobalReducer:GlobalReducer,
    UsersReducer:UsersReducer,
    TabBottomReducer:TabBottomReducer,
})

export default reducer
