import { useState } from 'react';
import axios from 'axios';



const BuySell = () => {

    const [buySellPosts, setBuySellPosts] = useState([]);

    function getAllPosts() {
        axios.get("http://localhost:3000/BuySell", {
            headers: {
                Authorization: localStorage.getItem("myJWTToken")
            }
        })
            .then(APIResponse => {
                console.log(APIResponse);
            })
    }

    return (
        <button type="button" onClick={buySellPosts}>GET POSTS</button>
    )
};



export default BuySell;