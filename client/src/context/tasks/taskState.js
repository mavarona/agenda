import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

const TaskState = props => {
    const initialState = {
        tasks: []
    }
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;