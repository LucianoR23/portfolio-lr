import { PortfolioLayout } from "../layout/PortfolioLayout"
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@emotion/react";


export const AboutMe = () => {

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const text = [
        "Hi, my name is Luciano and I'm 25 years old. Since childhood I loved technology and the previous year found out about this world of programming, so I started learning online in YouTube, CoderHouse and Udemy, rigth now I'm studying the carreer Certified Tech Developer at Digital House. At the end of the website you can see my current knowledge and my future goals because I want to keep learning and hope to find a place to obtain working experience.",
        "Hi, my name is Luciano and I'm 25 years old. I started learning online in YouTube, CoderHouse and Udemy, rigth now I'm studying the carreer Certified Tech Developer at Digital House. At the end of the website you can see my current knowledge and my future goals."
    ]
    

    return (
        <PortfolioLayout>
            <Grid container direction='column' alignItems='center' justifyContent='center' sx={{ height: '100%', width: '100%', justifyContent: { md: 'center' } }}>

                <Grid item sx={{ height: { md: '80%', xs: '30%'}, width: { md: '50%', xs: 360} }} display='flex' justifyContent='center' alignItems='center' >
                    <img id="foto-perfil" src="../../images/lr.jpg" alt="Luciano Rodriguez" />
                </Grid>
                <Grid item sx={{ height: { md: '80%', xs: '30%'}, width: { md: '50%', xs: '100%'}, mt: { xs: 10, md: 0 } }} display='flex' justifyContent='center' alignItems='center' >
                    <Paper sx={{ width: '70%', height: { md: '55%', xs: '170%'}, backgroundColor: 'background.default', padding: { xs: 2, md: 4 }, borderRadius: 12, opacity: 0.9 }}  >
                        <Typography variant={isMd ? 'h5' : 'subtitle1'} color='primary.light'>{ isMd ? text[0] : text[1] }</Typography>
                    </Paper>
                </Grid>

            </Grid>
        </PortfolioLayout>
    )
}
