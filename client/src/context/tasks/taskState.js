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

    const getTasks = async projectId => {
        try {
            const response = await clientAxios.get('/api/tasks', { params: {projectId} });
            dispatch({
                type: TASKS_PROJECT,
                payload: response.data || []
            });
        } catch (err) {
            console.log(err);
        }
    }

    const addTask = async task => {
        try {
            await clientAxios.post(`/api/tasks`, task);
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

    const deleteTask = async (id, projectId) => {
        try {
            await clientAxios.delete(`/api/tasks/${id}`, { params: { projectId }});
            dispatch({
                type: DELETE_TASK,
                payload: id        
            })
        } catch (err) {
            console.log(err);
        }
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