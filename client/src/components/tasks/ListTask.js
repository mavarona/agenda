import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const ListTask = () => {
    const dataProjectContext = useContext(projectContext);
    const { project } = dataProjectContext;

    if(!project) return <h2>No se ha seleccionado ningún proyecto</h2>

    const [currentProject] = project;

    const tasks = [
        {name:'Inscribirse', completed: true},
        {name:'Reservar vuelos', completed: true},
        {name:'Alquilar apartamento', completed: false},
        {name:'Comprar frontal', completed: false},
        {name: 'Sacar certificado médico', completed:true}
    ];
    return(
        <Fragment>
            <h2>Proyecto: {currentProject.name}</h2>
            <ul className="listado-tareas">
                {tasks.length === 0
                    ? (<li className="tarea">No hay tareas</li>)
                    : tasks.map(task => (
                        <Task 
                            task={task}
                        >
                        </Task>
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >
                Elminar Proyecto &times;
            </button>
        </Fragment>
    );
}

export default ListTask;