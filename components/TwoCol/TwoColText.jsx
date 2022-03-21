import { SimpleGrid, Box, Text, Heading } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export const TwoColText = ({ title1, desc1, title2, desc2 }) => {
    const textColor = useColorModeValue('text.dark', 'text.light')
    const bgColor = useColorModeValue('bkg.light', 'bkg.dark')
    const shadowColor = useColorModeValue('lg', 'dark-lg')
    const headingColor = useColorModeValue('text.dark.heading', 'text.light.heading')
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign="center" justifyContent="center">
            <Box bg={bgColor} boxShadow={shadowColor} rounded="xl" maxW="400px" p={5} mx="auto">
                <Heading fontWeight="normal" color={headingColor}>{title1}</Heading>
                <Text color={textColor} fontSize="xl" my="3" >{desc1}</Text>
            </Box>

            <Box bg={bgColor} boxShadow={shadowColor} rounded="xl" maxW="400px" p={5} mx="auto">
                <Heading fontWeight="normal" color={headingColor}>{title2}</Heading>
                <Text color={textColor} fontSize="xl" my="3" >{desc2}</Text>
            </Box>
        </SimpleGrid>
    )
}