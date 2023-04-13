import { createTheme } from '@mui/material/styles';
import '@fontsource/lato';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0FA4F8',
        },
        secondary: {
            main: '#00B8B1',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: 'Lato, sans-serif',
    },
});

export default theme;
