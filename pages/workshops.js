import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { TwoColPicWithHeader } from '../components/TwoCol/TwoColPicWithHeader'
import { MedSep } from '../components/Separators/MedSep'
import { HeadingWithDesc } from '../components/Headings/HeadingWithDesc'
import WorkshopsJson from '../data/workshops.json'
import { WorkshopGrid } from '../components/Grid/WorkshopGrid'
import { MdComputer } from 'react-icons/md'

export default function Workshops() {
    console.log(WorkshopsJson)
    return (
        <>
        <NextSeo
        label = 'Workshops'
        description = 'Learn to code through group lessons!'
        href = '/workshops'
        icon = {<MdComputer />}
         />

        <Head>
            <title>Workshops - The Coding Foundation</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        

            <NavBar active="resources" />
        

            <Container maxW="container.xl">



                <TwoColPicWithHeader
                    title="Workshops"
                    desc1="The Coding Foundation's team of dedicated volunteers offers free virtual coding workshops for you!"
                    desc2="Workshops made just for you!"
                    pic="/workshops2.png"
                    alignText="left"
                />

                <MedSep />

                <HeadingWithDesc desc='All of our workshops are taught by our mentors and created by us!'>
                    Workshop Recordings
                </HeadingWithDesc>

                <WorkshopGrid
                    workshops={WorkshopsJson}
                />
            </Container>
            <MedSep />

            <Footer />
        </>
    )
}