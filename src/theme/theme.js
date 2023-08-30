import { createTheme } from "@mui/material";
import { cyan, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#05556A',
            dark: '#061C22'
        },
        error: {
            main: red.A400
        }
    }
})