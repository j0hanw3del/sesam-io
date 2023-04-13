import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Custom card with box-shadow styling
const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

// Custom typography style for the user name
const CardName = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '1.4rem',
    color: theme.palette.secondary.main,
}));

const UserCard = ({ user }) => {
    return (
        <StyledCard>
            <CardContent>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                >
                    {/* Display the user name with a link to their details page */}
                    <CardName variant="h6" component={Link} to={`/user/${user.id}`}>
                        {user.name}
                    </CardName>
                    {/* Display the user's company name */}
                    <Typography>{user.company.name}</Typography>
                </Box>
            </CardContent>
        </StyledCard>
    );
};

export default UserCard;
