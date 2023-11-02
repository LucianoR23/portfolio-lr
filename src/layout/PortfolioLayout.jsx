
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Avatar, Box, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { AccordionMenu } from '../ui/components/Accordion'
import { Footer } from '../ui/components/Footer'
import { buttonProp, scrollTo } from '../helpers'
import { activateScroll, disableScroll } from '../store/views/viewsSlice'
import { useTheme } from '@emotion/react'
import { actualView } from '../helpers/actualView'


export const PortfolioLayout = ({ children }) => {

  const { isScrollActive } = useSelector( state => state.views )
  const dispatch = useDispatch()

  const location = useLocation()
  const actualPath = location.pathname
  const prop = buttonProp( actualPath )
  const pathTo = scrollTo( actualPath )

  const deviceH = window.innerHeight

  const navigate = useNavigate()

  const handleWheel = (event) => {

    if (!isScrollActive){

      if (event.deltaY < 0) {
        if( actualPath === '/knowledge' ){
          dispatch( activateScroll() )
          setTimeout(() => dispatch( disableScroll() ), 2000)
          return navigate(`/${pathTo[1]}`)
        }
        navigate(`/${pathTo[0]}`);
        
        //arriba
      } else if (event.deltaY > 0) {
        if( actualPath === '/knowledge' ){
          dispatch( activateScroll() )
          setTimeout(() => dispatch( disableScroll() ), 2000)
          return navigate(`/${pathTo[0]}`)
        }
        navigate(`/${pathTo[1]}`);
        // abajo
      }
      
      dispatch( activateScroll() )
      setTimeout(() => dispatch( disableScroll() ), 2000)
    }

  };

  const name = actualView(actualPath)

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));


  return (

          <Box onWheel={ handleWheel } sx={{ height: deviceH, width: '100%', objectFit: 'contain' }} component='main' >
            <video playsInline={true} autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src="../../video/fondo-mundo.mp4" type="video/mp4" />
            </video>
            <Box className='animate__animated animate__backInUp'  sx={{ p: 3, height: { xs: '85vh', sm: '90vh' },  }} display='flex' flexWrap='wrap' alignContent='space-between'>



              <AccordionMenu { ...prop } />
                {
                  isSm
                  ? (
                    <Box display='flex' sx={{ width: '10rem', position: 'absolute', right: 25 }} alignItems='center' justifyContent='space-between' >
                      <Avatar alt='Luciano Rodriguez' src='../../images/lr.jpg' />
                      <Typography sx={{ color: 'primary.light' }}>{ name }</Typography>
                    </Box>
                  )
                  : null
                }

                
                
                <Toolbar />

                { children }

              <Footer />
            </Box>

          </Box>

  )
}
