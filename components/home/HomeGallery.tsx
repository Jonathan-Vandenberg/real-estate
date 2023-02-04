import image1 from "../../public/houseImage.jpeg";
import image2 from "../../public/houseImage1.jpeg";
import image3 from "../../public/heroImage.jpeg";
import image4 from "../../public/heroImage.jpeg";

import Image from "next/image";
export default function HomeGallery() {
  return (
    <section className="py-12">
      <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
        <Image
          src={image1}
          alt="Gallery image"
          className="w-full h-full col-span-2 row-span-2 shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <Image
          alt="Gallery image"
          className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image2}
        />
        <Image
          alt="Gallery image"
          className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image3}
        />
        <Image
          alt="Gallery image"
          className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src={image4}
        />
        <div className="hidden md-block">
          <Image
            alt="Gallery image"
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image1}
          />
          <Image
            alt="Gallery image"
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image2}
          />
          <Image
            alt="Gallery image"
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image3}
          />
          <Image
            alt="Gallery image"
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image4}
          />
          <Image
            alt="Gallery image"
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image1}
          />
          <Image
            src={image2}
            alt="Gallery image"
            className="w-full h-full col-span-2 row-span-2 shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
          <Image
            alt="Gallery image"
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image3}
          />
          <Image
            src={image4}
            alt="Gallery image"
            className="w-full h-full col-span-2 row-span-2 shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
