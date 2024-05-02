import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';
import './UsersList.css';

export function UsersList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.entities);
    const loading = useSelector((state) => state.users.loading);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading === 'loading') {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="user-list">
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>{user.company.name}</p>
                </div>
            ))}
        </div>
    );
}
