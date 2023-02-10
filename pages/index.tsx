import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "../components/global/Container";
import Hero from "../components/global/Hero";
import HomeContent from "../components/home/HomeContent";
import HomeGallery from "../components/home/HomeGallery";
import TeamMembers from "../components/home/TeamMembers";
import headerImage from "../public/headerImage.jpeg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Landmark Properties</title>
        <meta
          name="description"
          content="HomeProp | Making a Mark on the Real Estate Industry 160char"
        />
        <link rel="shortcut icon" href="/Nicole_van_den_Berg.jpeg" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="300char" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://www.homeprop.co.za/Nicole_van_den_Berg.jpeg"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Landmark Logo" />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <main className="bg-[rgb(249,249,249)]">
        <Hero subHeading="HomeProp" image={headerImage} logo={true}>
          <p>
            Helping You Find Your <br />
            Heaven on Earth
          </p>
        </Hero>

        <Container>
          <HomeContent />
        </Container>
        <Container>
          <HomeGallery />
        </Container>
        <Container>
          <TeamMembers />
        </Container>
      </main>
    </>
  );
};

export default Home;
