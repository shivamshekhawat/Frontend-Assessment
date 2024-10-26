import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/login`, { email, password });
            setUser(response.data.user);
            localStorage.setItem("user", JSON.stringify(response.data.user));
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
