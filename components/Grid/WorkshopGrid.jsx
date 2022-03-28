import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { WorkshopCard } from "../Cards/WorkshopCard";
import Fade from 'react-reveal'
export const WorkshopGrid = ({ workshops }) => {
    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {workshops.map((item, index) => {
                    return (
                        <Fade right cascade key={index}>
                            <Box >
                                <WorkshopCard {...item} />
                            </Box>
                        </Fade>
                    )
                }
                )}
            </SimpleGrid>
        </>
    )
}