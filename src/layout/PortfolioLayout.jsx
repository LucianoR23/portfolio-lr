import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { AccordionMenu } from '../ui/components/Accordion'

export const PortfolioLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn" >

          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <AccordionMenu />
              <Toolbar />

              {/* { children } */}

          </Box>

      </Box>
  )
}
