import { Box, Text, Link, Image } from "@chakra-ui/react";

export const WorkshopCard = ({ name, link, pic }) => {
    let bkgUrl = `url(${pic})`;
    return (
        <Link href={link} isExternal textDecoration="none" _hover={{}}>
            <Box bg="#FDFDFD" shadow="md" borderRadius="10px" textAlign="center" margin="0 auto" _hover={{ bg: 'gray.100' }} transition='all 0.1s' p={4}>
                <Box h="15rem" bgImage={bkgUrl} bgPosition="center"
                    bgRepeat="no-repeat" backgroundSize="cover"
                    rounded='md'>
                </Box>
                <Text fontSize="xl" color="text.dark" fontWeight="bold" mt='3'>{name}</Text>
            </Box>
        </Link>

    )
}
