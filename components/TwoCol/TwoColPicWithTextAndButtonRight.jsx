import { SimpleGrid, Box, Text, Heading, Img, Button } from '@chakra-ui/react'

export const TwoColPicWithTextAndButtonRight = ({ title, desc, themeColor, themeHover, pic, buttonText, buttonLink }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" justifyContent="center" alignItems="center">

            <Box mx="auto" textAlign={{ base: "center", md: "left" }} maxW="400px">
                {title && <Heading color={themeColor}>{title}</Heading>}
                <Text fontSize="2xl" color="text.dark" my="5">{desc}</Text>
                <Button bg={themeColor} href={buttonLink} color="white" fontWeight="bold" shadow="lg" _hover={{ bg: themeHover }} px="10" fontSize="lg">
                    {buttonText}
                </Button>
            </Box>
            <Box mx="auto">
                <Img src={pic} alt="pic" maxH="450px" />
            </Box>
        </SimpleGrid>
    )


}

