import {
  Button,
  chakra,
  HTMLChakraProps,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Spinner
} from '@chakra-ui/react'
import { Formik, Form } from "formik";
import React, { useState } from "react"
import { FooterHeading } from './FooterHeading.tsx'

export const SubscribeForm = (props: HTMLChakraProps<'form'>) => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)


  const subscribeEmail = async event => {
    event.preventDefault();
    let email = document.getElementById('emailFooter').value;

    setLoading(true);

    const res = await fetch(`/api/subscribe`,
      {
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST'
      }
    )

    console.log(`Subscribing ${email} to newsletter...`)
    let result = await res.json()
    setSubmitted(true);
    setLoading(false);
  }
  return (
    <>     <chakra.form {...props} onSubmit={subscribeEmail}>
      <Stack spacing="4">
        <FooterHeading color="text.dark">Subscribe to our newsletter</FooterHeading>
        {!submitted && <>
          <Text>Never miss another event from TCF!</Text>
          <Stack spacing="4" direction={{ base: 'column', md: 'row' }} >
            <Input
              id="emailFooter"
              placeholder="Enter your email"
              type="email"
              required
              focusBorderColor="blue.shade"
              _placeholder={{
                opacity: 1,
                color: 'gray.500',
              }}
            />
            <Button
              type="submit"
              // colorScheme="blue"
              bg="blue.shade"
              _hover={{
                bg: 'blue.shade.hover',
              }}
              color="white"
              flexShrink={0}
              width={{ base: 'full', md: 'auto' }}
            >

              {loading &&
                <Spinner mr="2" />}

              Subscribe
            </Button>
          </Stack>
        </>}
        {submitted && <Text>Thanks for subscribing, well see you soon 👋</Text>}
      </Stack>
    </chakra.form>
    </>
  )
}