import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {

    const dataProjectContext = useContext(projectContext);
    const { project } = dataProjectContext;

    const dataTaskContext = useContext(taskContext);
    const { deleteTask, getTasks, editTask, saveCurrentTask} = dataTaskContext;

    const [currentProject] =  project;

    const taskDelete = id => {
        deleteTask(id, currentProject._id);
        getTasks(currentProject._id);
    }

    const changeState = task => {
        task.completed = !task.completed;
        editTask(task);
    }

    const selectTask = task => {
        saveCurrentTask(task);
    }

    return(
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.completed
                ? (
                    <button
                        type="button"
                        className="completo"
                        onClick={() => changeState(task)}
                    >
                        Completo
                    </button>
                )
                :(
                    <button
                        type="button"
                        className="incompleto"
                        onClick={() => changeState(task)}
                    >
                        Incompleto
                    </button>
                )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => selectTask(task)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => taskDelete(task._id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
}

export default Task;