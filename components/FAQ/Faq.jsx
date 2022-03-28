import { Accordion, Heading, AccordionItem, Text, AccordionButton, AccordionPanel, Box, AccordionIcon } from '@chakra-ui/react'
import { HeadingWithDesc } from '../Headings/HeadingWithDesc'
import Posts from "../../data/faq.json"
import Fade from 'react-reveal'
export const Faq = () => {
    return (
        <>

            <HeadingWithDesc desc="If you don't find your answer here, send us an email at thecodingfoundation@gmail.com!">FAQ</HeadingWithDesc>
            <Accordion allowToggle mt={4}>
                {Posts.map((data, i) => {
                    return (
                        <Fade top cascade key={i}>
                            <AccordionItem >
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
                        </Fade>
                    )
                })}
            </Accordion>
        </>
    )
}