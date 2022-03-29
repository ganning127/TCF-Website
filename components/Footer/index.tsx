import { Box, Stack, StackDivider, Img } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright.tsx'
import { LinkGrid } from './LinkGrid.tsx'
import { Logo } from './Logo.tsx'
import { SocialMediaLinks } from './SocialMediaLinks.tsx'
import { SubscribeForm } from './SubscribeForm.tsx'
import Fade from 'react-reveal'
export const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '10', lg: '28' }}>
        <Box flex="1">
          {/* <Logo /> */}
          <Fade bottom>
          <Img src="/logo.png" w="300px" d={{ base: 'none', lg: 'block' }} />
          </Fade>
        </Box>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '10', md: '20' }}>
          <Fade bottom>
            <LinkGrid spacing={{ base: '10', md: '20', lg: '28' }} flex="1" />
          </Fade>
          <Fade bottom>
            <SubscribeForm width={{ base: 'full', md: 'sm' }} />
          </Fade>
        </Stack>
      </Stack>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
)
