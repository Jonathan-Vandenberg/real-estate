import { MouseParallax, ScrollParallax } from "react-just-parallax";
import backgroundParallax from "../../public/heroImage.jpeg";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  title: string;
  address: string;
  price: string;
  id: string;
}

const ParallaxComponent = ({ title, price, address, id }: IProps) => (
  <Link href={`/property/${id}`}>
    <div className="overflow-hidden relative h-[60rem] hover:cursor-pointer">
      <ScrollParallax
        zIndex={-10}
        strength={0.1}
        shouldPause={true}
        isAbsolutelyPositioned={true}
      >
        <div className="absolute top-[-20rem]">
          <Image src={backgroundParallax} alt="image" />
        </div>
      </ScrollParallax>
      <div className="w-full z-10 absolute inset-0">
        <div className="relative">
          <div className="absolute top-0 left-0 p-12 space-y-2">
            <p className="text-white text-4xl pb-2 font-thin">
              Featured Property
            </p>
            <p className="text-black text-2xl">
              <i>
                <strong>{title}</strong>
              </i>
            </p>
            <p className="text-black text-2xl">{address}</p>
            <p className="text-black text-2xl">{price}</p>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default ParallaxComponent;
