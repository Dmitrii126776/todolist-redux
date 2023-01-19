import React, {useState} from 'react';
import {connect} from "react-redux";

const CreateTask = (props) => {

    const [input, setInput] = useState('')

    const CreateTask = () => {
        props.addTask(input);
        setInput('');
    }
    return (
        <div style={{
            display: 'flex', alignItems: "center",
            justifyContent: "center"
        }}>
            <button className='input-button btn btn-outline-secondary'
                    onClick={CreateTask} disabled={input === ''}>Click
            </button>
            <input className='form-control'
                   value={input} onChange={e => setInput(e.target.value)}
                   type='text' placeholder='add new task ...'/>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    addTask: (input) => dispatch({type: 'ADD_NEW_TASK', payload: input})
})
export default connect(null, mapDispatchToProps)(CreateTask);
