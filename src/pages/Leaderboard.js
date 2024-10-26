import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/v1/get-users`);
            setUsers(response.data.users.sort((a, b) => b.points - a.points));
        };
        fetchUsers();
    }, []);

    const showHistory = async (userId) => {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/v1/your-history`, { userId });
        setHistory(response.data.history);
        setSelectedUser(userId);
    };

    return (
        <div>
            {users.map(user => (
                <div key={user.id} onClick={() => showHistory(user.id)} className="cursor-pointer">
                    {user.name} - Points: {user.points}
                </div>
            ))}
            {selectedUser && (
                <div className="modal">
                    <h2>History for {selectedUser}</h2>
                    {history.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                    <button onClick={() => setSelectedUser(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Leaderboard;
