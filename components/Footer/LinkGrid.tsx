import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading.tsx'

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4" color="text.dark">Navigate</FooterHeading>
      <Stack>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Opportunities</Link>
        <Link>Events</Link>
        <Link>Discord</Link>
        <Link>FAQ</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4" color="text.dark">Resources</FooterHeading>
      <Stack>
        <Link>Tutoring</Link>
        <Link>Workshops</Link>
        <Link>Sponsors</Link>
        <Link>Privacy Policy</Link>
        <Link>Terms of Service</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
