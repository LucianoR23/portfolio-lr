import { ButtonBase, Grid, ImageList, ImageListItem, Link, Paper, Typography, useMediaQuery } from "@mui/material"
import { PortfolioLayout } from "../layout/PortfolioLayout"
import { useTheme } from "@emotion/react";


export const Knowledge = () => {

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <PortfolioLayout>
            <Grid container direction='column' alignItems='center' wrap={ isMd ? 'wrap' : 'nowrap' } justifyContent='center' sx={{ height: '100%', width: '100%' }}>

                <Grid item sx={{ height: '80%', width: { md: '50%'} }} gap={2} display='flex' >
                    <Grid  container direction='column' gap={8} justifyContent='center' alignItems='center'>
                        <Paper sx={{ width: '80%', height: { md: '31%', xxl: '20%' }, backgroundColor: 'background.default', padding: 2, borderRadius: 10, opacity: 0.9, display: { xs: 'none', md: 'flex' } }}  >
                                <Typography variant="subtitle1" color='primary.light'>
                                    Udemy, Online — Certificación JavaScript - TypeScript - Node - React - Next - Vue (in progress)
                                    <br />
                                    2023, Online
                                    <br />
                                    Data Types - Objects - Operators - Cycles - ESNext - Classes - 
                                    Private properties - Node - Npm - Installing packages in JavaScript projects - Promises - 
                                    Callbacks - CRUD - File upload - Fetch - Generating functions - Vite - Mappers
                                </Typography>
                        </Paper>
                        <Paper sx={{ width: '80%', height: { md: '31%', xs: '80%', xxl: '20%' }, backgroundColor: 'background.default', padding: 2, borderRadius: 10, opacity: 0.9 }}  >
                            <Typography variant={ isMd ? "subtitle1" : 'body2' } color='primary.light'>
                                01/2022 - 01/2023
                                <br />
                                VIAJERO HOSTELS - MIAMI FL / Front Desk
                                <br />
                                Customer Support.
                                <br />
                                Reception of guests to check-in or check-out if their stay has ended.
                                <br />
                                Solving problems or inconveniences within the building, answering calls, emails, WhatsApp messages, whether to make questions or make a reservation.
                            </Typography>
                        </Paper>
                        

                    </Grid>
                </Grid>

                <Grid item sx={{ height: '80%', width: { md: '50%', xs: '100%' } }} display='flex' justifyContent='center' alignItems='center' >
                    <ImageList sx={{ width: '72%', height: '80%', backgroundColor: 'background.default', padding: 3, borderRadius: 12 }}  >
                        <ButtonBase component={ Link } rel="noopener" target="_blank" href='https://res.cloudinary.com/luciano-rodriguez/image/upload/v1698960622/portfolio/Certificado-Next.jpg' >
                            <ImageListItem>
                                <img className="img-cert" src="../../images/certificado-next.jpg" alt="certificado-next" />
                            </ImageListItem>
                        </ButtonBase>
                        <ButtonBase component={ Link } rel="noopener" target="_blank" href='https://res.cloudinary.com/luciano-rodriguez/image/upload/v1695999001/portfolio/Certificado-React_tqxtgi.jpg' >
                            <ImageListItem>
                                <img className="img-cert" src="../../images/certificado-react.jpg" alt="certificado-react" />
                            </ImageListItem>
                        </ButtonBase>
                        <ButtonBase component={ Link } rel="noopener" target="_blank" href='https://res.cloudinary.com/luciano-rodriguez/image/upload/v1693623894/portfolio/certificado-node_tnev3w.jpg' >
                            <ImageListItem>
                                <img className="img-cert" src="../../images/certificado-node.jpg" alt="certificado-node" />
                            </ImageListItem>
                        </ButtonBase>
                        <ButtonBase component={ Link } rel="noopener" target="_blank" href='https://res.cloudinary.com/luciano-rodriguez/image/upload/v1693623894/portfolio/certificado-ts_df1krb.jpg' >
                            <ImageListItem>
                                <img className="img-cert" src="../../images/certificado-ts.jpg" alt="certificado-ts" />
                            </ImageListItem>
                        </ButtonBase>
                        <ButtonBase component={ Link } rel="noopener" target="_blank" href='https://res.cloudinary.com/luciano-rodriguez/image/upload/v1693419035/portfolio/Certificado_JavaScript_wi2ghc.jpg' >
                            <ImageListItem>
                                <img className="img-cert" src="../../images/certificado-js.jpg" alt="certificado-js" />
                            </ImageListItem>
                        </ButtonBase>
                    </ImageList>
                </Grid>

            </Grid>
        </PortfolioLayout>
    )
}
