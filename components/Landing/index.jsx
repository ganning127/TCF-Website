import { SimpleGrid, Box, Heading, Button, Text, Img, HStack } from '@chakra-ui/react'
import {Fade} from 'react-reveal'

export const Landing = ({ title, desc, button1, link1, button2, link2, pic }) => {
    let target1 = "_self"
    let target2 = "_self"
    if (link1 && link1.startsWith('http')) {
        target1 = "_blank"
    }
    if (link2 && link2.startsWith('http')) {
        target2 = "_blank"
    }
    return (
        <>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
                <Box d="flex" justifyContent="center">
                    <Box align="center" alignSelf="center" >
                        <Fade left spy>
                        <Heading size="4xl" as="h1" color="text.dark" >{title}</Heading>
                        <Text fontStyle="italic" color="gray.600" fontSize="xl" my="3">{desc}</Text>

                        <HStack justifyContent="center">
                            <Button as="a" bg="blue.shade" rounded="20px" color="white" fontWeight="bold" px="10" shadow="lg" fontSize="xl" _hover={{ bg: "blue.shade.hover" }} href={link1} target={target1}>{button1}</Button>

                            {button2 && <Button as="a" color="blue.shade" fontSize="xl" fontWeight="bold" px="10" bg="transparent" _hover={{ color: "blue.shade.hover" }} href={link2} target={target2}>{button2}</Button>}
                        </HStack>
                        </Fade>
                    </Box>
                </Box>
                    <Box >
                        <Fade right spy>
                            <Img src={pic} mx="auto" />
                        </Fade>
                    </Box>


            </SimpleGrid>
        </>
    )
}