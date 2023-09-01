import { GitHub, LinkedIn } from "@mui/icons-material"
import { Button, Grid, Link } from "@mui/material"


export const Footer = () => {
    return (
        <Grid container direction='row' justifyContent="space-evenly" sx={{ height: '', width: '100%' }} >

            <Button sx={{ padding: 1 }}>
                <Link rel="noopener" target="_blank" href='https://github.com/LucianoR23'>
                    <GitHub fontSize="large" sx={{ color: 'primary.light', position: 'fixed' }} />
                </Link>
            </Button>

            <Button sx={{ padding: 1 }}>
                <Link rel="noopener" target="_blank" href='https://www.linkedin.com/in/luciano-rodriguez-273809251/'>
                    <LinkedIn fontSize="large" sx={{ color: 'primary.light', position: 'fixed' }} />
                </Link>
            </Button>

        </Grid>
    )
}
