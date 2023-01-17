import BlogPageHero from "../components/Blog/BlogPageHero";
import { BlogPost } from "../types";
import prisma from "../lib/prisma";
import Head from "next/head";
import { Container } from "../components/Container";

interface IProps {
  data: BlogPost[];
}

export default function App({ data }: IProps) {
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
      <div className="flex flex-col space-y-6 mt-6 mx-auto md:pt-20">
        {data
          ?.map((post) => (
            <div key={post?.id} className="w-full">
              <Container>
                <BlogPageHero data={post} />
              </Container>
            </div>
          ))
          .slice(0)
          .reverse()}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await prisma.blogPost.findMany();

  return {
    props: {
      data,
    },
  };
}
