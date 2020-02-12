import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = () => {
    const tasks = [
        {name:'Inscribirse', completed: true},
        {name:'Reservar vuelos', completed: true},
        {name:'Alquilar apartamento', completed: false},
        {name:'Comprar frontal', completed: false},
        {name: 'Sacar certificado médico', completed:true}
    ];
    return(
        <Fragment>
            <h2>Proyecto: Maratón Alpina</h2>
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