import React from 'react'
import Project from './Project';

const ListProject = () => {

    const projects = [
        {name: 'Marathon Alpina'},
        {name: 'Viaje a la palma'},
        {name: 'Viaje a Chamonix'}
    ]

    return (
       <ul className="listado-proyectos">
           {projects.map(project =>(
               <Project 
                project={project}
               />
           ))}
       </ul>
    )
}

export default ListProject;