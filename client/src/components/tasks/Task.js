import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {

    const dataProjectContext = useContext(projectContext);
    const { project } = dataProjectContext;

    const dataTaskContext = useContext(taskContext);
    const { deleteTask, getTasks } = dataTaskContext;

    const [currentProject] =  project;

    const taskDelete = id => {
        deleteTask(id);
        getTasks(currentProject.id);
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
                    >
                        Completo
                    </button>
                )
                :(
                    <button
                        type="button"
                        className="incompleto"
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
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => taskDelete(task.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
}

export default Task;