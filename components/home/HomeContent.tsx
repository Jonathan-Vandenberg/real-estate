import Image from "next/image";
import image from "../../public/houseImage.jpeg";

export default function HomeContent() {
  return (
    <div>
      <p className="border-b-2 border-gray/20 text-center text-3xl text-dark-gray py-12">
        asdf <i>unique</i>. <br /> asdf asdf
      </p>
      <div className="flex flex-col md:grid md:grid-cols-2 pt-12 gap-8">
        <div className="col-span-1 text-md text-dark-gray">
          <p className="text-lg pb-2 text-gray font-light">asdf</p>
          <p className="pr-14 text-lg text-dark-gray font-light">asdf</p>
        </div>
        <div className="col-span-1 text-md text-dark-gray block">
          <Image src={image} alt="image" layout="responsive" />
        </div>
        <div className="col-span-1 text-md text-dark-gray">
          <p className="text-lg pb-2 text-gray font-light">awsdf</p>
          <p className="pr-14 text-lg text-dark-gray font-light">asdf</p>
        </div>
        <div className="col-span-1 text-md text-dark-gray">
          <p className="text-lg pb-2 text-gray font-light">asdf</p>
          <p className="pr-14 text-lg text-dark-gray font-light">asdf</p>
        </div>
      </div>
    </div>
  );
}
