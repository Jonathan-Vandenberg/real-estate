import React from "react";
import Image from "next/image";

export default function TeamMembers() {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-center tracking-wider font-extralight text-4xl text-dark-gray pb-3">
          Our team
        </h1>
        <p className="max-w-2xl text-center text-lg text-dark-gray font-light">
          At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
          quam natus quis nihil quod, hic explicabo doloribus magnam neque,
          exercitationem eius sunt!
        </p>
        <div className="flex flex-row flex-wrap-reverse justify-center">
          <div className="flex flex-col justify-center m-8 text-center">
            <Image
              alt=""
              width={145}
              height={145}
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src="https://source.unsplash.com/100x100/?portrait?12"
            />
            <p className="text-xl font-semibold leading-tight">Jimmy</p>
            <p className="text-lg text-dark-gray font-light">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <Image
              alt=""
              width={145}
              height={145}
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src="https://source.unsplash.com/100x100/?portrait?1"
            />
            <p className="text-xl font-semibold leading-tight">Nicole</p>
            <p className="text-lg text-dark-gray font-light">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <Image
              alt=""
              width={145}
              height={145}
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src="https://source.unsplash.com/100x100/?portrait?6"
            />
            <p className="text-xl font-semibold leading-tight">Nicole lorem</p>
            <p className="text-lg text-dark-gray font-light">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <Image
              alt=""
              width={145}
              height={145}
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src="https://source.unsplash.com/100x100/?portrait?7"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="text-lg text-dark-gray font-light">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <Image
              alt=""
              width={145}
              height={145}
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src="https://source.unsplash.com/100x100/?portrait?9"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="text-lg text-dark-gray font-light">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <Image
              alt=""
              width={145}
              height={145}
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full"
              src="https://source.unsplash.com/100x100/?portrait?4"
            />
            <p className="text-xl font-semibold leading-tight">
              Nicole v.d.Berg
            </p>
            <p className="text-lg text-dark-gray font-light">
              CEO & Lead Sales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
