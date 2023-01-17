import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import AddProperty from "../../components/AddProperty";
import { Image, Property } from "@prisma/client";
import prisma from "../../lib/prisma";
import Head from "next/head";
import PropertyDetails from "../../components/PropertyDetails";

interface IProperty {
  property: Property;
  image: Image[];
}

export default function Blog({ property, image }: IProperty) {
  return (
    <div className="w-full mx-auto">
      <Head>
        <title>Landmark</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full mx-auto mt-12">
        <AddProperty
          property={property}
          addType={true}
          editType={false}
          image={image}
        />
      </div>
      <AddProperty
        property={property}
        image={image}
        addType={false}
        editType={true}
      />
      <PropertyDetails
        image={image}
        property={property}
        // {/**BS  */}
        newId={"asdf"}
        add={true}
      />
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
  });
  let image = await prisma.image.findMany();
  property = JSON.parse(JSON.stringify(property));
  return {
    props: {
      image,
      property,
      revalidate: 60,
    },
  };
};
