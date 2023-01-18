import React from 'react';
import {connect} from "react-redux";
import Task from "./Task";
import CreateTask from "./CreateTask";

const TaskList = (props) => {
    const {tasks} = props
    return (
        <div>
            <CreateTask/>
            <ul style={{listStyleType: 'none'}}>
                {tasks.map(el => (<Task
                    task={el}
                    key={el.id}
                />))}
            </ul>
        </div>
    );
};
const mapStateToProps = state => ({
    tasks: state.todolist,
})
export default connect(mapStateToProps)(TaskList);
