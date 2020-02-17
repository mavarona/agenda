import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                formNewProject: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                formNewProject: false
            }
        default:
            return state;
    }
}