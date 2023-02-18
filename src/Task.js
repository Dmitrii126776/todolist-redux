import React, {useState} from 'react';
import {connect} from "react-redux";

const Task = (props) => {
    const {task} = props
    const [inputValue, setInputValue] = useState(task.title)
    const [modal, setModal] = useState(false)
    const toggle = () => {
        setModal(!modal)
    }

    const cancelEdit = () => {
        props.editTask(task.id, task.title)
        setInputValue(task.title)
        toggle()
    }

    const saveEditTask = () => {
        props.editTask(task.id, inputValue)
        setInputValue(inputValue)
        toggle()
    }

    return (
        <div>
            <li className='list-group-item form-control'>

                <button onClick={() => props.moveTask(props.task.id)}
                        disabled={props.index === props.taskLength - 1}
                        className='input-button btn btn-outline-secondary btn-sm'>↓
                </button>

                <button disabled={props.index === 0}
                        onClick={() => props.moveTask(props.task.id, 'up')}
                        className='input-button btn btn-outline-secondary btn-sm'>↑
                </button>
                <span className='input-button'>
                {task.done ? <s>{task.title}</s> : task.title}
                </span>
                {!modal &&
                    <>
                        <button onClick={() => props.doneTask(task.id)}
                                className='input-button btn btn-outline-secondary btn-sm'>Done
                        </button>
                        <button className='input-button btn btn-outline-secondary btn-sm'
                                onClick={() => props.deleteTask(task.id)}>Delete
                        </button>
                        <button onClick={toggle} className='input-button btn btn-outline-secondary btn-sm'>Edit
                        </button>
                    </>
                }

                {modal &&
                    <>
                        <button onClick={saveEditTask}
                                className="input-button btn btn-outline-secondary btn-sm" type="button">Save
                        </button>
                        <button
                            onClick={cancelEdit} className="input-button btn btn-outline-secondary btn-sm"
                            type="button">Cancel
                        </button>
                        <input type="text" className="form-control input-button"
                               value={inputValue} onChange={e => setInputValue(e.target.value)}
                        />
                    </>
                }
            </li>
        </div>
    );
};

const mapStateToProps = (state) => ({
    taskLength: state.todolist.length
})
const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch({type: 'DELETE_TASK', payload: id}),
    doneTask: (id) => dispatch({type: 'DONE_TASK', payload: id}),
    editTask: (id, inputValue) => dispatch({type: 'EDIT_TASK', payload: {id, inputValue}}),
    moveTask: (id, direction) => dispatch({type: 'MOVE_TASK', payload: {id, direction}}),
})
export default connect(mapStateToProps, mapDispatchToProps)(Task);
