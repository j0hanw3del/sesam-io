import React, { useState } from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import theme from './Theme';
import Header from './components/Header';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import SearchBox from './components/SearchBox';
import SortMenu from './components/SortMenu';

const App = () => {
  // Lifting state up to handle searchTerm and sortOption in the parent component
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Box mt={4}>
            <Routes>
              {/* Route for the main page with SearchBox, SortMenu, and UserList */}
              <Route
                path="/"
                element={
                  <Box>
                    {/* Flex container for SearchBox and SortMenu */}
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box mr={2} minWidth={300}>
                        {/* SearchBox with setSearchTerm passed as a prop */}
                        <SearchBox setSearchTerm={setSearchTerm} />
                      </Box>
                      <Box minWidth={150}>
                        {/* SortMenu with setSortOption passed as a prop */}
                        <SortMenu setSortOption={setSortOption} />
                      </Box>
                    </Box>
                    {/* UserList with searchTerm and sortOption passed as props */}
                    <UserList searchTerm={searchTerm} sortOption={sortOption} />
                  </Box>
                }
              />
              {/* Route for the UserDetail page */}
              <Route path="/user/:id" element={<UserDetail />} />
            </Routes>
          </Box>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default App;
