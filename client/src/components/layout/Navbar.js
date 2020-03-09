import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/authentication/authContext.js';

const Navbar = () => {

    const authContext = useContext(AuthContext);
    const { user, userAuthenticated} = authContext;

    useEffect( () => {
        userAuthenticated();
    }, []);

    return(
        <header className="app-header">
            {user ?
                        <p className="nombre-usuario">Hola <span>Mike</span></p>
            : null}
            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
    );
}

export default Navbar;