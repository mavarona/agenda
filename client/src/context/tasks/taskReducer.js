import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    CHANGE_STATE_TASK,
    CURRENT_TASK,
    EDIT_TASK
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksProject: state.tasksProject.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasksProject: [action.payload, ...state.tasksProject],
                errorTask: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                errorTask: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksProject: state.tasksProject.filter(task => task.id !== action.payload)
            }
        case CHANGE_STATE_TASK:
        case EDIT_TASK:
            return {
                ...state,
                tasksProject: state.tasksProject.map(task => task.id === action.payload.id ? action.payload : task),
                taskSelected: null
            }
        case CURRENT_TASK:
            return {
                ...state,
                taskSelected: action.payload
            }
        default:
            return state;
    }
}