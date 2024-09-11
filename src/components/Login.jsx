import store from "../store/store.js";
import {loginAction} from "../store/actions/custom.actions.js";
import {useSelector,useDispatch} from "react-redux";
export const Login = () => {
    const loggedIn = useSelector((state)=>state.custom.loggedIn);
    const dispatch = useDispatch()
    function loginHandler(){
        dispatch(loginAction);
        console.log(loggedIn)
    }
    return (
        <div>
            Logged In: {loggedIn.toString()}
            <button onClick={loginHandler}>Log In</button>
        </div>
    );
};