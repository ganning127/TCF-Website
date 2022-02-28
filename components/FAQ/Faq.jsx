import { Accordion, Heading, AccordionItem, Text, AccordionButton, AccordionPanel, Box, AccordionIcon } from '@chakra-ui/react'

import Posts from "../../data/faq.json"

export const Faq = () => {
    return (
        <>
            <Box>
                <Heading as="h1" size="2xl" color="blue.shade.hover" mb="4" fontWeight="bold"> FAQ</Heading>
                <Text fontSize='lg'>Any questions? Look here. Here are some frequently asked questions from students.</Text>
            </Box>
            <br />
            <Accordion allowToggle>
                {Posts.map((data, i) => {
                    return (
                        <AccordionItem key={i}>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'blue.shade', color: 'white' }}>
                                    <Box flex='1' textAlign='left'>
                                        {data.question}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {data.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </>
    )
}