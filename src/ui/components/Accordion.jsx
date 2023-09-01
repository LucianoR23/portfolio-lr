import { Menu } from "@mui/icons-material"
import { AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';

export const AccordionMenu = () => {
    return (
        <Box>
            <Accordion>
                <AccordionSummary
                expandIcon={<Menu />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}
