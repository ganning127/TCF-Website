import { Heading, Text, Box, VStack, useColorModeValue } from '@chakra-ui/react'

export const SubSectionTwoText = ({ title, p1, p2 }) => {
    const headingColor = useColorModeValue('text.dark', 'blue.shade')
    const textColor = useColorModeValue('text.dark', 'text.light')
    return (
        <VStack spacing={5} textAlign="center" maxW="700px" mx="auto">
            <Heading as="h1" size="4xl" color={headingColor} >{title}</Heading>
            <Text color={textColor} fontSize="2xl" my="3">{p1}</Text>
            <Text fontStyle="italic" color={textColor} fontSize="2xl" my="3">{p2}</Text>
        </VStack>
    )
}