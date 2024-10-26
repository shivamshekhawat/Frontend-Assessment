import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/v1/get-users`);
            setFriends(response.data.users.slice(0, 10));
        };
        fetchFriends();
    }, []);

    const handleClaimPoints = async (id) => {
        await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/user/v1/claim-points/${id}`);
        setFriends((prev) => prev.map(friend => friend.id === id ? { ...friend, points: friend.points + 1 } : friend));
    };

    return (
        <div>
            {friends.map(friend => (
                <div key={friend.id} onClick={() => handleClaimPoints(friend.id)} className="cursor-pointer">
                    {friend.name} - Points: {friend.points}
                </div>
            ))}
        </div>
    );
};

export default Home;
