import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";


export const Welcome = () => {

    const [className, setClassName] = useState('animate__animated animate__zoomIn animate__slower');
    const [classNameWindow, setClassNameWindow] = useState('');

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
            window.location.href = '/home';
        }, 6000);
    }, []);

    return (
        <Box className={ classNameWindow } display='flex' justifyContent='center' alignItems='center' sx={{ height: '100vh', width: '100%', objectFit: 'contain' }} >
            <video autoPlay muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src="../../video/fondo-mundo.mp4" type="video/mp4" />
            </video>
            <Typography className={className} variant="h1" color='primary.main' sx={{ fontWeight: 500}}>Welcome</Typography>
        </Box>
    )
}
