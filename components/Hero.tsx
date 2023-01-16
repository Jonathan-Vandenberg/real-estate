import headerImage from "../public/headerImage.jpeg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <Image src={headerImage} alt="header image" />
      <div className="absolute inset-0 bg-black/20 h-[99.2%]">
        <div className="text-center flex items-center justify-center flex-col h-full">
          <p className="lg:text-7xl md:text-5xl text-2xl text-off-white animate-fade-in font-light">
            Making a Mark on the <br /> Real Estate Industry
          </p>
          <div className="text-off-white lg:pt-[2rem] text-lg md:text-xl lg:text-3xl animate-fade-in font-light">
            Landmark Properties
          </div>
        </div>
      </div>
    </div>
  );
}
