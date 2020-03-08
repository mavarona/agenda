import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, login  } = authContext;

    useEffect(() => {
        if(authenticated){
            props.history.push('/projects');
        }
        if(message){
            showAlert(message.msg, message.category);
        }
    }, [message, authenticated, props.history]);

    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChangeLogin = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitLogin = e => {
        e.preventDefault();
        if(email.trim() === '' || password.trim() === ''){
            showAlert('Todos los campos son obligatorios','alerta-error');
        }
        login({email, password});
    }

    return (
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Acceso a mi agenda</h1>
                <form
                    onSubmit={onSubmitLogin}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Correo Electrónico"
                            value={email}
                            onChange={onChangeLogin}
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
                            onChange={onChangeLogin}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block" 
                            value="Iniciar Sesión"    
                        />
                    </div>
                </form>
                <Link to={'/signup'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    )
}

export default Login;