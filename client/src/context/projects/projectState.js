import React, { useReducer } from 'react'

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORM_PROJECT, 
    GET_PROJECTS } 
from '../../types';

const ProjectState = props => {
    const initialState = {
        projects : [],
        formNewProject: false
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

    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                formNewProject: state.formNewProject,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState;