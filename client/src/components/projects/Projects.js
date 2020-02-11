import React from 'react'

import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';

const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Navbar />
                <main>
                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
    )
}

export default Projects;