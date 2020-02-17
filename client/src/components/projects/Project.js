import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';

const Project = ({project}) => {

    const dataProjectContext = useContext(projectContext);
    const { selectProject } = dataProjectContext;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => selectProject(project.id) }
            >
            {project.name}
            </button>
        </li>
    )
}

export default Project;