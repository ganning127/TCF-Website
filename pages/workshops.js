import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { TwoColPicWithHeader } from '../components/TwoCol/TwoColPicWithHeader'
import { MedSep } from '../components/Separators/MedSep'

export default function Workshops() {
    return (
        <>
            <Head>
                <title>Workshops - The Coding Foundation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container maxW="container.xl">

            <NavBar active="workshops" />

                <TwoColPicWithHeader
                    title="Workshops"
                    desc1="The Coding Foundation's team of dedicated volunteers offers free virtual coding workshops for you!"
                    desc2="Workshops made just for you!"
                    pic="/workshops2.png"
                    alignText="left"
                /> 
            </Container>
            <MedSep />
  
            <Footer /> 
        </>
    )
}