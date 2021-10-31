import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Todos.css';

function Todos(){
    const [Todos,setTodos]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            console.log(res.data);
            setTodos(res.data);
        })
    },[])
    console.log ('Todos:' , Todos)
     let rows = Todos.map(el=> {
         return (
         
        <tr>
         <td>{el.userId}</td>
         <td>{el.id}</td>
        <td>{el.title}</td>
        <td>{el.completed}</td>
           </tr>
         )
         })  
    return(
        <div><h1>Todos</h1>
        <table>
            <thead>
                <th> UserId</th>
                <th> Id</th>
                <th> Title</th>
                <th> Completed</th>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        </div>
    )
}
export default Todos;