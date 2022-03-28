import { SimpleGrid, Heading, Text, Box, Img } from '@chakra-ui/react'
import Fade from 'react-reveal'
export const TwoColWithLongDesc = ({ pic, title, desc1, desc2, bgColor }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" justifyContent="center" bg={bgColor} alignItems="center">
            <Fade left>
            <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                <Img src={pic} alt="pic" />
            </Box>
            </Fade>

            <Fade right cascade>
            <Box mx="auto" textAlign={{ base: "center", md: "right" }} maxW="500px">
                {title && <Heading color="blue.shade">{title}</Heading>}
                <Text fontSize="2xl" color="text.dark">{desc1}</Text>
                <br></br>
                <Text fontSize="2xl" color="text.dark">{desc2}</Text>
            </Box>
            </Fade>

        </SimpleGrid >
    )
}
