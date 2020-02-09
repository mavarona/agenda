import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { name, email, password, confirmar } = user;

    const onChangeSignup = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitSignup = e => {
        e.preventDefault();
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form
                    onSubmit={onSubmitSignup}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={onChangeSignup}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Correo Electrónico"
                            value={email}
                            onChange={onChangeSignup}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={onChangeSignup}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite la contraseña"
                            value={confirmar}
                            onChange={onChangeSignup}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block" 
                            value="Crear Cuenta"    
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar sesión
                </Link>
            </div>
        </div>
    )
}

export default Signup;