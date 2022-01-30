import { SimpleGrid, Text, Box, Img, Button, Heading } from '@chakra-ui/react'

export const FullButtonWithPic = ({ title, pic, logo, desc, desc2, desc3, buttonText, buttonLink, themeColor, themeColorHover }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign="center" justifyContent="center" alignItems="center">
            <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                <Img src={pic} alt="pic" />
            </Box>
            <Box mx="auto" maxW="500px">
            {title && <Heading color={themeColor}>{title}</Heading>}
                <Img src={logo} alt="pic" mx="auto" maxH="150px" />
                <Text fontSize="2xl" color="text.dark" my="5">{desc}</Text>
                
                <Button as="a" bg={themeColor} href={buttonLink} color="white" fontWeight="bold" shadow="lg" _hover={{ bg: themeColorHover }} fontSize="lg" w="100%" my="5">
                    {buttonText}
                </Button>
            
            </Box>

        </SimpleGrid >
    )
}