import Image, { StaticImageData } from "next/image";
import React from "react";

export default function Hero({
  children,
  logo,
  image,
  subHeading,
}: {
  children: React.ReactNode;
  logo: boolean;
  image: StaticImageData | string;
  subHeading: string;
}) {
  return (
    <div className="relative">
      <Image priority={true} src={image} alt="header image" />
      <div className="absolute inset-0 bg-black/20 h-[99.2%]">
        <div className="text-center flex items-center justify-center flex-col h-full">
          <div className="lg:text-7xl md:text-5xl text-2xl text-off-white animate-fade-in font-light">
            {children}
          </div>
          {logo && (
            <div className="text-off-white lg:pt-[2rem] text-lg md:text-xl lg:text-3xl animate-fade-in font-light">
              {subHeading}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
