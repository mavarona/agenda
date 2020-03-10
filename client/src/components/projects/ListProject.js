import React, { useContext, useEffect } from 'react'
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProject = () => {

    const dataProjectContext = useContext(projectContext);
    const { message, projects, getProjects} = dataProjectContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert} = alertContext;

    useEffect(()=>{
        if(message){
            showAlert(message.msg, message.category);
        }
        getProjects();
    }, [message]);

    if(projects.length === 0) return <p>Crea tu primer proyecto</p>;

    return (
       <ul className="listado-proyectos">
           {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
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