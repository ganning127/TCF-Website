import { SimpleGrid, Box, Text, Img, Link } from '@chakra-ui/react'

const data = require('../../data/dummy-data.json');

export const TwoColCards = () => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign="center" justifyContent="center">
            <Box bg="#FDFDFD" shadow="lg" rounded="xl" maxW="400px" p={5} mx="auto">
                <Img src={data[0].img} alt="pic"/>
                <Text color="text.dark" fontSize="md" my="3" >{data[0].date}</Text>
                <Text color="text.dark" fontSize="xl" my="3" >{data[0].title}</Text>
                <Text color="text.dark" fontSize="md" my="3" >Description</Text>
                <Text color="text.dark" fontSize="md" my="3" >{data[0].desc}</Text>
                <Text color="text.dark" fontSize="md" my="3" >{data[0].info}</Text>
                <Link href={data[0].link} color="blue.shade">Learn More</Link>
            </Box>

            <Box bg="#FDFDFD" shadow="lg" rounded="xl" maxW="400px" p={5} mx="auto">
                <Img src={data[1].img} alt="pic"/>
                <Text color="text.dark" fontSize="md" my="3" >{data[1].date}</Text>
                <Text color="text.dark" fontSize="xl" my="3" >{data[1].title}</Text>
                <Text color="text.dark" fontSize="md" my="3" >Description</Text>
                <Text color="text.dark" fontSize="md" my="3" >{data[1].desc}</Text>
                <Text color="text.dark" fontSize="md" my="3" >{data[1].info}</Text>
                <Link href={data[1].link} color="blue.shade">Learn More</Link>
            </Box>
        </SimpleGrid>
    )
}