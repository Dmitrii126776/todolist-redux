import {v4 as uuidv4} from 'uuid';

const initialState = {
    todolist: [
        {id: uuidv4(), title: 'Learn Redux', done: true},
        {id: uuidv4(), title: 'Research React', done: false},
        {id: uuidv4(), title: 'Improve HTML', done: false},
    ],
    appHeader: 'Todo List',
    version: '1.2.3',
    menu: ['Home', 'Todo List', 'Contacts', 'Settings', 'About'],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_TASK':
            return {
                ...state,
                todolist: [...state.todolist, {
                    id: uuidv4(),
                    title: action.payload,
                    done: false,
                }]
            };
        case 'DELETE_TASK':
            const newList = state.todolist.filter(el => el.id !== action.payload);
            return {
                ...state,
                todolist: newList,
            }

        default:
            return state;
    }
}

export default reducer;
