import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({project}) => {

    const dataProjectContext = useContext(projectContext);
    const { currentProject } = dataProjectContext;

    const dataTaskContext = useContext(taskContext);
    const { getTasks } = dataTaskContext;

    const selectProject = id =>{
        currentProject(id);
        getTasks(id);
    }

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