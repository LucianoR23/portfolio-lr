import { BadgeOutlined, Code, GitHub, LinkedIn, MenuBook } from "@mui/icons-material"
import { Button, Grid, Link, Typography } from "@mui/material"
import { Link as Redirect } from "react-router-dom"
import { Footer } from "../ui/components/Footer"


export const Home = () => {
    return (
        <Grid container direction='column' className="animate__fadeIn animate__animated" sx={{ height: '100vh', width: '100%', objectFit: 'contain' }}>

            <video autoPlay muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src="../../video/fondo-pc.mp4" type="video/mp4" />
            </video>

            <Grid item xs={ 11 } >

                <Grid  container direction="row" justifyContent="space-evenly" alignItems='center' sx={{ width: '100%', height: '90vh'}}  >

                    <Grid item xs={ 12 } md={ 3 } >
                        <Grid container alignItems='center' justifyContent='center'>
                            <Button sx={{ ':hover': { backgroundColor: 'primary.dark', opacity: 0.9 }, borderRadius: 4 }}>
                                <Link underline="none" sx={{ padding: 5 }} component={ Redirect } to='/about' >
                                    <Grid container direction='column' alignItems='center' >
                                        <BadgeOutlined sx={{ fontSize: 150, color: 'primary.light' }} />
                                        <Typography sx={{ color: 'primary.light', mt: 4, fontWeight: 500 }} variant="h4" >About me</Typography>
                                    </Grid>
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={ 12 } md={ 3 } >
                        <Grid container alignItems='center' justifyContent='center'>
                            <Button sx={{ ':hover': { backgroundColor: 'primary.dark', opacity: 0.9 }, borderRadius: 4 }}>
                                <Link underline="none" sx={{ padding: 5 }} component={ Redirect } to='/projects' >
                                    <Grid container direction='column' alignItems='center' >
                                        <Code sx={{ fontSize: 150, color: 'primary.light' }} />
                                        <Typography sx={{ color: 'primary.light', mt: 4, fontWeight: 500 }} variant="h4" >Projects</Typography>
                                    </Grid>
                                
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={ 12 } md={ 3 } >
                        <Grid container alignItems='center' justifyContent='center'>
                            <Button sx={{ ':hover': { opacity: 0.9, backgroundColor: 'primary.dark' }, borderRadius: 4 }}>
                                <Link underline="none" sx={{ padding: 5 }} component={ Redirect } to='/knowledge' >
                                    <Grid container direction='column' alignItems='center' >
                                        <MenuBook sx={{ fontSize: 150, color: 'primary.light' }} />
                                        <Typography sx={{ color: 'primary.light', mt: 4, fontWeight: 500 }} variant="h4" >Knowledge</Typography>
                                    </Grid>
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
                
            </Grid>

            <Grid item xs={ 1 } >
                
                <Footer />

            </Grid>
        </Grid>
        
    )
}
