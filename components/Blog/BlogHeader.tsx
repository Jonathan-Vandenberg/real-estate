import Image from "next/image";
import { useEffect, useState } from "react";
import { BlogPost } from "../../types";
import image from "../../public/heroImage.jpeg";

interface IHeroProps {
  data: BlogPost | undefined | null;
}

const BlogHeader = ({ data }: IHeroProps) => {
  const styles = data?.mainImage ? "pb-2 block" : "h-60 w-60";
  return (
    <div className="bg-off-white md:pt-4">
      <div className="container px-5 lg:px-0 mx-auto">
        {data?.title && (
          <h1 className="logoFont text-3xl pt-6 text-gray-700 font-semibold md:text-5xl">
            {data?.title}
          </h1>
        )}
        {data?.subtitle1 && (
          <h2 className="py-2 text-2xl">{data?.subtitle1}</h2>
        )}
        <div className="flex flex-col items-start justify-center md:flex-row md:justify-between pt-3">
          <div>
            <div className="flex items-center justify-start space-x-3 pb-3">
              <div className="flex items-start flex-col justify-start">
                {data?.authorName && (
                  <>
                    <p className="text-dark-gray text-md">
                      By {data?.authorName}
                    </p>
                  </>
                )}
                {data?.publishedDate && (
                  <p className="text-xs text-gray">
                    Published {data?.publishedDate}
                  </p>
                )}
              </div>
            </div>
          </div>
          {data?.editedBy && (
            <div className="flex items-center justify-start space-x-1">
              <p className="text-sm text-gray-500">Edited by</p>
              <p className="text-sm">{data?.editedBy}</p>
            </div>
          )}
        </div>
        <div className="pb-2 block">
          <div className="flex items-center justify-center">
            <div className={styles}>
              <Image
                src={image}
                alt="IT image"
                className="rounded-lg"
                priority
              />
            </div>
          </div>
          {data?.photoCredit && (
            <p className="text-xs pb-2">Image Credit: {data?.photoCredit}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
