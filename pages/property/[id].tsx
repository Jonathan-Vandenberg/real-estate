import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import PropertyDetails from "../../components/property/PropertyDetails";
import prisma from "../../lib/prisma";
import { Agent, ImageProduct, Property } from "../../types";

interface IProperty {
  property: Property;
  image: ImageProduct[];
  agent: Agent[];
}

export default function Blog({ property, image, agent }: IProperty) {
  return (
    <div className="w-full mx-auto">
      <Head>
        <title>Landmark</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full mx-auto">
        <PropertyDetails
          image={image}
          property={property}
          agent={agent}
          newId={""}
          add={true}
        />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const property = await prisma.property.findMany();
  const paths = property?.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as IParams;
  let property = await prisma.property.findUnique({
    where: {
      id: params!.id,
    },
    include: {
      residentialFeatures: true,
    },
  });
  let image = await prisma.imageProduct.findMany();
  let agent = await prisma.agent.findMany();
  return {
    props: {
      image,
      property,
      agent,
      revalidate: 60,
    },
  };
};
