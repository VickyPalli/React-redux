import { combineReducers } from "redux";
import { createStore } from "redux";
import {setdatareducer , seleteddatareducer} from "../Redux/Reducers/Reducers"
const reducers = combineReducers({
   alldata : setdatareducer,
   targetitem : seleteddatareducer
})


const store = createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;