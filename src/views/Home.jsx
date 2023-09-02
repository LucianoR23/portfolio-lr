import { Button, Grid, useMediaQuery } from "@mui/material"
import { Footer } from "../ui/components/Footer"
import { ButtonsPages } from "../ui/components/ButtonsPages"
import { useTheme } from "@emotion/react";


export const Home = () => {

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Grid container direction='column' className="animate__fadeIn animate__animated" sx={{ height: '100vh', width: '100%', objectFit: 'contain' }}>

            <video autoPlay muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src="../../video/fondo-mundo.mp4" type="video/mp4" />
            </video>

            <Grid item >

                <Grid  container direction="row" justifyContent="space-evenly" alignItems='center' sx={{ width: '100%', height: '90vh'}}  >

                    <Grid item xs={ 12 } md={ 3 } >
                        <Grid container alignItems='center' justifyContent='center'>
                            <ButtonsPages pad={ 5 } fontSi={ isMd ? 150 : 50 } varian={isMd ? 'h4' : 'subtitle1'} name='About me' />
                        </Grid>
                    </Grid>

                    <Grid item xs={ 12 } md={ 3 } >
                        <Grid container alignItems='center' justifyContent='center'>
                            <ButtonsPages pad={ 5 } fontSi={ isMd ? 150 : 50 } varian={isMd ? 'h4' : 'subtitle1'} name='Projects' />
                        </Grid>
                    </Grid>

                    <Grid item xs={ 12 } md={ 3 } >
                        <Grid container alignItems='center' justifyContent='center'>
                            <ButtonsPages pad={ 5 } fontSi={ isMd ? 150 : 50 } varian={isMd ? 'h4' : 'subtitle1'} name='Knowledge' />
                        </Grid>
                    </Grid>

                </Grid>
                
            </Grid>

            <Grid item >
                
                <Footer />

            </Grid>
        </Grid>
        
    )
}
