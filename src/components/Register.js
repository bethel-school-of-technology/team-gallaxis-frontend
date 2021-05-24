import axios from 'axios';
import { useState } from 'react';



//const Register = () => {
// <UserNavBar />
//  const [values, setValues] = useState({
//       username: '',
//       email: '',

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [neighborhood, setNeighborhood] = useState("");

    function submitForm(evt) {
        evt.preventDefault();
        console.log("submit form is called");
        let loginInfo = {
            username,
            password,
            email,
            neighborhood,
        }

        axios.post("http://localhost:3000/users/signup", loginInfo)
            .then(APIResponse => {
                console.log(APIResponse.data);

            })
    }

    return (
        <div>
            <form onSubmit={evt => submitForm(evt)}>
                {/* <label for="username"></label> */}
                <input type="text" placeholder="Enter Username" name="username" onChange={evt => setUsername(evt.target.value)}></input>

                {/* <label for="password"></label> */}
                <input type="text" placeholder="Enter Password" name="password" onChange={evt => setPassword(evt.target.value)}></input>

                <input type="text" placeholder="Enter Email" name="email" onChange={evt => setEmail(evt.target.value)}></input>

                <input type="text" placeholder="Enter Neighborhood" name="Neighborhood" onChange={evt => setNeighborhood(evt.target.value)}></input>
                <button type="submit">Welcome to NESTLY!</button>
            </form>
        </div >
    )
}

export default Register;