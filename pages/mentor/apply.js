import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../../components/NavBar/index.tsx'
import { Footer } from '../../components/Footer/index.tsx'
import { Landing } from '../../components/Landing/index'
import { MedSep } from '../../components/Separators/MedSep'
import { HeadingWithDesc } from '../../components/Headings/HeadingWithDesc'
import { TwoColMentor } from '../../components/TwoCol/TwoColMentor'
import { TwoColBoxWithButton } from '../../components/TwoCol/TwoColBoxWithButton'
import { MentorApplication } from '../../components/Applications/MentorApplication'
export default function Mentor() {
    return (
        <>
            <Head>
                <title>Mentor Application - The Coding Foundation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar active="mentor" />


            <Container maxW="container.xl">

                <HeadingWithDesc desc="Take a deep breath, take your time, and make sure to check your email daily for updates!">Mentor Application</HeadingWithDesc>


                <MentorApplication />


                <Footer />
            </Container>

        </>
    )
}
