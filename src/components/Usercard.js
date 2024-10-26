import React from 'react';

const UserCard = ({ friend, onClaimPoints }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl">{friend.name}</h3>
            <p>Points: {friend.points}</p>
            <button onClick={() => onClaimPoints(friend.id)} className="bg-blue-500 text-white p-2 rounded">Claim Points</button>
        </div>
    );
};

export default UserCard;
