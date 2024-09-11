import {legacy_createStore as createStore} from 'redux'
import rootReducer from "./reducers/index.reducer.js";
const store = createStore(rootReducer,{custom:{loggedIn:false}})

export default store;

export function createAction(action, payload){
    return {type:action, payload:payload}
}