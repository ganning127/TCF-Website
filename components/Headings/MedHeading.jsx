import { Heading, Text, Box } from '@chakra-ui/react'

export const MedHeading = ({ desc, children }) => {
    return (
        <Box textAlign="center" maxW="700px" mx="auto">
            <Heading as="h1" size="xl" color="text.dark.heading" mb="4" fontWeight="bold">{children}</Heading>
            {desc && <Text fontWeight="normal" color="text.dark" fontSize="lg" my="2" >{desc}</Text>}
        </Box >
    )
}