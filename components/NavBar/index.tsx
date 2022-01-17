import { Box, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent.tsx'

export const NavBar = ({ active }) => {
  return (
    <Box sx={{ position: 'sticky', top: '0', }} zIndex={10000}>
      <Box as="header" bg={mode('white', 'gray.800')} position="relative" zIndex="10">
        <Box as="nav" aria-label="Main navigation" maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
          <NavContent.Mobile display={{ base: 'flex', lg: 'none' }} />
          <NavContent.Desktop display={{ base: 'none', lg: 'flex' }} active={active} />
        </Box>
      </Box>
    </Box>
  )
}
