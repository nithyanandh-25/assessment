import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get('http://localhost:7000/api/todolist');
            setTodos(response.data);
        };
        fetchTodos();
    });
    return (
        <div>
            <h2>ToDo List</h2>
            <ul>
                {todos.map(todo =>(
                    <li key = {todo._id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;