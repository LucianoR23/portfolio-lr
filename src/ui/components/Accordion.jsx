import { Menu } from "@mui/icons-material"
import { AccordionDetails, Accordion, AccordionSummary, Grid } from "@mui/material"
import { ButtonsPages } from "./ButtonsPages"


export const AccordionMenu = (prop) => {

    return (

            <Grid container direction='row' justifyContent='center' >

                <Accordion TransitionProps={{ unmountOnExit: true }} elevation={0} sx={{ backgroundColor: 'background.default', width: '30%', position: 'absolute' }}>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <Grid container direction='row' justifyContent='center' width='100%' >
                            <Menu sx={{ color: 'primary.main' }} />
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>

                        <Grid container direction='row' justifyContent='space-around' >
                            <Grid item>
                                <ButtonsPages pad={ 3 } fontSi={ 50 } varian="subtitle1" name={prop[0]} />

                            </Grid>
                            <Grid item>
                                <ButtonsPages pad={ 3 } fontSi={ 50 } varian="subtitle1" name={prop[1]} />

                            </Grid>
                        </Grid>

                        
                    </AccordionDetails>
                </Accordion>
            </Grid>

    )
}
