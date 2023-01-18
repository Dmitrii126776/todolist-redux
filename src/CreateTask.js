import React, {useState} from 'react';
import {connect} from "react-redux";

const CreateTask = (props) => {

    const [input, setInput] = useState('')

    const CreateTask = () => {
        props.addTask(input);
        setInput('');
    }
    return (
        <div>
            <input value={input} onChange={e => setInput(e.target.value)}
                   type='text' placeholder='add new task ...'/>
            <button onClick={CreateTask} disabled={input === ''}>Add Task</button>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    addTask: (input) => dispatch({type: 'ADD_NEW_TASK', payload: input})
})
export default connect(null, mapDispatchToProps)(CreateTask);
