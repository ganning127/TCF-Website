import { NextSeo } from "next-seo";
import Head from "next/head";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/index.tsx";
import { Footer } from "../components/Footer/index.tsx";
import { TwoColWithPic } from "../components/Landing/TwoColWithPic";
import { MedSep } from "../components/Separators/MedSep";
import { SmSep } from "../components/Separators/SmSep";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { TeamGrid } from "../components/Grid/TeamGrid";
import { SubSectionTwoButtons } from "../components/Landing/SubSectionTwoButtons";
import { ProjectCard } from "../components/Cards/ProjectCard";

const title = "Projects - The Coding Foundation";
const description =
  "Current and past projects that The Coding Foundation is working on. ";
const url = "https://thecodingfoundation.org/projects";

export default function About() {
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
              url: "https://i.imgur.com/XUZTGyH.png",
              width: 800,
              height: 600,
              alt: 'The Coding Foundation&apos;s logo next to the text "The Coding Foundation"',
              type: "image/jpeg",
            },
          ],
        }}
      />

      <NavBar active="projects" />

      <Container maxW="container.xl">
        <SmSep />

        <HeadingWithDesc
          desc="Current and past projects that The Coding Foundation is working on."
          size="4xl"
        >
          Projects
        </HeadingWithDesc>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <ProjectCard
            title="Partnership with Verselet"
            desc="The Coding Foundation is partnering with Verselet to create a collaborative platform for both students and mentors during workshops."
            link="https://www.verselet.com/"
            linkText="Learn More"
            img="https://avatars.githubusercontent.com/u/79620962?s=200&v=4"
          />
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}
