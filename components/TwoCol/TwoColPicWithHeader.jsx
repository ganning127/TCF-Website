import { SimpleGrid, Heading, Text, Box, Img } from '@chakra-ui/react'

export const TwoColPicWithHeader = ({ pic, title, desc1, desc2, bgColor }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign={{ base: "center", md: "left" }} justifyContent="center" bg={bgColor} alignItems="center">
            <Box mx="auto" maxW="500px">
                <Text fontSize="5xl">{title}</Text>
                <br/>
                <Text fontSize="2xl" color="text.dark">{desc1}</Text>
                <br/>
                <Text fontSize="2xl" color="text.dark">{desc2}</Text>
            </Box>
            <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                <Img src={pic} alt="pic" />
            </Box>
        </SimpleGrid >
    )
}
