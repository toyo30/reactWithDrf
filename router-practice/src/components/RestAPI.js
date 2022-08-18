import React, {useState, useEffect} from 'react';
import axios from 'axios';


const RestAPI = () => {
    const [text, setText] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const postApi = () => {
        axios.post("http://127.0.0.1:8000/post/", {
            title:'제목',
            content:'내용',
            author:1,
        }).then(function(response) {
            console.log(response);
        }).catch(function(error){
            console.log(error);
        });
    };

    const getApi = () => {
      axios.get("http://127.0.0.1:8000/post/")
        .then(function (response) {
          setText([...response.data]);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };


    useEffect(() => {
    getApi();
    }, []);

     const postItemsList = text.map(({ id, title, content, author }) => (
       <div key={id}>
         {title} {content} {author}
       </div>
     ));


    return (
      <>
        <h1>REST API 연습</h1>
        <div>
          {postItemsList}
          <button onClick={postApi}>Post</button>
          <button onClick={getApi}>Get</button>
        </div>
      </>
    );
}

export default RestAPI;