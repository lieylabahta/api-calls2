import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Posts.css';

function Posts(){
    const [Posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data);
            setPosts(res.data);
        })
    }, [])
    console.log ('posts:' , Posts)
     let rows= Posts.map(el=> {
         return(
         
        <tr>
         <td>{el.userId}</td>
         <td>{el.id}</td>
        <td>{el.title}</td>
        <td>{el.body}</td>
           </tr>
         )
         
} )
console.log("rows:", rows)
    return(
        <div><h1>Posts</h1>
        <table>
            <thead>
                <th> userId</th>
                <th> id</th>
                <th> title</th>
                <th> body</th>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        
        </div>
    )
}
export default Posts;