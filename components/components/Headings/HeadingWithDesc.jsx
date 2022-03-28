import { Heading, Text, Box } from '@chakra-ui/react'
import Fade from 'react-reveal'

export const HeadingWithDesc = ({ desc, children }) => {
    return (
        <Fade bottom>
            <Box textAlign="center" maxW="700px" mx="auto">
                <Heading as="h1" size="2xl" color="text.dark.heading" mb="4" fontWeight="bold">{children}</Heading>
                {desc && <Text fontWeight="normal" color="text.dark" fontSize="xl" my="3" >{desc}</Text>}
            </Box >
        </Fade>
    )
}