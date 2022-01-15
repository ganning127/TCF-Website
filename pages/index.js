import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { Landing } from '../components/Landing/index'
export default function Home() {
  return (
    <>
      <Head>
        <title>The Coding Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />


      <Container maxW="container.xl">
        <Landing
          title="The Coding Foundation"
          desc="Empowering Students Coding Ambititons to 
          Reality"
          button1="Sign Up"
          link1="/signup"
          button2="Learn More"
          link2="/about"
          pic="/home.png"
        />
        <Footer />
      </Container>

    </>
  )
}
