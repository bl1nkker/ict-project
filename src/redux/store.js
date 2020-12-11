import {createStore, combineReducers, compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { contentReducer } from './reducers/contentReducer'

const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    content: contentReducer,}),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;