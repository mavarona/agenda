import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Signup = () => {

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { registerUser } = authContext;

    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const { name, email, password, confirm } = user;

    const onChangeSignup = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitSignup = e => {
        e.preventDefault();
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === ''){
            showAlert('Todos los campos son obligatorios','alerta-error');
        }
        if(password.length < 6){
            showAlert('La contraseña debe tener al menos 6 caracteres','alerta-error');
        }
        if(password !== confirm){
            showAlert('Las contraseñas no son iguales','alerta-error');
        }
        registerUser({
            name,
            email,
            password
        })
    }

    return (
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
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
                            id="confirm"
                            name="confirm"
                            placeholder="Repite la contraseña"
                            value={confirm}
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