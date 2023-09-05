import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Box, Toolbar } from '@mui/material'
import { AccordionMenu } from '../ui/components/Accordion'
import { Footer } from '../ui/components/Footer'
import { buttonProp, scrollTo } from '../helpers'
import { activateScroll, disableScroll } from '../store/views/viewsSlice'


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

  return (

          <Box onWheel={ handleWheel } sx={{ height: deviceH, width: '100%', objectFit: 'contain' }} >
            <video playsInline={true} autoPlay={false} muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src="../../video/fondo-mundo.mp4" type="video/mp4" />
            </video>
            <Box className='animate__animated animate__backInUp'  component='main' sx={{ p: 3, height: '90vh',  }} display='flex' flexWrap='wrap' alignContent='space-between'>

              <AccordionMenu { ...prop } />
                <Toolbar />

                { children }

              <Footer />
            </Box>

          </Box>

  )
}
