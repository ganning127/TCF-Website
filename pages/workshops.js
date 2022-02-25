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

const title = "Workshops - The Coding Foundation"
const description = "The Coding Foundation's team of dedicated volunteers offers free virtual coding workshops for you!"
const url = "https://thecodingfoundation.org/workshops"

export default function Workshops() {
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



                <TwoColPicWithHeader
                    title="Workshops"
                    desc1="The Coding Foundation's team of dedicated volunteers offers free virtual coding workshops for you!"
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