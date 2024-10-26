import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/register`, formData);
            alert("Registration successful!");
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input type="email" name="email" onChange={handleChange} required placeholder="Email" className="mb-2" />
            <input type="password" name="password" onChange={handleChange} required placeholder="Password" className="mb-2" />
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    );
};

export default Register;
