import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#384E60',
            dark: '#030706',
            light: '#66849C',

        },
        error: {
            main: red.A400
        },
        secondary: {
            main: '#384E60',
            contrastText: '#50CCBE',
            dark: '#28333B'
        },
        background: {
            default: '#000100'
        }
    },
    typography: {
        fontFamily: [
            'Kanit',
            'Roboto',
        ].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 2400,
        },
    },
})