import { Grid } from "@mui/material"
import { PortfolioLayout } from "../layout/PortfolioLayout"
import { ImageListProject } from "../components/ImageListProject";


export const Projects = () => {




    return (
        <PortfolioLayout>
            <Grid container direction='row' wrap="wrap" alignItems='center' justifyContent='center' sx={{ height: '100%', width: '100%' }}>

                <ImageListProject />
            
            </Grid>
        </PortfolioLayout>
    )
}