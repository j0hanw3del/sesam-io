import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@mui/material';

import UserCard from './UserCard';

const UserList = ({ searchTerm, sortOption }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch users and set the users state
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    // Filter users based on the searchTerm
    const filteredUsers = searchTerm
        ? users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : users;

    // Sort users based on the selected sortOption
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'company') {
            return a.company.name.localeCompare(b.company.name);
        } else if (sortOption === 'city') {
            return a.address.city.localeCompare(b.address.city);
        } else {
            return 0;
        }
    });

    return (
        <>
            {/* Show CircularProgress when loading */}
            {loading ? (
                <CircularProgress />
            ) : (
                // Display UserCards in a grid layout
                <Grid container spacing={3}>
                    {sortedUsers.map((user) => (
                        <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
                            <UserCard user={user} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default UserList;
