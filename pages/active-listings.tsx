import Head from "next/head";
import { Container } from "../components/global/Container";
import PropertyCard from "../components/property/PropertyCard";
import prisma from "../lib/prisma";
import { ImageProduct, Property, Agent, ResidentialFeature } from "../types";
import cache from "../lib/cache";
import useSWR from "swr";

interface IProps {
  property: Property[];
  image: ImageProduct[];
  agent: Agent[];
  residentialFeatures: ResidentialFeature[];
}

const IMAGES_URL = "http://localhost:3000/api/images";
const AGENTS_URL = "http://localhost:3000/api/agents";
const PROPERTIES_URL = "http://localhost:3000/api/properties";

const imagesFetcher = async () => {
  const res = await fetch(IMAGES_URL);
  return res.json();
};

const propertiesFetcher = async () => {
  const res = await fetch(PROPERTIES_URL);
  let property: Property[] = await res.json();
  property = await JSON.parse(JSON.stringify(property));
  return property;
};

const agentsFetcher = async () => {
  const res = await fetch(AGENTS_URL);
  return res.json();
};

export default function ActiveListings({ property, image, agent }: IProps) {
  const { data: imageData, error: imageError } = useSWR(
    IMAGES_URL,
    imagesFetcher,
    {
      fallbackData: image,
      refreshInterval: 1000,
    }
  );

  const { data: agentsData, error: agentsError } = useSWR(
    AGENTS_URL,
    agentsFetcher,
    {
      fallbackData: agent,
      refreshInterval: 1000,
    }
  );
  const { data: propertiesData, error: propertiesError } = useSWR(
    PROPERTIES_URL,
    propertiesFetcher,
    {
      fallbackData: property,
      refreshInterval: 1000,
    }
  );

  if (agentsError) console.log(agentsError);
  if (propertiesError) console.log(propertiesError);
  if (imageError) console.log(imageError);
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
        <PropertyCard
          agent={agentsData}
          image={imageData}
          property={propertiesData}
        />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const resAgents = await fetch(AGENTS_URL);
  const agent = await resAgents.json();

  const resProperties = await fetch(PROPERTIES_URL);
  let property = await resProperties.json();
  property = await JSON.parse(JSON.stringify(property));

  const resImages = await fetch(IMAGES_URL);
  const image = await resImages.json();

  return {
    props: {
      property,
      image,
      agent,
    },
    revalidate: 10,
  };
}
