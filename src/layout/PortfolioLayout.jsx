import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { AccordionMenu } from '../ui/components/Accordion'
import { Footer } from '../ui/components/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { buttonProp, scrollTo } from '../helpers'


export const PortfolioLayout = ({ children }) => {

  const location = useLocation()
  const actualPath = location.pathname
  const prop = buttonProp( actualPath )
  const pathTo = scrollTo( actualPath )

  const navigate = useNavigate()

  const handleWheel = (event) => {
    if (event.deltaY < 0) {
      if( actualPath === '/knowledge' ){
        return navigate(`/${pathTo[1]}`)
      }
      navigate(`/${pathTo[0]}`);
      //arriba
    } else if (event.deltaY > 0) {
      if( actualPath === '/knowledge' ){
        return navigate(`/${pathTo[0]}`)
      }
      navigate(`/${pathTo[1]}`);
      // abajo
    }

  };

  return (

          <Box sx={{ height: '100vh', width: '100%', objectFit: 'contain' }} >
            <video autoPlay={false} muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src="../../video/fondo-mundo.mp4" type="video/mp4" />
            </video>
            <Box className='animate__animated animate__backInUp' onWheel={ handleWheel } component='main' sx={{ p: 3, height: '90vh',  }} display='flex' flexWrap='wrap' alignContent='space-between'>

              <AccordionMenu { ...prop } />
                <Toolbar />

                { children }

              <Footer />
            </Box>

          </Box>

  )
}
