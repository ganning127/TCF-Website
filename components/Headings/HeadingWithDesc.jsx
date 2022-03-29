import { Heading, Text, Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
export const HeadingWithDesc = ({ desc, children }) => {
    const headingColor = useColorModeValue('text.dark', 'blue.shade')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    return (
        <Box textAlign="center" maxW="700px" mx="auto">
            <Heading as="h1" size="2xl" color={headingColor} mb="4" fontWeight="bold">{children}</Heading>
            {desc && <Text fontWeight="normal" color={textColor} fontSize="xl" my="3" >{desc}</Text>}
        </Box >
    )
}