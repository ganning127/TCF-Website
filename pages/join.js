import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { MedSep } from '../components/Separators/MedSep'
import { HeadingWithDesc } from '../components/Headings/HeadingWithDesc'
import { SubSectionTwoText } from '../components/Landing/SubSectionTwoText'
import { FullPageTabs } from '../components/Tabs/FullPageTabs'
import Positions from '../data/teams.json'
import { AiOutlineTeam } from "react-icons/ai";

export default function About() {
    return (
        <>
        <NextSeo
          label = 'Join Our Team'
          description = 'Join a team of talented developers, designers, and project managers.'
          href = '/join'
          icon = {<AiOutlineTeam />}
        />
            <Head>
                <title>Join - The Coding Foundation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

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
