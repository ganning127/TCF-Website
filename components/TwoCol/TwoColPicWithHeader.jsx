import { SimpleGrid, Heading, Text, Box, Img } from '@chakra-ui/react'

export const TwoColPicWithHeader = ({ pic, title, desc1, desc2 }) => {
    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={20} mx="auto" textAlign={{ base: "center", lg: "left" }} justifyContent="center" alignItems="center" p="18">
            <Box mx="auto" maxW="450px">
                <Heading size="4xl" as="h1" color="text.dark" >{title}</Heading>
                <Text fontSize="2xl" color="text.dark" my='4'>{desc1}</Text>
                <Text fontSize="2xl" color="text.dark">{desc2}</Text>
            </Box>
            <Box mx="auto" mr="5" d={{ base: 'none', lg: 'block' }}>
                <Img src={pic} alt="pic" maxW="500px" maxH="450px" />
            </Box>
        </SimpleGrid >
    )
}
