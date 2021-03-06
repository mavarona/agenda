import React, { Fragment, useState, useContext } from 'react'
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    const dataProjectContext = useContext(projectContext);
    const { formnewproject, errorform ,showForm, addProject, showError } = dataProjectContext;

    const [project, saveProject] = useState({
        name: ''
    });

    const { name } = project;

    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        })
    };

    const onSubmitProject = e => {
        e.preventDefault();
        if(name === ''){
            showError();
            return;
        }
        addProject(project);
    };

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => showForm()}
            >
                Nuevo Proyecto
            </button>

            {
                formnewproject ?
                (
                    <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProject}
                    >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nuevo Proyecto"
                        name="name"
                        value={name}
                        onChange={onChangeProject}
                    />
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />
                </form>
                ):null
            
            }

            {errorform ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}

        </Fragment>
    );
}

export default NewProject;