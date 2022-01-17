import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { TwoColWithPic } from '../components/Landing/TwoColWithPic'
import { MedSep } from '../components/Separators/MedSep'
import { HeadingWithDesc } from '../components/Headings/HeadingWithDesc'
import { TeamGrid } from '../components/Grid/TeamGrid'
import { SubSectionTwoButtons } from '../components/Landing/SubSectionTwoButtons'

export default function About() {
    return (
        <>
            <Head>
                <title>The Coding Foundation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar active="about" />


            <Container maxW="container.xl">
                <TwoColWithPic
                    pic="/about.png"
                    title="About Us"
                    desc="The Coding Foundation aims to bring free, effective and encouraging computer science education for all students in different backgrounds. The Coding Foundation offers free mentoring to foster a love in coding technology for kids. We also offer free resources for students to explore the field of STEM and get a head start on their ambitions. Through fun and engaging activities, The Coding Foundation ensures students become inspired to work with technology in the future."
                    button1="Join Us"
                    link1="/TODO"
                    button2="Want to Mentor?"
                    link2="/TODO"
                />

                <MedSep />

                <HeadingWithDesc desc="Meet our leaders who aspire to bring forward our mission and inspire others to work with technology! ">
                    Meet The Team
                </HeadingWithDesc>

                <TeamGrid />

                <MedSep />

                <SubSectionTwoButtons
                    title="Interns List"
                    desc="The Coding Foundation is committed to a work environment in which all individuals are treated with respect and dignity. Each individual has the right to work in a professional atmosphere that promotes equal opportunities and prohibits unlawful discriminatory practices, including any sort of harrasement."
                    button1="View Interns List"
                    link1="/TODO"
                    button2="Join Us"
                    link2="/TODO"
                />
                <MedSep />

            </Container>
            <Footer />

        </>
    )
}
