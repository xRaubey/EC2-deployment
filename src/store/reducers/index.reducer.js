import customReducer from "./custom.reducer.js";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    custom: customReducer
})

export default rootReducer