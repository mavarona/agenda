import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    SELECT_PROJECT,
    DELETE_PROJECT
}
from '../../types';

import clientAxios from '../../config/axios';

const ProjectState = props => {
    const initialState = {
        projects: [],
        formnewproject: false,
        errorform: false,
        project: null
    }

    const projects = [
        { id: 1, name: 'Marathon Alpina' },
        { id: 2, name: 'Viaje a la palma' },
        { id: 3, name: 'Viaje a Chamonix' }
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

    const addProject = async project => {
        try {
            const response = await clientAxios.post('/api/projects', project);
            dispatch({
                type: ADD_PROJECT,
                payload: response.data
            })
        } catch (err) {
            console.log(err);
        }
    }

    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    const currentProject = projectId => {
        dispatch({
            type: SELECT_PROJECT,
            payload: projectId
        })
    }

    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    return ( <
        projectContext.Provider value = {
            {
                projects: state.projects,
                formnewproject: state.formnewproject,
                errorform: state.errorform,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                currentProject,
                deleteProject
            }
        } > { props.children } <
        /projectContext.Provider>
    )

}

export default ProjectState;