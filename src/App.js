import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Leaderboard from './pages/Leaderboard';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                {/* Render pages based on route or conditionally */}
                <Home />
                <Leaderboard />
                {/* Add routing logic as necessary */}
            </div>
        </AuthProvider>
    );
}

export default App;
