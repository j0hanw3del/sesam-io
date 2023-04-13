import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Typography,
    Grid,
    CircularProgress,
    Paper,
    Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/system';

// Custom styled components
const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const UserDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Fetch user data based on the ID from useParams
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [id]);

    // Show CircularProgress while fetching data
    if (!user) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box>
            {/* Back button */}
            <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
                Back
            </Button>
            {/* Display user's name */}
            <Title variant="h4" mb={3}>
                {user.name}
            </Title>
            {/* Grid layout for Contact Info, Address, and Company */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <StyledPaper>
                        <SectionTitle variant="h6">Contact Info:</SectionTitle>
                        <Divider />
                        {/* Display user's contact information */}
                        <Typography>Username: {user.username}</Typography>
                        <Typography>Email: {user.email}</Typography>
                        <Typography>Phone: {user.phone}</Typography>
                        <Typography>Website: {user.website}</Typography>
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StyledPaper>
                        <SectionTitle variant="h6">Address:</SectionTitle>
                        <Divider />
                        {/* Display user's address */}
                        <Typography>Street: {user.address.street}</Typography>
                        <Typography>Suite: {user.address.suite}</Typography>
                        <Typography>City: {user.address.city}</Typography>
                        <Typography>Zipcode: {user.address.zipcode}</Typography>
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StyledPaper>
                        <SectionTitle variant="h6">Company:</SectionTitle>
                        <Divider />
                        {/* Display user's company information */}
                        <Typography>Name: {user.company.name}</Typography>
                        <Typography>Catch Phrase: {user.company.catchPhrase}</Typography>
                        <Typography>BS: {user.company.bs}</Typography>
                    </StyledPaper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserDetail;
