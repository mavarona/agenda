import React, { useContext, useEffect } from 'react'
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProject = () => {

    const dataProjectContext = useContext(projectContext);
    const { projects, getProjects} = dataProjectContext;

    useEffect(()=>{
        getProjects();
    }, []);

    if(projects.length === 0) return <p>Crea tu primer proyecto</p>;

    return (
       <ul className="listado-proyectos">
           {projects.map(project =>(
               <Project 
                key={project.id}
                project={project}
               />
           ))}
       </ul>
    )
}

export default ListProject;