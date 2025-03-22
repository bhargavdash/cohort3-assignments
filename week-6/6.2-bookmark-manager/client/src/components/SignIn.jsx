import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignIn(){
    const userRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();

    async function handleSignIn(){
        const username = userRef.current.value;
        const password = passRef.current.value;
       

        console.log(username);
        console.log(password);

        const response = await axios.post('http://localhost:3000/user/signin', {
            username: username,
            password: password
        })

        if(response.data.token){
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token);
            navigate('/bookmarks');
        }
        else{
            console.log(response);
        }
        
    }

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