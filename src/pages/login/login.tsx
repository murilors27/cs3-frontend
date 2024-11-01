import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login submitted:', { email, password });
        // Adicionar a lógica de autenticação
        navigate('/home');
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        required 
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
