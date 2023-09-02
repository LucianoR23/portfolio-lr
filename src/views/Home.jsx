import { Button, Grid } from "@mui/material"
import { Footer } from "../ui/components/Footer"
import { ButtonsPages } from "../ui/components/ButtonsPages"


export const Home = () => {
    return (
        <Grid container direction='column' className="animate__fadeIn animate__animated" sx={{ height: '100vh', width: '100%', objectFit: 'contain' }}>

            <video autoPlay muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src="../../video/fondo-mundo.mp4" type="video/mp4" />
            </video>

            <Grid item >

                <Grid  container direction="row" justifyContent="space-evenly" alignItems='center' sx={{ width: '100%', height: '90vh'}}  >

                    <Grid item xs={ 12 } md={ 3 } >
                        <Grid container alignItems='center' justifyContent='center'>
                            <ButtonsPages pad={ 5 } fontSi={ 150 } varian='h4' name='About me' />
                        </Grid>
                    </Grid>

                    <Grid item xs={ 12 } md={ 3 } >
                        <Grid container alignItems='center' justifyContent='center'>
                            <ButtonsPages pad={ 5 } fontSi={ 150 } varian='h4' name='Projects' />
                        </Grid>
                    </Grid>

                    <Grid item xs={ 12 } md={ 3 } >
                        <Grid container alignItems='center' justifyContent='center'>
                            <ButtonsPages pad={ 5 } fontSi={ 150 } varian='h4' name='Knowledge' />
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
