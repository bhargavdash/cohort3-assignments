import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn';
 
import { useRef } from "react"
function SignUp(){
    const userRef = useRef();
    const passRef = useRef();

    async function handleSignUp(){
        const username = userRef.current.value;
        const password = passRef.current.value;
        console.log("username: ", username);
        console.log("password: ", password);

        // send this data to backend and then get response
        // if signin successful , redirect to Bookmark page
    }
    let navigate = useNavigate();
    function navigateToSignIn(){
        // logic to navigate to signin page
        navigate('/signin');
    }

    
    return <div>
        <div>
            <h3>Signup</h3>
            <br></br>
            <h5>username:</h5>
            <input ref={userRef} type="text"></input>
            <h5>password</h5>
            <input ref={passRef} type="password"></input>
            <br></br>
            <br></br>
            <button onClick={handleSignUp}>Submit</button>
        </div>
        <div>
            <h6>Already have an account?</h6>
            <p onClick={navigateToSignIn}>SignIn</p>
        </div>
    </div>
}

export default SignUp