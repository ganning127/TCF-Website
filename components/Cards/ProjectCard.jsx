import { Box, Text, WrapItem, Avatar, Img } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
export const ProjectCard = ({ title, desc, link, linkText, img }) => {
  const textColor = useColorModeValue("text.dark", "text.light");
  const bgColor = useColorModeValue("bkg.light", "bkg.dark");
  const shadowColor = useColorModeValue("lg", "dark-lg");
  return (
    <Box
      bg={bgColor}
      shadow={shadowColor}
      borderRadius="10px"
      textAlign="center"
      p="4"
    >
      <Img src={img} maxH="300px" rounded="md" mx="auto" />

      <Text color="blue.shade" fontWeight="bold" my="2" fontSize="2xl">
        {title}
      </Text>
      <Text color={textColor} fontWeight="normal">
        {desc}
      </Text>
    </Box>
  );
};
