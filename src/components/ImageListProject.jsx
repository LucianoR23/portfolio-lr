import { ButtonBase, ImageList, ImageListItem, ImageListItemBar, Link, Popover, Typography } from "@mui/material"
import { infoImg } from "../helpers"
import { Info } from "@mui/icons-material"
import { useState } from "react";


export const ImageListProject = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const [openIndex, setOpenIndex] = useState(null);

    const handlePopoverOpen = (index) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpenIndex(index);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setOpenIndex(null);
    };

    return (
        <ImageList cols={3} gap={10} sx={{ width: '70%', height: '90%' }} >

                {infoImg.map((image, index) => (
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
                        sx={{ width: { md: '15rem', xs: '10rem' }, mb: 2, ml: 5, borderRadius: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.30)' }}
                        aria-owns={openIndex === index ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen(index)}
                        onMouseLeave={handlePopoverClose}
                        actionIcon={
                        <ButtonBase
                            sx={{ color: 'rgba(255, 255, 255, 0.54)', mr: 2 }}
                            aria-label={`info about ${image.title}`}
                            component={ Link } rel="noopener" target="_blank" href={image.url}
                            
                        >
                            <Info />
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                pointerEvents: 'none',
                                backgroundColor: 'transparent'
                                }}
                                open={openIndex === index}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                                }}
                                transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography variant="subtitle2" sx={{ p: 1, width: '18rem', backgroundColor: 'rgba(0, 0, 0, 0.85)', color: 'primary.light' }}>{image.description}</Typography>
                            </Popover>
                        </ButtonBase>
                        }
                    />
                    </ImageListItem>
                ))}

            </ImageList>
    )
}
