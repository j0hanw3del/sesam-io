import React from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
} from '@mui/material';

const SortMenu = ({ setSortOption }) => {
    // Function to handle sort option change
    const handleSortChange = (event) => {
        // Update the sort option in the parent component
        setSortOption(event.target.value);
    };

    return (
        <Box>
            <FormControl fullWidth variant="filled">
                <InputLabel id="sort-label">Sort By</InputLabel>
                <Select
                    labelId="sort-label"
                    id="sort-menu"
                    label="Sort By"
                    onChange={handleSortChange}
                >
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="company">Company</MenuItem>
                    <MenuItem value="city">City</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SortMenu;
