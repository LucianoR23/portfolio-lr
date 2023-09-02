import { ButtonBase, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, ListSubheader, Paper, Typography } from "@mui/material"
import { PortfolioLayout } from "../layout/PortfolioLayout"
import { Info } from "@mui/icons-material";
import { infoImg } from "../helpers";


export const Projects = () => {
    return (
        <PortfolioLayout>
            <Grid container direction='row' wrap="wrap" alignItems='center' justifyContent='center' sx={{ height: '100%', width: '100%'/* , pb: 30 */ }}>

            <ImageList cols={3} gap={10} sx={{ width: '70%', height: '90%' }} >

                {infoImg.map((image) => (
                    <ImageListItem key={image.img} sx={{ borderRadius: '5rem' }} >
                    <img
                        src={`${image.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={image.title}
                        loading="lazy"
                        id="img-projects"
                    />
                    <ImageListItemBar
                        title={image.title}
                        sx={{ width: { md: '20rem', xs: '15rem' }, mb: 2 }}
                        actionIcon={
                        <ButtonBase
                            sx={{ color: 'rgba(255, 255, 255, 0.54)', mr: 2 }}
                            aria-label={`info about ${image.title}`}
                            component={ Link } rel="noopener" target="_blank" href={image.url}
                        >
                            <Info />
                        </ButtonBase>
                        }
                    />
                    </ImageListItem>
                ))}

            </ImageList>
            
            </Grid>
        </PortfolioLayout>
    )
}