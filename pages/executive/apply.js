import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { ExecBoardOpps } from '../../components/Applications/ExecBoardOpps'
import { NavBar } from '../../components/NavBar/index.tsx'
import { Footer } from '../../components/Footer/index.tsx'
import { MedSep } from '../../components/Separators/MedSep'

export default function Executive() {
    return (
        <>
            <Head>
                <title>Executive Board Opportunities - The Coding Foundation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar active="Opportunities" />

            <Container maxW="container.xl">

                <ExecBoardOpps />

                <Footer />
            </Container>

        </>
    )
} 