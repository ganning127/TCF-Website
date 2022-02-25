import { NextSeo } from 'next-seo'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { MedSep } from '../components/Separators/MedSep'
import { TwoColTextOneButton } from '../components/TwoCol/TwoColTextOneButton'

const title = "Tutoring - The Coding Foundation"
const description = "The Coding Foundation's team of dedicated volunteers offers free one-on-one coding lessons for you! Sign up now to Be a student or teacher!"
const url = "https://thecodingfoundation.org/tutoring"

export default function Tutoring() {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description,
                    images: [
                        {
                            url: 'https://i.imgur.com/XUZTGyH.png',
                            width: 800,
                            height: 600,
                            alt: 'The Coding Foundation&apos;s logo next to the text "The Coding Foundation"',
                            type: 'image/jpeg',
                        },
                    ],
                }}
            />

            <NavBar active="resources" />


            <Container maxW="container.xl">
                <TwoColTextOneButton
                    title="Tutoring"
                    desc="The Coding Foundation's team of dedicated volunteers offers free one-on-one coding lessons for you! Sign up now to Be a student."
                    buttonText="Sign Up For Tutoring!"
                    buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSfC5Y2x9G-gQU3IkN3LcsLYLAsZm5HhQrTEw2I0i4xtAY5ItA/viewform"
                    pic="/tutoring1.png"
                    alignText="right"
                />

                <MedSep />

                <TwoColTextOneButton
                    title="Looking to Tutor"
                    desc="Passionate about coding? Want to teach others or add your knowledge to the database?"
                    buttonText="Join Us!"
                    buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScNvz1utMsB0T_RCO7qFirGWxqQACwwBBjRvmjsomQCGmRkjQ/viewform"
                    pic="/tutoring2.png"
                    alignText="left"
                />
            </Container>
            <Footer />

        </>
    )
}
