import { SimpleGrid, Box, Text, Img, Link } from '@chakra-ui/react'
import { EventCard } from '../Cards/EventCard'

export const TwoColCards = ({ data }) => {

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={20} mx="auto" textAlign="center" justifyContent="center">
            {data.map((item, i) => {
                return (
                    <EventCard key={i} pic={item.img} title={item.title} desc={item.desc} link={item.link} price={item.price} time={item.time} />
                )
            })}
        </SimpleGrid>
    )
}