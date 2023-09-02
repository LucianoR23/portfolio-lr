import { useNavigate } from "react-router-dom"
import { PortfolioLayout } from "../layout/PortfolioLayout"
import { Box, Grid, Paper, Typography } from "@mui/material"


export const AboutMe = () => {3


    return (
        <PortfolioLayout>
            <Grid container direction='column' alignItems='center' justifyContent='center' sx={{ height: '100%', width: '100%'/* , pb: 30 */ }}>

                <Grid item sx={{ height: '80%', width: '50%' }} display='flex' justifyContent='center' alignItems='center' >
                    <img id="foto-perfil" src="../../images/lr.jpg" alt="Luciano Rodriguez" />
                </Grid>
                <Grid item sx={{ height: '80%', width: '50%' }} display='flex' justifyContent='center' alignItems='center' >
                    <Paper sx={{ width: '70%', height: '50%', backgroundColor: 'background.default' }}  >
                        <Typography variant="h6" color='primary.main'>Hi, my name is Luciano, I'm from Argentina and I'm 25 years old. Since childhood I loved technology and the previous year found out about this world of programming, so I started learning online in YouTube, CoderHouse and Udemy, rigth now I'm studying the carreer Certified Tech Developer at Digital House. At the bottom of the website you can see my current knowledge and my future goals because I want to keep learning and hope to find a place to obtain working experience.</Typography>
                    </Paper>
                </Grid>

            </Grid>
        </PortfolioLayout>
    )
}
