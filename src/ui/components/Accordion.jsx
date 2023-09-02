import { Menu } from "@mui/icons-material"
import { AccordionDetails, Accordion, AccordionSummary, Grid, useMediaQuery } from "@mui/material"
import { ButtonsPages } from "./ButtonsPages"
import { useTheme } from "@emotion/react";


export const AccordionMenu = (prop) => {

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return (

            <Grid container direction='row' justifyContent='center' >

                <Accordion TransitionProps={{ unmountOnExit: true }} elevation={0} sx={{ backgroundColor: 'transparent', width: '30%', position: 'absolute', zIndex: 2 }}>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <Grid container direction='row' justifyContent='center' width='100%' >
                            <Menu sx={{ color: 'primary.main' }} />
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>

                        <Grid container gap={1} direction='row' justifyContent='space-around' >
                            <Grid item>
                                <ButtonsPages pad={ isMd ? 3 : 1 } fontSi={ isMd ? 50 : 30 } varian={ isMd ? "subtitle1" : "subtitle2" } name={prop[0]} backC="#000100" />

                            </Grid>
                            <Grid item>
                                <ButtonsPages pad={ isMd ? 3 : 1 } fontSi={ isMd ? 50 : 30 } varian={ isMd ? "subtitle1" : "subtitle2" } name={prop[1]} backC="#000100" />

                            </Grid>
                        </Grid>

                        
                    </AccordionDetails>
                </Accordion>
            </Grid>

    )
}
