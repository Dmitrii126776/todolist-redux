import React from 'react';
import {connect} from "react-redux";
import Task from "./Task";
import CreateTask from "./CreateTask";

const TaskList = (props) => {
    const {tasks} = props
    return (
        <div>
            <div className="nav-menu">
                <CreateTask/>
            </div>
            <ul className='list-group' style={{listStyleType: 'none'}}>
                {tasks.map((el, i) => (<Task
                    tasks={tasks}
                    task={el}
                    key={el.id}
                    index={i}
                />))}
            </ul>
        </div>
    );
};
const mapStateToProps = state => ({
    tasks: state.todolist,
})
export default connect(mapStateToProps)(TaskList);
