import React, { useContext, useEffect } from 'react'
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProject = () => {

    const dataProjectContext = useContext(projectContext);
    const { projects, getProjects} = dataProjectContext;

    useEffect(()=>{
        getProjects();
    }, []);

    if(projects.length === 0) return <p>Crea tu primer proyecto</p>;

    return (
       <ul className="listado-proyectos">
           <TransitionGroup>
            {projects.map(project =>(
                <CSSTransition
                    key={project._id}
                    timeout={200}
                    classNames="proyecto"
                >
                    <Project 
                        project={project}
                    />
                </CSSTransition>
            ))}
           </TransitionGroup>
       </ul>
    )
}

export default ListProject;