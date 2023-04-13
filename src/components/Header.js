import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/sesamlogo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Custom styled AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#40363C',
}));

// Custom styled Toolbar with space between elements
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
}));

// Custom styled logo image
const Logo = styled('img')({
    maxHeight: '40px',
});

// Custom styled slogan with a left margin
const Slogan = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
    color: theme.palette.common.white,
}));

// Custom styled highlight for the slogan
const Highlight = styled('mark')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: '0 2px',
    borderRadius: '2px',
}));

const Header = () => {
    return (
        <StyledAppBar position="static">
            <Container>
                <StyledToolbar>
                    {/* Logo and Slogan */}
                    <Box display="flex" alignItems="center">
                        <Logo src={logo} alt="Sesam Logo" />
                        <Slogan variant="h6" component="div">
                            Making those systems <Highlight>talk</Highlight>
                        </Slogan>
                    </Box>
                    {/* Social media icons */}
                    <Box display="flex" alignItems="center">
                        <IconButton
                            href="https://www.linkedin.com/in/johanwedel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            sx={{
                                color: 'grey',
                                '&:hover': {
                                    color: 'white',
                                },
                            }}
                        >
                            <LinkedInIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            href="https://github.com/j0hanw3del"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            sx={{
                                color: 'grey',
                                '&:hover': {
                                    color: 'white',
                                },
                            }}
                        >
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                    </Box>
                </StyledToolbar>
            </Container>
        </StyledAppBar>
    );
};

export default Header;
