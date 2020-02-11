import React, { Fragment, useState } from 'react'

const NewProject = () => {

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
    };

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
            </button>
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProject}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nuevo Proyecto"
                    name="nombre"
                    value={name}
                    onChange={onChangeProject}
                />
                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />
            </form>
        </Fragment>
    );
}

export default NewProject;