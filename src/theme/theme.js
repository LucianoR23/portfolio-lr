import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#347878',
            dark: '#0A2732',
            light: '#54D8C8',

        },
        error: {
            main: red.A400
        },
        secondary: {
            main: '#44A8A0',
            contrastText: '#50CCBE'
        },
        background: {
            default: '#07212D'
        }
    },
    typography: {
        fontFamily: [
            'Kanit',
            'Roboto',
        ].join(','),
    },
})