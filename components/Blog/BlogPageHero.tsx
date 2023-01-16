import Link from "next/link";
import Image from "next/image";
import logo from "../../public/heroImage.jpeg";
import { useEffect, useState } from "react";
import { BlogPost } from "../../types";

interface IHeroProps {
  data: BlogPost | undefined | null;
}

export default function App({ data }: IHeroProps) {
  const [slug, setSlug] = useState("");

  useEffect(() => {
    setSlug("/blog/" + data?.id);
  }, []);

  return (
    <div className="md:mb-8 md:px-0 mx-auto w-full h-full">
      <div className="bg-white p-4 md:p-0 md:flex-row flex-col-reverse flex items-center justify-between">
        <div className="flex items-center md:items-start flex-col justify-start w-full h-full md:w-1/2 md:py-6">
          <div className="flex flex-col items-start space-y-4 md:space-y-8 h-full pt-3 md:p-6 w-full">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-center md:text-start w-full">
              {data?.title}
            </h1>
            <div className="md:space-y-2">
              <p className="text-xs md:text-sm text-start">
                {data?.publishedDate}
              </p>
              <p className="text-lg md:text-2xl text-gray line-clamp-3 text-start w-full">
                {data?.subtitle1}
              </p>
            </div>
            <Link href={slug}>
              <p className="text-lg md:text-xl text-center text-thin border-b-8 border-gray cursor-pointer">
                Read More
              </p>
            </Link>
          </div>
        </div>
        <div className="relative md:w-1/2 h-60">
          <Image
            // src={data?.mainImage || logo}
            src={logo}
            alt="blog Image"
          />
        </div>
      </div>
    </div>
  );
}
