import { combineReducers } from "redux";
import { createStore , applyMiddleware , compose} from "redux";
import {setdatareducer , seleteddatareducer} from "../Redux/Reducers/Reducers"
import thunk from "redux-thunk";
//Github redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
   alldata : setdatareducer,
   targetitem : seleteddatareducer
})


const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
export default store;