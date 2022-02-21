import { Box, Text, Img, Link, chakra } from "@chakra-ui/react";

export const EventCard = ({ pic, title, desc, link, price, time }) => {
    return (
        <Box bg="#FDFDFD" shadow="lg" rounded="xl" maxW="400px" p={5} mx="auto">

            <Img src={pic} alt="pic" borderRadius='10px' border='1px solid' borderColor='gray.200' />
            <Text color="text.dark" fontWeight='bold' fontSize="2xl" my="3" >{title}</Text>
            <Text color="text.dark" fontSize="md" my="3" >{desc}</Text>

            <Box>
                <Text color="text.dark" fontSize="lg" my="3" fontWeight='bold'>Price: <chakra.span fontWeight="normal">{price}</chakra.span></Text>
                <Text color="text.dark" fontSize="lg" my="3" fontWeight='bold'>Time: <chakra.span fontWeight="normal">{time}</chakra.span></Text>
            </Box>

            <Link href={link} isExternal _hover={{}}>
                <Text color="blue.shade" fontSize="xl" mt="3" _hover={{ color: 'blue.shade.hover' }}>Sign Up</Text>
            </Link>
        </Box>
    )
}