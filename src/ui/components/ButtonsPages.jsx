import { Link as Redirect } from "react-router-dom"
import { BadgeOutlined, Code, MenuBook } from "@mui/icons-material"
import { Button, Grid, Link, Typography } from "@mui/material"
import { Icon, redirec } from "../../helpers"


export const ButtonsPages = ({ pad, fontSi, varian, name, backC = 'transparent' }) => {

    const buttonIcon = Icon(name, fontSi)

    const redirection = redirec(name)

    return (
        <Button id="btn-menu" sx={{ ':hover': { backgroundColor: 'primary.dark', opacity: 0.7 }, borderRadius: 4, opacity: { md: 1, xs: 0.9 }, backgroundColor: { xs: backC/* , md: backC */ } }}>
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
