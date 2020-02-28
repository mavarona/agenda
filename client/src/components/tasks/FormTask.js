import React, { useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {

    const dataProjectContext = useContext(projectContext);
    const { project } = dataProjectContext;


    const dataTaskContext = useContext(taskContext);
    const { addTask, validateTask, errorTask, getTasks } = dataTaskContext;

    const [task, saveTask] = useState({
        name: ''
    });

    const { name } = task;

    if(!project) return null

    const [currentProject] = project;

    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        if(name.trim() === ''){
            validateTask();
            return;
        }
        task.projectId = currentProject.id;
        task.completed = false;
        addTask(task);
        getTasks(currentProject.id);
        saveTask({
            name: ''
        });
    }

    return(
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea..."
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
            {errorTask ? <p className="mensaje error">Nombre de tarea obligatorio</p> : null}
        </div>
    );
}

export default FormTask;