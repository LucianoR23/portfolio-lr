import { Link as Redirect } from "react-router-dom"
import { BadgeOutlined, Code, MenuBook } from "@mui/icons-material"
import { Button, Grid, Link, Typography } from "@mui/material"
import { Icon, redirec } from "../../helpers"


export const ButtonsPages = ({ pad, fontSi, varian, name }) => {

    const buttonIcon = Icon(name, fontSi)

    const redirection = redirec(name)

    return (
        <Button sx={{ ':hover': { backgroundColor: 'primary.dark', opacity: 0.6 }, borderRadius: 4 }}>
            <Link underline="none" sx={{ padding: pad }} component={ Redirect } to={ redirection } >
                <Grid container direction='column' alignItems='center' >
                    {
                        buttonIcon
                    }
                    <Typography sx={{ color: 'primary.light', mt: 4, fontWeight: 500 }} variant={ varian } >{ name }</Typography>
                </Grid>
            </Link>
        </Button>
    )
}
