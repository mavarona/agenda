import React, { useReducer } from 'react';
import uuid from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORM_PROJECT, 
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM 
} 
from '../../types';

const ProjectState = props => {
    const initialState = {
        projects : [],
        formnewproject: false,
        errorform: false
    }

    const projects = [
        {id:1, name: 'Marathon Alpina'},
        {id:2, name: 'Viaje a la palma'},
        {id:3, name: 'Viaje a Chamonix'}
    ];

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        });
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    const addProject = project =>{
        project.id = uuid.v4();
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    const showError = () =>{
        dispatch({
            type: VALIDATE_FORM
        })
    }

    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                formnewproject: state.formnewproject,
                errorform: state.errorform,
                showForm,
                getProjects,
                addProject,
                showError
            }}
        >
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState;