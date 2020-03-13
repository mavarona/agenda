import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    CHANGE_STATE_TASK,
    CURRENT_TASK,
    EDIT_TASK
} from '../../types';
import clientAxios from '../../config/axios';

const TaskState = props => {
    const initialState = {
        tasksProject: [],
        errorTask: false,
        taskSelected: null
    }
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    const addTask = async task => {
        try {
            const response = await clientAxios.post('/api/tasks', task);
            dispatch({
                type: ADD_TASK,
                payload: task
            })
        } catch (err) {
            console.log(err);
        }
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

    const saveCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    const editTask = task => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        });
    }

    return(
        <TaskContext.Provider
            value={{
                tasksProject: state.tasksProject,
                errorTask: state.errorTask,
                taskSelected: state.taskSelected,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeStateTask,
                saveCurrentTask,
                editTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;