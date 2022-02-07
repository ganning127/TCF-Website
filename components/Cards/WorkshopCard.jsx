import { Box, Text, Link, Image } from "@chakra-ui/react";

export const WorkshopCard = ({ name, link, pic }) => {
    return (
        <Link href={link} isExternal textDecoration="none">
            <Box bg="#FDFDFD" shadow="md" borderRadius="10px" textAlign="center" p="4" width="480px" margin="0 auto">
                <Image 
                src={pic}
                alt={name}
                objectFit="cover"
                height="300px"
                width="100%"
                />
                <Text lineHeight="180px" fontSize="4xl" color="text.dark" fontWeight="bold">{name}</Text>
            </Box>
        </Link>
        
    )
}
