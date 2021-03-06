import {
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  useColorModeValue as mode,
  useDisclosure,
  VisuallyHidden,
  Img
} from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from './NavLink.tsx'
import { NavMenu } from './NavMenu.tsx'
import { Submenu } from './Submenu.tsx'
import { ToggleButton } from './ToggleButton.tsx'
import { links } from './_data.tsx'
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
const MobileNavContext = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      {/* bg={useColorModeValue("gray.100", "gray.900")} FOR USE WITHIN COMPONENT*/}

      <Flex align="center" justify="space-between" className="nav-content__mobile" {...props}>
        <Box>
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" mx="auto" href="/" py={2}>
          <Img src="/logo_with_bkg.png" alt="Keep" maxW="150px" rounded='md' />
        </Box>
        <IconButton onClick={toggleColorMode} aria-label="Toggle Mode" >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
        {/* <Box>
          <Button bg="blue.shade" color="white" as="a" href="#" borderRadius="20">
            Sign In
          </Button>
        </Box> */}
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href} color="">
              {link.label}
            </NavLink.Mobile>
          ),
        )}

      </NavMenu>
    </>
  )
}

const DesktopNavContent = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
      <Box as="a" href="/" rel="home">
        <VisuallyHidden>The Coding Foundation</VisuallyHidden>
        <Img src="/logo_with_bkg.png" alt="Keep" maxW="150px" rounded='md' />
      </Box>
      <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop active={props.active} link={link} />
            ) : (
              <NavLink.Desktop href={link.href} color={link.label.toLowerCase() === props.active ? "blue.shade" : ""}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}

      </HStack>
      {/* <HStack spacing="8" minW="100px" justify="space-between">
        <Button bg="blue.shade" _hover={{ bg: "blue.shade.hover" }} color="white" as="a" href="#" borderRadius="20" shadow='lg'>
          Sign In
        </Button>

      </HStack> */}

    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}
