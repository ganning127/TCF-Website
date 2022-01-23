import { SimpleGrid, Box, Text, Heading, Button } from '@chakra-ui/react'

export const TwoColBoxWithButton = ({ title1, title2, desc1, desc2, buttonText, buttonLink }) => {
    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" justifyContent="center" alignItems="center" p={5}>
                <Box bg="#F3F3F3" shadow="lg" rounded="xl" maxW="600px" p={5} mx="auto" textAlign="center">
                    <Heading fontWeight="bold" color="dark.heading">{title1}</Heading>
                    <Text color="text.dark" fontSize="xl" my="3" >{desc1}</Text>
                </Box>

                <Box bg="#F3F3F3" shadow="lg" rounded="xl" maxW="600px" p={5} mx="auto" textAlign="center">
                    <Heading fontWeight="bold" color="dark.heading">{title2}</Heading>
                    <Text color="text.dark" fontSize="xl" my="3" >{desc2}</Text>
                </Box>
            </SimpleGrid>
            <Box spacing={20} display="flex" mx="auto" justifyContent="center" alignItems="center" p={5}>
                <Button size="lg" maxH="80px" as="a" bg="blue.shade" borderRadius="30px" color="white" fontWeight="bold" px="10" shadow="lg" fontSize="xl" _hover={{ bg: "blue.shade.hover" }} href={buttonLink}>{buttonText}</Button>
            </Box>
        </>
    )


}