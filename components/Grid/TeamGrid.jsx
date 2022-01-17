import { SimpleGrid, Box } from "@chakra-ui/react";
import { TeamCard } from "../Cards/TeamCard";
import execBoard from "../../data/execBoard.json"

export const TeamGrid = () => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
            {execBoard.map((item, index) => {
                return (
                    <Box key={index}>
                        <TeamCard {...item} />
                    </Box>
                )
            })}
        </SimpleGrid>
    )
}