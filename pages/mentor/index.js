import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../../components/NavBar/index.tsx'
import { Footer } from '../../components/Footer/index.tsx'
import { Landing } from '../../components/Landing/index'
import { MedSep } from '../../components/Separators/MedSep'
import { HeadingWithDesc } from '../../components/Headings/HeadingWithDesc'
import { TwoColMentor } from '../../components/TwoCol/TwoColMentor'
import { TwoColBoxWithButton } from '../../components/TwoCol/TwoColBoxWithButton'

const title = "Mentor - The Coding Foundation"
const description = "Apply to become a mentor on The Coding Foundation today to create lasting positive change in the lives of many and enlighten students coding ambitions into reality."
const url = "https://thecodingfoundation.org/mentor"

export default function Mentor() {
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
            <NavBar active="mentor" />


            <Container maxW="container.xl">
                <Landing
                    title="Mentor with Us"
                    desc="Teach, Learn, Inspire"
                    pic="/mentor.png"
                    button1="Apply"
                    link1="https://docs.google.com/forms/d/e/1FAIpQLScNvz1utMsB0T_RCO7qFirGWxqQACwwBBjRvmjsomQCGmRkjQ/viewform"
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

                <MedSep />

                <HeadingWithDesc>Responsibilites</HeadingWithDesc>

                <TwoColBoxWithButton
                    title1="Requirements"
                    desc1="Regularly schedules meetings with the students."
                    desc1_2="Perform tasks in a timely manner and consistently meet deadlines."
                    desc1_3="Strong communication, public speaking, and time management skills."

                    title2="Responsibilites"
                    desc2="Communicates effectively with students."
                    desc2_2="Experience in programming (Java, Python, etc.)"
                    desc2_3="Self-motivated team player who is invested in teaching others about computer programming"

                    buttonLink='https://docs.google.com/forms/d/e/1FAIpQLScNvz1utMsB0T_RCO7qFirGWxqQACwwBBjRvmjsomQCGmRkjQ/viewform'
                    buttonText='Jump To Application'

                />


                <Footer />
            </Container>

        </>
    )
}
