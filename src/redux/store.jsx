import todoReducer from "./reducers/todoReducer"
import {createStore, combineReducers} from "redux"

const rootReducer= combineReducers({todoReducer,})

const store = createStore(rootReducer)

export default store