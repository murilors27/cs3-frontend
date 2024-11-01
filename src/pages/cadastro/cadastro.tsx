import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastro.css';

const Cadastro: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cep: '',
        rua: '',
        numero: '',
        cidade: '',
        bairro: '',
        estado: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/login');
    };      

    return (
        <div className="cadastro-container">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nome" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Senha" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="input-row">
                    <div className="input-group">
                        <input 
                            type="text" 
                            name="cep" 
                            placeholder="CEP" 
                            value={formData.cep} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="text" 
                            name="rua" 
                            placeholder="Rua" 
                            value={formData.rua} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-group">
                        <input 
                            type="text" 
                            name="numero" 
                            placeholder="Número" 
                            value={formData.numero} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="text" 
                            name="bairro" 
                            placeholder="Bairro" 
                            value={formData.bairro} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-group">
                        <input 
                            type="text" 
                            name="cidade" 
                            placeholder="Cidade" 
                            value={formData.cidade} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="text" 
                            name="estado" 
                            placeholder="Estado" 
                            value={formData.estado} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;