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
            {/*<button type="button" onClick={getAllPost}>GET POSTS</button>*/}
            <div>
                {buySellPosts.map((singlePost) => {
                    return (
                        <p>{singlePost.PostTitle}</p>
                    )
                })}
                <div>

                    <input type="text" placeholder="Enter Buy" name="buy" onChange={evt => setBuySellPosts(evt.target.value)}></input>
                    <button type="submit">Submit</button>

                </div >
            </div>

        </div>

    )
};



export default BuySell;