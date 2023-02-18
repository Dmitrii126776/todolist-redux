import {v4 as uuidv4} from 'uuid';

const initialState = {
    todolist: [
        {id: uuidv4(), title: 'Improve Redux', done: false},
        {id: uuidv4(), title: 'Learn React', done: false},
        {id: uuidv4(), title: 'Improve HTML', done: false},
        {id: uuidv4(), title: 'Learn Express', done: false},
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
            };
        case 'DONE_TASK':
            const doneList = state.todolist.map(el => el.id === action.payload ? {...el, done: !el.done} : el)
            return {
                ...state,
                todolist: doneList,
            };
        case 'MOVE_TASK':
            const currentIndex = state.todolist.findIndex(el => el.id === action.payload.id)
            const currentList = [...state.todolist]
            const value = action.payload.direction === 'up' ? -1 : 1;
            [currentList[currentIndex], currentList[currentIndex + value]] = [currentList[currentIndex + value], currentList[currentIndex]]
            return {
                ...state,
                todolist: currentList,
            }

        case 'EDIT_TASK':
            const editList = state.todolist.map(el => el.id === action.payload.id ? {
                ...el,
                title: action.payload.inputValue
            } : el)
            return {
                ...state,
                todolist: editList,
            };

        default:
            return state;
    }
}

export default reducer;
