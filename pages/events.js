import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { MedSep } from '../components/Separators/MedSep'
import { HeadingWithDesc } from '../components/Headings/HeadingWithDesc'
import { TwoColWithLongDesc } from '../components/TwoCol/TwoColWithLongDesc'
import { HeadingWithLogo } from '../components/Headings/HeadingWithLogo'
import { SubSection } from '../components/Landing/SubSection'
import { TwoColCards } from '../components/TwoCol/TwoColCards'

import EventsJson from '../data/events.json'
export default function Events() {
    return (
        <>
            <Head>
                <title>Events - The Coding Foundation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar active="opportunities" />


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

                {EventsJson.length > 0 && (<><HeadingWithDesc>Upcoming Events</HeadingWithDesc>
                    <TwoColCards data={EventsJson} /></>)
                }


                <HeadingWithLogo
                    title="Join Our Discord Community"
                    logo="/discord.png"
                    themeColor="blue.dark.shade"
                />

                <SubSection
                    desc="Join our Discord Server to attend upcoming workshops, tutoring, and many more events!"
                    desc2="This is completely free for anyone to join the server and you can explore your passion at the same time, meet like minded people across the world!"
                    buttonText="Join now"
                    buttonLink="https://discord.gg/5gmWzdR5Ud"
                    themeColor="blue.dark.shade"
                    themeColorHover="blue.darkShadeHover"
                />

                <MedSep />



                <MedSep />
                <Footer />
            </Container>

        </>
    )
}
