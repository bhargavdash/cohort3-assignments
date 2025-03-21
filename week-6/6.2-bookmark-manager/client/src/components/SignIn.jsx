import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function SignIn(){
    const userRef = useRef();
    const passRef = useRef();

    function handleSignIn(){
        const username = userRef.current.value;
        const password = userRef.current.value;

        console.log(username);
        console.log(password);

        // do backend api call and get response 
        
    }

    const navigate = useNavigate();

    return <div>
        <div>
            <h3>SignIn</h3>
            <br></br>
            <h5>username:</h5>
            <input ref={userRef} type="text"></input>
            <h5>password</h5>
            <input ref={passRef} type="password"></input>
            <br></br>
            <br></br>
            <button onClick={handleSignIn}>Submit</button>
        </div>
        <div>
            <h5>Don't have an account ?</h5>
            <p onClick={() => navigate('/signup')}>SignUp</p>
        </div>
    </div>
}

export default SignIn;