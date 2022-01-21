import Head from 'next/head'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { CenteredHeadingWithDesc } from '../components/Headings/CenteredHeadingWithDesc'
import { Contact } from '../components/TwoCol/Contact'

export default function Join() {
    return (
        <>
            <Head>
                <title>The Coding Foundation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar active="join" />

            <CenteredHeadingWithDesc 
            desc1="Poistions await! Here at The Coding Foundation, we're looking for new competent and passionate members who can help The Coding Foundation make a more positive impact towards providing free and better coding education. "
            desc2="Sincerity.Productivity.Perfection "
            desc3="This is what we look for in applicants! ">
                Oppurtunities 
            </CenteredHeadingWithDesc>



            <Footer />
            
            </>

    )
}