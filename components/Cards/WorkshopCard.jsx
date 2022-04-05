import { Box, Text, Link, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
export const WorkshopCard = ({ name, link, pic }) => {
    let bkgUrl = `url(${pic})`;
    const textColor = useColorModeValue('text.dark', 'text.light')
    const bgColor = useColorModeValue('bkg.light', 'bkg.dark')
    const shadowColor = useColorModeValue('lg', 'dark-lg')
    return (
        <Link href={link} isExternal textDecoration="none" _hover={{}}>
            <Box bg={bgColor} shadow={shadowColor} borderRadius="10px" textAlign="center" margin="0 auto" _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }} transition='all 0.1s' p={4}>
                <Box h="15rem" bgImage={bkgUrl} bgPosition="center"
                    bgRepeat="no-repeat" backgroundSize="cover"
                    rounded='md'>
                </Box>
                <Text fontSize="xl" color={textColor} fontWeight="bold" mt='3'>{name}</Text>
            </Box>
        </Link>

    )
}
