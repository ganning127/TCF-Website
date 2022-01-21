import { Heading, Text, Box } from '@chakra-ui/react'

export const CenteredHeadingWithDesc = ({ desc1, desc2, desc3, children }) => {
    return (
        <Box textAlign="center" maxW="450px" mx="auto">
            <Heading as="h1" size="2xl" color="text.dark.heading" mb="4" fontWeight="bold">{children}</Heading>
            {desc1 && <Text fontWeight="normal" color="gray.light.shade" fontSize="xl" my="10" >{desc1}</Text>}
            {desc2 && <Text fontWeight="normal" color="gray.light.shade" fontSize="xl" my="1" >{desc2}</Text>}
            {desc3 && <Text fontweight="normal" color="text.dark" fontSize="xl" my="1" >{desc3}</Text>}
        </Box >
    )
}