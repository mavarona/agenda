import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    CHANGE_STATE_TASK
} from '../../types'

const TaskState = props => {
    const initialState = {
        tasks: [
            {id:1, name:'Inscribirse', completed: true, projectId: 3},
            {id:2, name:'Reservar vuelos', completed: true, projectId: 3},
            {id:3, name:'Alquilar apartamento', completed: false, projectId: 3},
            {id:4, name:'Comprar frontal', completed: false, projectId: 3},
            {id:5, name: 'Sacar certificado médico', completed:true, projectId: 3},
            {id:6, name:'Inscribirse', completed: true, projectId: 1},
            {id:7, name:'Reservar en casa Ángel', completed: false, projectId: 1},
            {id:8, name:'Inscribirse', completed: true, projectId: 2},
            {id:9, name:'Reservar Aparta hotel', completed: false, projectId: 2},
            {id:10, name:'Comprar billetes a Tenerife', completed: false, projectId: 2},
            {id:11, name:'Comprar billetes binter a la palma', completed: false, projectId: 2}
        ],
        tasksProject: null,
        errorTask: false
    }
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const validateTask = () =>{
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id        
        });
    }

    const changeStateTask = task => {
        dispatch({
            type: CHANGE_STATE_TASK,
            payload: task
        });
    }

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksProject: state.tasksProject,
                errorTask: state.errorTask,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeStateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;