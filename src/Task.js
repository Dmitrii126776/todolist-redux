import React from 'react';
import {connect} from "react-redux";

const Task = (props) => {
    const {task, tasks} = props
    return (
        <div>
            <li className='list-group-item'>
                <span className='input-button'>
                {task.done ? <s>{task.title}</s> : task.title}
                </span>
                {tasks.indexOf(task) === tasks.length - 1 ? null :
                    <button onClick={() => props.downTask(task.id)}
                            className='input-button btn btn-outline-secondary btn-sm'>↓
                    </button>
                }
                <button style={{display: tasks.indexOf(task) === 0 ? 'none' : 'inline-block'}}
                        onClick={() => props.upTask(task.id)}
                        className='input-button btn btn-outline-secondary btn-sm'>↑
                </button>
                <button onClick={() => props.doneTask(task.id)}
                        className='input-button btn btn-outline-secondary btn-sm'>Done
                </button>
                <button className='input-button btn btn-outline-secondary btn-sm'
                        onClick={() => props.deleteTask(task.id)}>Delete
                </button>
            </li>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id}),
    doneTask: (id) => dispatch({type: 'DONE_TASK', payload: id}),
    downTask: (id) => dispatch({type: 'DOWN_TASK', payload: id}),
    upTask: (id) => dispatch({type: 'UP_TASK', payload: id}),
})
export default connect(null, mapDispatchToProps)(Task);
