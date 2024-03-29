import { NextSeo } from 'next-seo'
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


const title = "The Coding Foundation"
const description = "Empowering Students Coding Ambitions to Reality. We offer free one-on-one tutoring, workshops, and mentorship to help students learn to code. No previous experience required!"
const url = "https://thecodingfoundation.org/"
// hello
export default function Home() {
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

      <NavBar active="home" />


      <Container maxW="container.xl">
        <Landing
          title="The Coding Foundation"
          desc="Empowering Students Coding Ambititons to 
          Reality"
          button1="Sign Up"
          link1="https://forms.gle/p7sWFfqNjPdbkeXe6"
          button2="Learn More"
          link2="/about"
          pic="/home.png"
        />


        <MedSep />

        <TwoColText
          title1="Our Mission"
          desc1="The Coding Foundation aims to bring free, effective and encouraging CS education for all students. To do so, The Coding Foundation offers free mentoring to foster a love in coding technology for kids!"
          title2="Who Are We?"
          desc2="TCF is a nonprofit organization that empowers students from all backgrounds with ambitions in coding. Our mission is to bring FREE, effective & encouraging CS mentoring to the next generation of innovators!"
        />

        <MedSep />

        <HeadingWithDesc desc="Let’s Get Started">
          Welcome to the future of Coding Classes
        </HeadingWithDesc>

        <TwoColTextWithPicLeft
          pic="/why_us.png"
          title="Why Us?"
          desc="The Coding Foundation aims to bring free, effective and encouraging CS education for all students in different backgrounds. To do so, The Coding Foundation offers free mentoring to foster a love in coding technology for kids. "
        />

        <TwoColTextWithPicRight
          title="Build the future"
          desc="In addition, we also offer free resources for students to explore the field of STEM and get a head start on their ambitions. Through fun and engaging activities, The Coding Foundation ensures that students become inspired to work with technology in the future."
          pic="/credit_cards.png"
        />

        <MedSep />

        <HeadingWithDesc desc="Let’s Get Started">
          What do we offer?
        </HeadingWithDesc>

        <TwoColPicWithTextAndButton
          title="Workshops"
          desc="Our workshops cultivate an interest for coding for students through comprehensive and interactive activities. It is an opportunity that you don't want to miss!"
          pic="/workshops.png"
          buttonText="Read More"
          buttonLink="/workshops"
          themeColor="orange.shade"
          themeHover="orange.shade.hover"
        />

        <TwoColPicWithTextAndButtonRight
          title="Mentoring"
          desc="Our services only provide the best tutors that will guide you to fulfill all your programming inquires. Get started with coding, the right way with our mentors."
          pic="/mentoring.png"
          buttonText="Read More"
          buttonLink="/workshops"
          themeColor="red.shade"
          themeHover="red.shade.hover"
        />

        <TwoColPicWithTextAndButton
          title="Resources"
          desc="By joining TCF, you'll have access to resources such as one on one tutoring, free workshops in Python, Java, HTML/CSS, and more. You'll also have the opportunity to join our team to contribute to our mission."
          pic="/resources.png"
          buttonText="Read More"
          buttonLink="/workshops"
          themeColor="turquoise.shade"
          themeHover="turquoise.shade.hover"
        />

        <MedSep />

        <HeadingWithDesc desc="Hear what our students and mentors have to say!">
          Testimonials
        </HeadingWithDesc>
        <Testimonials />

        <MedSep />

        <SubSection
          title="Join Us"
          desc="The Coding Foundation offers internship positions for any department. If you want to learn more, click the button below!"
          buttonText="Join Now!"
          buttonLink="/join"
          themeColor="blue.shade"
          themeColorHover="blue.shade.hover"
        />

        <MedSep />

        <HeadingWithDesc desc="Explore your passion for coding!">
          Join Our Discord Server!
        </HeadingWithDesc>

        <FullButtonWithPic
          pic="phone.png"
          logo="/discord.png"
          desc="Join to get in touch with students across the world. Develop your network to develop your passion. Anyone is free to join!!"
          buttonText="Join now"
          buttonLink="https://discord.gg/5gmWzdR5Ud"
          themeColor="blue.dark.shade"
          themeColorHover="blue.darkShadeHover"
        />
        <MedSep />

        <Contact />
        <MedSep />

        <Footer />
      </Container>

    </>
  )
}
