import { SimpleGrid, Box, Text, Heading, Img, Button } from '@chakra-ui/react'
import Fade from 'react-reveal'

export const TwoColTextOneButton = ({ title, desc, buttonText, buttonLink, pic, alignText }) => {

    if (alignText === "right") {
        return (
            <>
                
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="center">
                    <Fade left>
                    <Box mx="auto">
                        <Img src={pic} alt={title} maxH="400px" />
                    </Box>
                    </Fade>

                    <Fade right>
                    <Box textAlign="center" maxW="400px" mx="auto">
                        <Heading size="4xl" as="h1" color="text.dark" >{title}</Heading>
                        <Text color="text.dark" fontSize="xl" my="3">{desc}</Text>
                        <Button as="a" href={buttonLink} target="_blank" bg="turquoise.shade" color="white" _hover={{ bg: "turquoise.shade.hover" }} borderRadius="20px">{buttonText}</Button>
                    </Box>
                    </Fade>
                </SimpleGrid>
            </>
        )
    }
    else {
        return (
            <>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="center">
                    <Fade left>
                    <Box textAlign="center" maxW="400px" mx="auto">
                        <Heading size="4xl" as="h1" color="text.dark" >{title}</Heading>
                        <Text color="text.dark" fontSize="xl" my="3">{desc}</Text>
                        <Button as="a" href={buttonLink} target="_blank" bg="turquoise.shade" color="white" _hover={{ bg: "turquoise.shade.hover" }} borderRadius="20px">{buttonText}</Button>
                    </Box>
                    </Fade>
                    <Fade right>
                    <Box mx="auto">
                        <Img src={pic} alt={title} maxH="400px" />
                    </Box>
                    </Fade>

                </SimpleGrid>
            </>
        )

    }

}