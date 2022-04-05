import { Box, Text, Button, Center } from '@chakra-ui/react'
import { HeadingWithDesc } from '../Headings/HeadingWithDesc'
import { useColorModeValue } from '@chakra-ui/react'
import Fade from 'react-reveal'
export const SubSection = ({ title, desc, desc2, desc3, buttonText, buttonLink, themeColor, themeColorHover }) => {
    const textColor = useColorModeValue('text.dark', 'text.light')
    return (
        <Center h="200">
            <Fade bottom cascade>
                <Box textAlign="center">
                    <HeadingWithDesc>
                        {title}
                    </HeadingWithDesc>
                    <Text fontSize="2xl" color={textColor} my="5" maxW="500px" textAlign="center">{desc}</Text>
                    <Text fontSize="2xl" color={textColor} my="5" maxW="500px" textAlign="center">{desc2}</Text>
                    <Text fontSize="2xl" color={textColor} my="5" maxW="500px" textAlign="center">{desc3}</Text>

                    <Button bg={themeColor} as="a" href={buttonLink} target="_blank" color="white" fontWeight="bold" shadow="lg" _hover={{ bg: themeColorHover }} fontSize="lg" px="8" my="5" >
                        {buttonText}
                    </Button>
                </Box>
            </Fade>
        </Center>
    )
}