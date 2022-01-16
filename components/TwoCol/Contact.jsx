import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    SimpleGrid,
    Input,
    Img,
    VStack,
    StackDivider,
    Textarea,
    Button,
    Box,
} from '@chakra-ui/react'
import { HeadingWithDesc } from '../Headings/HeadingWithDesc';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Contact = (props) => {
    return (
        <>
            <HeadingWithDesc desc="Any additional questions? Interested in starting a chapter? Fill out this form!">
                Contact Us
            </HeadingWithDesc>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign="center" justifyContent="center" alignItems="center">
                <Box mx="auto" w="100%">
                    <Formik
                        initialValues={{ name: 'Sasuke' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2))
                                actions.setSubmitting(false)
                            }, 1000)
                        }}
                    >
                        <Form>
                            <VStack
                                divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'
                            >
                                <FormControl isRequired borderRadius="20" color="gray.900">
                                    <Input id='name' placeholder='Name' color="gray.900" />
                                </FormControl>

                                <FormControl isRequired borderRadius="20" color="gray.900">
                                    <Input id='email' type="email" placeholder='Email' color="gray.900" />
                                </FormControl>


                                <FormControl isRequired borderRadius="20" color="gray.900">
                                    <Input id='subject' placeholder='Subject' color="gray.900" />
                                </FormControl>
                                <FormControl isRequired borderRadius="20" color="gray.900">
                                    <Textarea placeholder='Message' rows="5" />
                                </FormControl>

                                <Button color="white" bg="blue.shade" _hover={{ bg: "blue.shade.hover" }} type="submit">Submit</Button>
                            </VStack>
                        </Form>
                    </Formik>
                </Box>

                <Box mx="auto">
                    <Img src="/contact.png" alt="pic" maxH="450px" />
                </Box>
            </SimpleGrid >

        </>

    )
}