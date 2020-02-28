import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const ListTask = () => {
    const dataProjectContext = useContext(projectContext);
    const { project, deleteProject } = dataProjectContext;

    const dataTaskContext = useContext(taskContext);
    const { tasksProject } = dataTaskContext;

    if(!project) return <h2>No se ha seleccionado ningún proyecto</h2>

    const [currentProject] = project;

    const onClickDelete = () => {
        deleteProject(currentProject.id);
    }

    return(
        <Fragment>
            <h2>Proyecto: {currentProject.name}</h2>
            <ul className="listado-tareas">
                {tasksProject.length === 0
                    ? (<li className="tarea">No hay tareas</li>)
                    : tasksProject.map(task => (
                        <Task 
                            key={task.id}
                            task={task}
                        >
                        </Task>
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickDelete}
            >
                Elminar Proyecto &times;
            </button>
        </Fragment>
    );
}

export default ListTask;