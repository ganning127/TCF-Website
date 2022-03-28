import { Box, Text, Button, Center, HStack } from '@chakra-ui/react'
import { HeadingWithDesc } from '../Headings/HeadingWithDesc'
import Fade from 'react-reveal'
export const SubSectionTwoButtons = ({ title, desc, button1, link1, button2, link2 }) => {
    return (
        <Fade bottom>
        <Center h="300">
            <Box textAlign="center">
                <HeadingWithDesc>
                    {title}
                </HeadingWithDesc>
                <Text fontSize="2xl" color="text.dark" my="5" maxW="500px" textAlign="center">{desc}</Text>

                <HStack mx="auto" justifyContent="center">
                    <Button bg="whtie" as="a" href={link1} color="blue.shade" fontWeight="bold" shadow="lg" _hover={{ bg: "gray.200" }} fontSize="lg" px="8" my="5" rounded="lg" >
                        {button1}
                    </Button>

                    <Button bg="blue.shade" as="a" href={link2} color="white" fontWeight="bold" shadow="lg" _hover={{ bg: "blue.shade.hover" }} fontSize="lg" px="8" my="5" rounded="lg" >
                        {button2}
                    </Button>
                </HStack>
            </Box>

        </Center >
        </Fade>
    )
}