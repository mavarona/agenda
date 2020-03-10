import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListTask = () => {
    const dataProjectContext = useContext(projectContext);
    const { project, deleteProject } = dataProjectContext;

    const dataTaskContext = useContext(taskContext);
    const { tasksProject } = dataTaskContext;

    if(!project) return <h2>No se ha seleccionado ningún proyecto</h2>

    const [currentProject] = project;

    const onClickDelete = () => {
        deleteProject(currentProject._id);
    }

    return(
        <Fragment>
            <h2>Proyecto: {currentProject.name}</h2>
            <ul className="listado-tareas">
                {tasksProject.length === 0
                    ? (<li className="tarea">No hay tareas</li>)
                    : 
                    <TransitionGroup>
                        {                    
                        tasksProject.map(task => (
                            <CSSTransition
                                key={task.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Task 
                                    task={task}
                                >
                                </Task>
                            </CSSTransition>
                        ))
                        }
                    </TransitionGroup> 
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