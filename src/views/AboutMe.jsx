import { PortfolioLayout } from "../layout/PortfolioLayout"
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@emotion/react";


export const AboutMe = () => {

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const text = [
        "Hello, my name is Luciano and I am 27 years old. Since I was young I loved technology and in 2023 I discovered this world of programming, so I started learning online on YouTube, CoderHouse and Udemy, right now I am studying the Vue framework at Udemy. At the end of the website you can see my current knowledge and my future goals because I want to continue learning and I hope to find a place to gain work experience.",
        "Hello, my name is Luciano and I am 27 years old. I started learning online on YouTube, CoderHouse and Udemy, right now I am studying the Vue framework on Udemy. At the end of the website you will be able to see my current knowledge and my future goals."
    ]
    

    return (
        <PortfolioLayout>
            <Grid container direction='column' alignItems='center' justifyContent='center' sx={{ height: '100%', width: '100%', justifyContent: { md: 'center' } }}>

                <Grid item sx={{ height: { md: '80%', xs: '30%'}, width: { md: '50%', xs: 360} }} display='flex' justifyContent='center' alignItems='center' >
                    <img id="foto-perfil" src="../../images/lr.jpg" alt="Luciano Rodriguez" />
                </Grid>
                <Grid item sx={{ height: { lg: '40rem', xs: '30%', sm: '15%', xxl: '33rem', md: '100%' }, width: { md: '55%', xs: '100%', lg: '50%'}, mt: { xs: 10, md: 0 } }} display='flex' justifyContent='center' alignItems='center' >
                    <Paper sx={{ width: '70%', height: { md: '55%', xs: '170%'}, backgroundColor: 'background.default', padding: { xs: 2, md: 4 }, borderRadius: 12, opacity: 0.9 }}  >
                        <Typography variant={isMd ? 'h5' : 'subtitle1'} color='primary.light'>{ isMd ? text[0] : text[1] }</Typography>
                    </Paper>
                </Grid>

            </Grid>
        </PortfolioLayout>
    )
}
