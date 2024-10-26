import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData.email, formData.password);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input type="email" name="email" onChange={handleChange} required placeholder="Email" className="mb-2" />
            <input type="password" name="password" onChange={handleChange} required placeholder="Password" className="mb-2" />
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
};

export default Login;
