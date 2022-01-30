import { Heading, Box, Img, HStack} from '@chakra-ui/react'

export const HeadingWithLogo = ({ title, themeColor, logo }) => {
    return (
        <HStack mx="auto" justifyContent="center" my="20">
          {title && < Heading as="h1" size="2xl" color={themeColor}>{title}</Heading>}
          <Img src={logo} alt="pic" mx="auto" maxH="75px" />
        </HStack>
    )
}