import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK
} from '../../types'

const TaskState = props => {
    const initialState = {
        tasks: [
            {name:'Inscribirse', completed: true, projectId: 3},
            {name:'Reservar vuelos', completed: true, projectId: 3},
            {name:'Alquilar apartamento', completed: false, projectId: 3},
            {name:'Comprar frontal', completed: false, projectId: 3},
            {name: 'Sacar certificado médico', completed:true, projectId: 3},
            {name:'Inscribirse', completed: true, projectId: 1},
            {name:'Reservar en casa Ángel', completed: false, projectId: 1},
            {name:'Inscribirse', completed: true, projectId: 2},
            {name:'Reservar Aparta hotel', completed: false, projectId: 2},
            {name:'Comprar billetes a Tenerife', completed: false, projectId: 2},
            {name:'Comprar billetes binter a la palma', completed: false, projectId: 2}
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

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksProject: state.tasksProject,
                errorTask: state.errorTask,
                getTasks,
                addTask,
                validateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;