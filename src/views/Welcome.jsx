import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material"


export const Welcome = () => {

    const [className, setClassName] = useState('animate__animated animate__zoomIn animate__slower');
    const [classNameWindow, setClassNameWindow] = useState('');
    const navigate = useNavigate()

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        const timer = setTimeout(() => {
            setClassName('animate__animated animate__zoomOut animate__slower');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setClassNameWindow('animate__animated animate__fadeOut');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 6000);
    }, []);

    return (
        <Box className={ classNameWindow } display='flex' justifyContent='center' alignItems='center' sx={{ height: '100vh', width: '100%', objectFit: 'contain' }} >
            <video playsInline={true} autoPlay muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src="../../video/fondo-mundo.mp4" type="video/mp4" />
            </video>
            <Typography className={className} variant={isMd ? 'h1' : 'h2'} color='primary.main' sx={{ fontWeight: 500}}>Welcome</Typography>
        </Box>
    )
}
