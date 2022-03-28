import { Box, Text, Button, Center, HStack } from '@chakra-ui/react'
import { HeadingWithDesc } from '../Headings/HeadingWithDesc'
import { useColorModeValue } from '@chakra-ui/react'
export const SubSectionTwoButtons = ({ title, desc, button1, link1, button2, link2 }) => {
    const textColor = useColorModeValue('text.dark', 'text.light')
    return (
        <Center h="300">
            <Box textAlign="center">
                <HeadingWithDesc>
                    {title}
                </HeadingWithDesc>
                <Text fontSize="2xl" color={textColor} my="5" maxW="500px" textAlign="center">{desc}</Text>

                <HStack mx="auto" justifyContent="center">
                    <Button bg="whtie" as="a" href={link1} color="blue.shade" fontWeight="bold" shadow="lg" _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }} fontSize="lg" px="8" my="5" rounded="lg" >
                        {button1}
                    </Button>

                    <Button bg="blue.shade" as="a" href={link2} color="white" fontWeight="bold" shadow="lg" _hover={{ bg: "blue.shade.hover" }} fontSize="lg" px="8" my="5" rounded="lg" >
                        {button2}
                    </Button>
                </HStack>
            </Box>

        </Center >
    )
}