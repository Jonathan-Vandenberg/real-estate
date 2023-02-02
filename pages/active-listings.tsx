import Head from "next/head";
import { Container } from "../components/Container";
import PropertyCard from "../components/PropertyCard";
import prisma from "../lib/prisma";
import { ImageProduct, Property, Agent, ResidentialFeature } from "../types";

interface IProps {
  property: Property[];
  image: ImageProduct[];
  agent: Agent[];
  residentialFeatures: ResidentialFeature[];
}

export default function ActiveListings({
  property,
  image,
  agent,
  residentialFeatures,
}: IProps) {
  return (
    <>
      <Head>
        <title>Landmark Properties</title>
        <meta
          name="description"
          content="Landmark Properties | Making a Mark on the Real Estate Industry 160char"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="300char" />
        <meta property="og:url" content="http://localhost:3000/blogs" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image"
          content="https://www.uptogo.org/fullLogo.png”"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Landmark Logo" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:locale:alternate" content="en_GB" />
      </Head>

      <div className="text-center tracking-wider font-extralight text-4xl text-dark-gray py-12">
        <p>Active Listings</p>
      </div>
      <Container>
        <PropertyCard agent={agent} image={image} property={property} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const property = await prisma.property.findMany({
    include: {
      residentialFeatures: true,
    },
  });
  const image = await prisma.imageProduct.findMany();
  const agent = await prisma.agent.findMany();

  return {
    props: {
      property,
      image,
      agent,
    },
  };
}
