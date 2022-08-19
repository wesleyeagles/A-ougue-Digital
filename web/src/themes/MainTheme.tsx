import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        mode:'dark',
        primary: {
            main: 'red',
            dark: '#00AA93',
            light: '#00ffdb',
            contrastText: '#FFF',
        },

        background: {
            default: '#081f28',
            paper: '#081f28',
        }
    },

    typography: {
        allVariants: {
            color: 'white'
        },

        fontSize: 16
    }
});