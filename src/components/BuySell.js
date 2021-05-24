import { useState, useEffect } from 'react';
import axios from 'axios';

const BuySell = () => {

    const [buySellPosts, setBuySellPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/buysell", {
            headers: {
                Authorization: localStorage.getItem("myJWTToken")
            }
        })
            .then(APIResponse => {
                console.log(APIResponse.data.buySell);
                if (APIResponse.data.buySell) {
                    setBuySellPosts(APIResponse.data.buySell)
                } else {
                    window.alert("Not Logged In");
                }
            })
    }, [])


    return (
        <div>
            {/*<button type="button" onClick={getAllPosts}>GET POSTS</button>*/}
            <div>
                {buySellPosts.map((singlePost) => {
                    return (
                        <p>{singlePost.PostTitle}</p>
                    )
                })}
            </div>

        </div>

    )
};



export default BuySell;