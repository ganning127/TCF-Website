
import {
    FormControl,
    Text,
    SimpleGrid,
    Input,
    Img,
    Link,
    FormLabel,
    VStack,
    StackDivider,
    Textarea,
    Button,
    Box,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import { HeadingWithDesc } from '../Headings/HeadingWithDesc';
import { MedHeading } from '../Headings/MedHeading';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';

export const MentorApplication = ({ }) => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box mx="auto" w="100%">
                {!isSubmitted && <Formik
                    initialValues={{ name: 'Sasuke' }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                        }, 1000)
                    }}
                >
                    <Form onSubmit={handleSubmit}>

                        <VStack
                            divider={<StackDivider borderColor='gray.200' />}
                            spacing={10}
                            align='stretch'
                        >

                            <Fade>
                                <Box>
                                    <MedHeading desc="We'll never share your peresonal info with anyone.">Basic Information</MedHeading>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt="4">
                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='firstname' color="blue.dark">First Name</FormLabel>
                                            <Input id='firstname' name='firstname' placeholder='e.g. John' color="gray.900" />
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='lastname' color="blue.dark">Last Name</FormLabel>
                                            <Input id='lastname' type="text" placeholder='e.g. Doe' color="gray.900" />
                                        </FormControl>



                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='age' color="blue.dark">Age</FormLabel>
                                            <NumberInput defaultValue={12} min={2} max={100}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900" >
                                            <FormLabel htmlFor='email' color="blue.dark">Email</FormLabel>
                                            <Input id='email' type="text" placeholder='e.g. example@gmail.com' color="gray.900" />
                                        </FormControl>


                                        <FormControl isRequired borderRadius="20" color="gray.900" >
                                            <FormLabel htmlFor='tel' color="blue.dark">Phone</FormLabel>
                                            <Input id='tel' type="tel" placeholder='e.g. (123) 456-789' color="gray.900" />
                                        </FormControl>


                                        <FormControl isRequired borderRadius="20" color="gray.900" maxW='800px' mx='auto'>
                                            <FormLabel htmlFor='school' color="blue.dark">Internship Duration</FormLabel>
                                            <Select placeholder="Select program" id='prog'>
                                                <option value="seasonal">Seasonal</option>
                                                <option value="permanent">Permanent</option>
                                            </Select>
                                        </FormControl>

                                    </SimpleGrid>


                                </Box>
                            </Fade>

                            <Fade>
                                <Box>
                                    <MedHeading desc="We'll never share your peresonal info with anyone.">Academic Information</MedHeading>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt="4">
                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='school' color="blue.dark">School</FormLabel>
                                            <Input id='school' type="text" placeholder='e.g. Hogwarts' color="gray.900" />
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='gpa' color="blue.dark">GPA (Unweighted)</FormLabel>
                                            <Input id='gpa' type="text" placeholder='e.g. 3.8' color="gray.900" />
                                        </FormControl>

                                        <FormControl borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='transcript' color="blue.dark">Transcript (optional)</FormLabel>
                                            <Input id='transcript' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" />
                                        </FormControl>


                                        <FormControl borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='resume' color="blue.dark">Resume (optional)</FormLabel>
                                            <Input id='resume' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" />
                                        </FormControl>
                                    </SimpleGrid>
                                </Box>
                            </Fade>

                            <Fade>
                                <Box>
                                    <MedHeading desc="We are looking for content, not grammar.">Essays</MedHeading>
                                    <SimpleGrid columns={1} spacing={5} mt="4">
                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='whyJoinEssay' color="blue.dark">Why Do You Want to join The Coding Foundation as a mentor? (300 words max) </FormLabel>
                                            <Textarea id='whyJoinEssay' type="text" placeholder='Start typing here..' color="gray.900" rows={15} />
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='priorEssay' color="blue.dark">Describe your prior extracurricular and professional experiance for this position (300 words max)</FormLabel>
                                            <Textarea id='priorEssay' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" rows={15} />
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='goalEssay' color="blue.dark">If you are successful as a mentor, what is one goal you hope to achieve at The Coding Foundation? (300 words max)</FormLabel>
                                            <Textarea id='goalEssay' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" rows={15} />
                                        </FormControl>

                                        <FormControl isRequired borderRadius="20" color="gray.900">
                                            <FormLabel htmlFor='langEssay' color="blue.dark">List all the programming languages are proficient at and are willing to share your knowledge for: (300 words max)</FormLabel>
                                            <Textarea id='langEssay' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" rows={15} />
                                        </FormControl>
                                    </SimpleGrid>

                                </Box>
                            </Fade>

                            <Fade>
                                <Box textAlign="center">
                                    <MedHeading desc="Let us know anything else you want here!">Additional Information</MedHeading>
                                    <FormControl isRequired borderRadius="20" color="gray.900">
                                        <FormLabel htmlFor='extraInfo' color="blue.dark">A chance to talk about anything that you haven&apos;t already!</FormLabel>
                                        <Textarea id='extraInfo' type="text" placeholder='e.g. https://docs.google.com' color="gray.900" rows={15} />
                                    </FormControl>

                                    <Button color="white" bg="blue.shade" _hover={{ bg: "blue.shade.hover" }} fontWeight="bold" fontSize="xl" type="submit" mt={5}>Submit</Button>
                                </Box>


                            </Fade>




                        </VStack>

                        <Text bg='red.100' mt='4' p='1' rounded='lg' d='none' id='error'>There was an error, please refresh the page and try again!</Text>
                    </Form>
                </Formik>}

                {isSubmitted && <Text bg='blue.shade' color='white' p='1' rounded='lg' fontSize="xl">We have received for your message! We will get back to you as soon as possible!</Text>}
            </Box>

        </>

    )
}