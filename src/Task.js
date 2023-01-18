import React from 'react';
import {connect} from "react-redux";

const Task = (props) => {
    const {task} = props
    return (
        <div>
            <li>
                {task.title}
                <button onClick={() => props.deleteTask(task.id)}>Delete</button>
            </li>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id})
})
export default connect(null, mapDispatchToProps)(Task);
