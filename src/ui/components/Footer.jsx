import { Link as Redirect, useLocation } from "react-router-dom"
import { GitHub, Home, HomeRounded, LinkedIn } from "@mui/icons-material"
import { Button, ButtonBase, Grid, Link } from "@mui/material"

// https://github.com/LucianoR23
export const Footer = () => {

    const location = useLocation()
    const actualPath = location.pathname

    return (
        <Grid container direction='row' alignItems='center' justifyContent="space-evenly" sx={{ width: '100%' }} >

            <ButtonBase sx={{ padding: 0 }} component={Link} rel="noopener" target="_blank" href='https://github.com/LucianoR23' >
                <GitHub fontSize="large" sx={{ color: 'primary.light' }} />
            </ButtonBase>

            {
                ( actualPath !== '/home' )
                ? (
                    <ButtonBase sx={{ padding: 0 }} component={ Redirect } to='/home'>
                        <HomeRounded fontSize="large" sx={{ color: 'primary.light' }} />
                    </ButtonBase>
                )
                : null
            }
            
            <ButtonBase sx={{ padding: 0 }} component={Link} rel="noopener" target="_blank" href='https://www.linkedin.com/in/luciano-rodriguez-273809251/' >
                <LinkedIn fontSize="large" sx={{ color: 'primary.light' }} />
            </ButtonBase>

        </Grid>
    )
}