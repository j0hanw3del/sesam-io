import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBox = ({ setSearchTerm }) => {
    // State to manage error status
    const [error, setError] = React.useState(false);

    // Function to handle input change
    const handleInputChange = (event) => {
        const value = event.target.value;
        // Validate the input value for only letters and spaces
        const isValid = /^[a-zA-Z\s]*$/.test(value);
        // Set error state based on input validity
        setError(!isValid);

        // If input is valid, update the searchTerm
        if (isValid) {
            setSearchTerm(value);
        }
    };

    return (
        <Box>
            <TextField
                label="Search"
                onChange={handleInputChange}
                variant="filled"
                fullWidth
                error={error}
                helperText={error ? 'Only letters are allowed' : ''}
            />
        </Box>
    );
};

export default SearchBox;
