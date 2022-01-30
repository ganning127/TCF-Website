import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { Landing } from '../components/Landing/index'
import { MedSep } from '../components/Separators/MedSep'
import { HeadingWithDesc } from '../components/Headings/HeadingWithDesc'
import { TwoColMentor } from '../components/TwoCol/TwoColMentor'
import { TwoColWithLongDesc } from '../components/TwoCol/TwoColWithLongDesc'
import { HeadingWithLogo } from '../components/Headings/HeadingWithLogo'
import { SubSection } from '../components/Landing/Subsection'

export default function Events() {
    return (
        <>
            <Head>
                <title>The Coding Foundation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar active="home" />


            <Container maxW="container.xl">
                <HeadingWithDesc desc="Opportunities Awaiting!">
                    Events And Community
                </HeadingWithDesc>



                <TwoColWithLongDesc
                    pic='/events.png'
                    desc1="Our Organization features variety of events for both high school students and non-high school sutdents. Sign up for one event to explore your passion and interest for different areas of interests!"
                    desc2="On top of that Join our discord server to get in touch with like minded people like you, where you could post oppurtunities for your ogranization and many more!"
                />
  <MedSep />
                
        <HeadingWithLogo
                title="Join Our Discord Community"
                logo="/discord.png"
                themeColor="blue.dark.shade"
                />



        <SubSection
        desc="Join our Discord Server to attend upcoming workshops, tutoring, and many more events!"
        desc2="This is completely free for anyone to join the server and you can explore your passion at the same time, meet like minded people across the world!"
        desc3="Click the button below to take the next huge step of your life!"
        buttonText="Join now"
        buttonLink="https://discord.gg/HbDbXyWVM2"
        themeColor="blue.dark.shade"
        themeColorHover="blue.darkShadeHover"
        />
        
                <MedSep />
                <Footer />
            </Container>

        </>
    )
}
