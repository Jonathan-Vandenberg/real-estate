import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import MainForm from "../../components/Blog/BlogForm";
import { Form } from "../../components/global/Form";
import { BlogPost, ImageBlog } from "../../types";
import prisma from "../../lib/prisma";
import Head from "next/head";
import BlogMain from "../../components/Blog/BlogMain";

interface IBlogPost {
  blogPost: BlogPost;
  imageBlog: ImageBlog[];
}

export default function Blog({ blogPost, imageBlog }: IBlogPost) {
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const handleAdd = () => {
    setShowForm(!showForm);
    setAdd(true);
    setEdit(false);
  };

  const handleEdit = () => {
    setShowForm(!showForm);
    setAdd(false);
    setEdit(true);
  };

  return (
    <>
      <Head>
        <title>Landmark</title>
        <meta name="description" content="Dynamic SEO from Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-[100rem] mx-auto">
        <div className="w-full mx-auto">
          <BlogMain
            imageBlog={imageBlog}
            blogPost={blogPost}
            handleEdit={handleEdit}
            handleAdd={handleAdd}
          />
          {showForm && (
            <MainForm
              blogPost={blogPost}
              add={add}
              edit={edit}
              handleClose={() => setShowForm(false)}
            />
          )}
          <Form />
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await prisma.blogPost.findMany();
  const paths = data?.map((item) => {
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

  let blogPost = await prisma.blogPost.findUnique({
    where: {
      id: params!.id,
    },
    include: {
      imageBlog: true,
    },
  });

  let imageBlog = await prisma.imageBlog.findMany({
    where: {
      blogPostId: params!.id,
    },
  });

  blogPost = JSON.parse(JSON.stringify(blogPost));

  return {
    props: {
      blogPost,
      imageBlog,
      revalidate: 60,
    },
  };
};
