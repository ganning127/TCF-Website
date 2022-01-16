import { SimpleGrid, Box, Text, Heading } from '@chakra-ui/react'

export const TwoColText = ({ title1, desc1, title2, desc2 }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign="center" justifyContent="center">
            <Box bg="#FDFDFD" shadow="lg" rounded="xl" maxW="400px" p={5} mx="auto">
                <Heading fontWeight="normal" color="dark.heading">{title1}</Heading>
                <Text color="text.dark" fontSize="xl" my="3" >{desc1}</Text>
            </Box>

            <Box bg="#FDFDFD" shadow="lg" rounded="xl" maxW="400px" p={5} mx="auto">
                <Heading fontWeight="normal" color="dark.heading">{title2}</Heading>
                <Text color="text.dark" fontSize="xl" my="3" >{desc2}</Text>
            </Box>
        </SimpleGrid>
    )
}