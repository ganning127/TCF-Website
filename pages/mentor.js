import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { Landing } from '../components/Landing/index'
import { MedSep } from '../components/Separators/MedSep'
import { TwoColText } from '../components/TwoCol/TwoColText'
import { TwoColTextWithPicLeft } from '../components/TwoCol/TwoColTextWithPicLeft'
import { TwoColTextWithPicRight } from '../components/TwoCol/TwoColTextWithPicRight'
import { HeadingWithDesc } from '../components/Headings/HeadingWithDesc'
import { TwoColPicWithTextAndButton } from '../components/TwoCol/TwoColPicWithTextAndButton'
import { TwoColPicWithTextAndButtonRight } from '../components/TwoCol/TwoColPicWithTextAndButtonRight'
import { Testimonials } from '../components/Testimonials'
import { FullButtonWithPic } from '../components/TwoCol/FullButtonWithPic'
import { SubSection } from '../components/Landing/SubSection'
import { Contact } from '../components/TwoCol/Contact'
import { TwoColMentor } from '../components/TwoCol/TwoColMentor'
export default function Mentor() {
    return (
        <>
            <Head>
                <title>The Coding Foundation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar active="home" />


            <Container maxW="container.xl">
                <Landing
                    title="Mentor with Us"
                    desc="Teach, Learn, Inspire"
                    pic="/mentor.png"
                    button1="Apply"
                    link1="/apply"
                />

                <MedSep />

                <HeadingWithDesc>Ready to Inspire?</HeadingWithDesc>

                <TwoColMentor
                    pic="apply_mentor.png"
                    desc1="Apply to become a mentor on The Coding Foundation today to create lasting positive change in the lives of many and enlighten students coding ambitions into reality. "
                    desc2="The Coding Foundation is a non-profit organization that uplifts students from all backgrounds with ambitions in coding. Our mission is to bring FREE, effective & encouraging CS mentoring to the next generation of innovators to foster a love for computer science."
                    desc3="You will gain a leadership experience that looks great on resumes and college applications, receive volunteer hours, and referrals while expanding your love of STEM!"
                    desc4="Mentors are given the option of holding a position for a seasonal basis or having a permanent position on the team. For fall seasonal commitments, the term starts on October 1st and ends November 31th. Applications close September 30th, 2021 at 11:59 PM EST"
                />


                <Footer />
            </Container>

        </>
    )
}
