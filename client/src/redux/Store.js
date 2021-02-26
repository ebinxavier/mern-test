import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import loadingReducer from './reducers/loadingReducer'
import MessageReducer from './reducers/messageReducer'
import CategoryReducer from './reducers/categoryReducer'
import ProductReducer from "./reducers/productReducer"
const reducer = combineReducers({
    loading: loadingReducer,
    messages: MessageReducer,
    categories: CategoryReducer,
    products: ProductReducer
})

const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store