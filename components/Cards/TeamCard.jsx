import { Box, Text, WrapItem, Avatar } from "@chakra-ui/react";
import { useColorModeValue } from '@chakra-ui/react'
export const TeamCard = ({ name, title, about, pic }) => {
    const textColor = useColorModeValue('text.dark', 'text.light')
    const bgColor = useColorModeValue('bkg.light', 'bkg.dark')
    const shadowColor = useColorModeValue('lg', 'dark-lg')
    return (
        <Box bg={bgColor} shadow={shadowColor} borderRadius="10px" textAlign="center" p="4">
            <WrapItem >
                <Avatar size='2xl' name={name} src={pic} mx="auto" bg='transparent' />
            </WrapItem>

            <Text color={textColor} fontWeight="bold">{name}</Text>
            <Text color="blue.shade" fontWeight="bold" my="2" fontStyle="italic">{title}</Text>
            <Text color={textColor} fontWeight="normal">{about}</Text>

        </Box >
    )
}