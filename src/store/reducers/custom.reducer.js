import {LOG_IN} from "../constants/constants.js";

const initialState={
    loggedIn:false
}
const customReducer = function (state=initialState,action){
    Object.freeze(state);
    if(action.type==LOG_IN){

        return {
            ...state,
            loggedIn: true
        }
    }
    else{
        return state;
    }
}


export default customReducer;