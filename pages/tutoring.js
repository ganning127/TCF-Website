import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { TwoColWithPic } from '../components/Landing/TwoColWithPic'
import { MedSep } from '../components/Separators/MedSep'
import { HeadingWithDesc } from '../components/Headings/HeadingWithDesc'
import { TeamGrid } from '../components/Grid/TeamGrid'
import { SubSectionTwoButtons } from '../components/Landing/SubSectionTwoButtons'
import { TwoColTextOneButton } from '../components/TwoCol/TwoColTextOneButton'
import { TwoColPicWithHeader } from '../components/TwoCol/TwoColPicWithHeader'

export default function Tutoring() {
    return (
        <>
            <Head>
                <title>Tutoring - The Coding Foundation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar active="about" />


            <Container maxW="container.xl">
                <TwoColTextOneButton
                    title="Tutoring"
                    desc="The Coding Foundation's team of dedicated volunteers offers free one-on-one coding lessons for you! Sign up Now to Be a student."
                    buttonText="Sign Up For Tutoring!"
                    buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSfC5Y2x9G-gQU3IkN3LcsLYLAsZm5HhQrTEw2I0i4xtAY5ItA/viewform"
                    pic="/tutoring1.png"
                    alignText="right"
                />

                <MedSep />

                <TwoColTextOneButton
                    title="Looking to Tutor"
                    desc="Passionate about coding? Want to teach others or add your knowledge to the database?"
                    buttonText="Join Us!"
                    buttonLink="/mentor/apply"
                    pic="/tutoring2.png"
                    alignText="left"
                />

<TwoColPicWithHeader
                    title="Workshops"
                    desc1="The Coding Foundation's team if dedicated volunteers offers free virtual coding workshops for you!"
                    desc2="Workshops made just for you!"
                    pic="/workshops.png"
                    alignText="left"
                />  

            </Container>
            <Footer />

        </>
    )
}
