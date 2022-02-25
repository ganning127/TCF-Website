import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { MedSep } from '../components/Separators/MedSep'
import { SubSectionTwoText } from '../components/Landing/SubSectionTwoText'
import { FullPageTabs } from '../components/Tabs/FullPageTabs'
import Positions from '../data/teams.json'

const title = "Join - The Coding Foundation"
const description = "Positions await! Here at The Coding Foundation, we’re looking for new competent and passionate members who can help The Coding Foundation make a more positive impact towards providing free and better coding education."
const url = "https://thecodingfoundation.org/join"

export default function About() {
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

            <NavBar active="opportunities" />


            <Container maxW="container.xl">
                <SubSectionTwoText
                    title="Opportunities"
                    p1="Positions await! Here at The Coding Foundation, we’re looking for new competent and passionate members who can help The Coding Foundation make a more positive impact towards providing free and better coding education."
                    p2="Sincerity. Productivity. Perfection. This is what we look for in applicants!"
                />

                <MedSep />

                <FullPageTabs
                    data={Positions}
                />
            </Container>
            <Footer />

        </>
    )
}
