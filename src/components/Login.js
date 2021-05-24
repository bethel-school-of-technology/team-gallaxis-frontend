import { useState } from 'react';
import axios from 'axios'



//const Login = () => {
//   <UserNavBar />
//   const [values, setValues] = useState({
//       username: '',
//       email: '',


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function submitLogin(evt) {
        evt.preventDefault();
        console.log("submit form is called");
        let loginInfo = {
            username,
            password
        }
        console.log(loginInfo);

        axios.post("http://localhost:3000/users/login", loginInfo)
            .then(APIResponse => {
                console.log(APIResponse.data);
                localStorage.setItem("myJWTToken", APIResponse.data)
            })
    }


    return (
        <div>
            <form onSubmit={evt => submitLogin(evt)}>
                <input type="text" placeholder="Enter Username" name="username" onChange={evt => setUsername(evt.target.value)}></input>
                <input type="text" placeholder="Enter Password" name="password" onChange={evt => setPassword(evt.target.value)}></input>
                <button type="submit">Login!</button>
            </form>
        </div >
    )
}

export default Login;