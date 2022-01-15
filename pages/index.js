import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <NavBar />
      <Container maxW="container.xl">

      </Container>
    </>
  )
}
