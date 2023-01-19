import {v4 as uuidv4} from 'uuid';

const initialState = {
    todolist: [
        {id: uuidv4(), title: 'Learn Redux', done: false},
        {id: uuidv4(), title: 'Learn React', done: false},
        {id: uuidv4(), title: 'Learn HTML', done: false},
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
        case 'DOWN_TASK':
            const indexDown = state.todolist.findIndex(el => el.id === action.payload)
            return {
                ...state,
                todolist: [
                    ...state.todolist.slice(0, indexDown),
                    state.todolist[indexDown + 1],
                    state.todolist[indexDown],
                    ...state.todolist.slice(indexDown + 2)
                ]
            };

        case 'UP_TASK':
            if (state.todolist.findIndex(el => el.id === action.payload) > 0) {
                const indexUp = state.todolist.findIndex(el => el.id === action.payload)
                return {
                    ...state,
                    todolist: [
                        ...state.todolist.slice(0, indexUp - 1),
                        state.todolist[indexUp],
                        state.todolist[indexUp - 1],
                        ...state.todolist.slice(indexUp + 1)
                    ]
                };
            } else return state;

        default:
            return state;
    }
}

export default reducer;
