import React, {useState} from 'react';
import axios from 'axios';
const AddTodo =  () => {
    const [text, setText] = useState('');

    const addTodo = async () => {
        await axios.post('http://localhost:7000/api/addtodo', {text});
        setText('');
    };
    return (
        <div>
            <h2>Add Todo</h2>
            <input type="text" value = {text} onChange= {(e) => setText(e.target.value)} />
            <button onClick = {addTodo}>Add</button>
        </div>
    );
};

export default AddTodo;