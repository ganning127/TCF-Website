import { SimpleGrid, Heading, Text, Box, Img } from '@chakra-ui/react'

export const TwoColTextWithPicRight = ({ pic, title, desc, bgColor }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign={{ base: "center", md: "left" }} justifyContent="center" bg={bgColor} alignItems="center">
            <Box mx="auto" maxW="500px">
                {title && <Heading color="blue.shade">{title}</Heading>}
                <Text fontSize="2xl" color="text.dark">{desc}</Text>
            </Box>
            <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                <Img src={pic} alt="pic" />
            </Box>
        </SimpleGrid >
    )
}