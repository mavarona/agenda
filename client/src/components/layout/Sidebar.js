import React from 'react'
import NewProject from '../projects/NewProject';
import ListProject from '../projects/ListProject';

const Sidebar = () => {
    return(
        <aside>
            <h1>Tu<span> Agenda</span></h1>
            <NewProject />
            <div className="proyectos">
                <h2>Proyecto</h2>
                <ListProject />
            </div>
        </aside>
    );
}

export default Sidebar;