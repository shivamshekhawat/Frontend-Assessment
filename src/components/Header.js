import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-2xl">Nexorand</h1>
            <nav>
                <Link to="/home" className="mr-4">Home</Link>
                <Link to="/leaderboard" className="mr-4">Leaderboard</Link>
                {user ? (
                    <div className="relative inline-block">
                        <button className="flex items-center">
                            <span className="mr-2">{user.name}</span>
                            <span className="text-sm">{user.points}</span>
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                            <p className="p-2">{user.email}</p>
                            <button onClick={logout} className="w-full text-left p-2 hover:bg-gray-200">Logout</button>
                        </div>
                    </div>
                ) : (
                    <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
