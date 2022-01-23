import { Heading, Text, Box, VStack } from '@chakra-ui/react'

export const SubSectionTwoText = ({ title, p1, p2 }) => {
    return (
        <VStack spacing={5} textAlign="center" maxW="700px" mx="auto">
            <Heading as="h1" size="4xl" color="text.dark" >{title}</Heading>
            <Text color="gray.600" fontSize="2xl" my="3">{p1}</Text>
            <Text fontStyle="italic" color="gray.600" fontSize="2xl" my="3">{p2}</Text>
        </VStack>
    )
}