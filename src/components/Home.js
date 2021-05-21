import { useState } from 'react';
import axios from 'axios'

const Home = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function submitForm(evt) {
        evt.preventDefault();
        console.log("submit form is called");
        let loginInfo = {
            username,
            password
        }
        console.log(loginInfo);

        axios.post("http://localhost:3000/Home", submitForm)
            .then(APIResponse => {
                console.log(APIResponse.data);
                localStorage.setItem("myJWTToken", APIResponse.data)
            }
            )



    }


    return (
        <div>
            <form onSubmit={evt => submitForm(evt)}>
                {/* <label for="username"></label> */}
                <input type="text" placeholder="Enter Username" name="username" onChange={evt => setUsername(evt.target.value)}></input>

                {/* <label for="password"></label> */}
                <input type="text" placeholder="Enter Password" name="password" onChange={evt => setPassword(evt.target.value)}></input>
                <button type="submit">Login!</button>
            </form>
        </div >
    )
}

export default Home;