import Image from "next/image";
export default function HomeGallery() {
  return (
    <section className="py-12">
      <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
        <Image
          src="https://source.unsplash.com/random/301x301/"
          alt="Gallery image"
          layout="responsive"
          width={600}
          height={600}
          className="w-full h-full col-span-2 row-span-2 shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <Image
          alt="Gallery image"
          layout="responsive"
          width={600}
          height={600}
          className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?0"
        />
        <Image
          alt="Gallery image"
          layout="responsive"
          width={600}
          height={600}
          className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?1"
        />
        <Image
          alt="Gallery image"
          layout="responsive"
          width={600}
          height={600}
          className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?2"
        />
        <div className="hidden md-block">
          <Image
            alt="Gallery image"
            layout="responsive"
            width={600}
            height={600}
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?3"
          />
          <Image
            alt="Gallery image"
            layout="responsive"
            width={600}
            height={600}
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?4"
          />
          <Image
            alt="Gallery image"
            layout="responsive"
            width={600}
            height={600}
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?5"
          />
          <Image
            alt="Gallery image"
            layout="responsive"
            width={600}
            height={600}
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?6"
          />
          <Image
            alt="Gallery image"
            layout="responsive"
            width={600}
            height={600}
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?7"
          />
          <Image
            src="https://source.unsplash.com/random/302x302/?8"
            alt="Gallery image"
            layout="responsive"
            width={600}
            height={600}
            className="w-full h-full col-span-2 row-span-2 shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
          <Image
            alt="Gallery image"
            layout="responsive"
            width={600}
            height={600}
            className="w-full h-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?9"
          />
          <Image
            src="https://source.unsplash.com/random/302x302/?10"
            alt="Gallery image"
            layout="responsive"
            width={600}
            height={600}
            className="w-full h-full col-span-2 row-span-2 shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
