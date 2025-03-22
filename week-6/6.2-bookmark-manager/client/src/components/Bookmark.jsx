import { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Bookmark(){
    const [bookmarks, setBookmarks] = useState([]);
    const navigate = useNavigate();
    async function loadBookmarks(){
        const response = await axios.get('http://localhost:3000/bookmark/getAll',{
            headers: {
                token: localStorage.getItem("token")
            }
        })
        if(response.data.bookmarks){
            console.log(response.data.bookmarks);
            setBookmarks(response.data.bookmarks);
        }
    }
    
    useEffect(()=>{
        // load bookmarks on component mount
        console.log("Inside use Effect");
        loadBookmarks();
    },[])

    
    console.log("This are the bookmarks: ", bookmarks);
    const urlRef = useRef();
    const catRef = useRef();

    async function addBookmark(){
        const url = urlRef.current.value;
        const category = catRef.current.value;

        console.log("url: ", url);
        console.log("category: ",category);

        const response = await axios.post('http://localhost:3000/bookmark/add', {
            url: url,
            category: category
        }, {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        console.log(response);

        setBookmarks([...bookmarks, response.data.bookmark]);
    }
    function handleLogout(){
        localStorage.removeItem("token");
        navigate('/signin');
    }

    return <div>
        <div className="container">
            <div className="inputs">
                <h5>URL: </h5>
                <input ref={urlRef} type="text" placeholder="Enter bookmark url"></input>
                <h5>Category: </h5>
                <input ref={catRef} type="text" placeholder="Enter bookmark category"></input>
            </div>
            <div>
                <br></br>
                <button onClick={addBookmark}>Add</button>
                <div>
                    {bookmarks.map(bookmark=>{
                        return <div key={bookmark._id}>
                            <div>{bookmark.url}- ({bookmark.category})</div>
                            <button onClick={async() => {
                                const response = await axios.delete(`http://localhost:3000/bookmark/delete/${bookmark._id}`,{
                                    headers: {
                                        token :localStorage.getItem("token")
                                    }
                                })
                                loadBookmarks();
                                console.log(response.data);
                            }}>Delete</button>
                        </div>
                    })}
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div> 
        </div>
    </div>
}


export default Bookmark;