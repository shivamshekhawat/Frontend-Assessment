import React from 'react';

const Modal = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl mb-4">{user.name}'s Points History</h2>
                <ul>
                    {user.history.map((item, index) => (
                        <li key={index} className="flex justify-between">
                            <span>{item.date}</span>
                            <span>{item.points}</span>
                        </li>
                    ))}
                </ul>
                <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">Close</button>
            </div>
        </div>
    );
};

export default Modal;
