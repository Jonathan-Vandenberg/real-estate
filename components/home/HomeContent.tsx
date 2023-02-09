import Image from "next/image";
import image from "../../public/houseImage.jpeg";

export default function HomeContent() {
  return (
    <div>
      <p className="border-b-2 border-gray/20 text-center text-3xl text-dark-gray py-12">
        Personalized Real Estate Solutions at HomeProp
      </p>
      <div className="flex flex-col md:grid md:grid-cols-2 pt-12 gap-8">
        <div className="col-span-1 text-md text-dark-gray">
          <p className="text-lg pb-2 text-gray font-light">
            Personalized Real Estate Solutions at HomeProp
          </p>
          <p className="pr-14 text-lg text-dark-gray font-light">
            At HomeProp, we believe that every real estate journey should be
            unique, just like every individual. That&apos;s why our team of real
            estate agents is committed to providing personalized and tailored
            services to each and every one of our clients. Our founder is placed
            in the top 5% of realtors in the world and holds a C.R.S.
            designation, demonstrating their expertise and commitment to
            excellence in the field of real estate.
          </p>
        </div>
        <div className="col-span-1 text-md text-dark-gray block">
          <Image src={image} alt="image" layout="responsive" />
        </div>
        <div className="col-span-1 text-md text-dark-gray">
          <p className="text-lg pb-2 text-gray font-light">
            Expert Real Estate Agents with a Personal Touch
          </p>
          <p className="pr-14 text-lg text-dark-gray font-light">
            Our team is made up of expert real estate agents who understand that
            the key to success in real estate is through building personal
            connections with clients. Our approach is centered around honest
            communication, loyalty, and a hands-on approach, which has resulted
            in a successful track record in the real estate market.
          </p>
        </div>
        <div className="col-span-1 text-md text-dark-gray">
          <p className="text-lg pb-2 text-gray font-light">
            Full-Service Real Estate Team at Your Service
          </p>
          <p className="pr-14 text-lg text-dark-gray font-light">
            At HomeProp, we offer full-service real estate solutions that
            prioritize your unique needs and goals. Whether you&apos;re buying
            or selling a home, our team is here to make the process as seamless
            as possible.
          </p>
        </div>
      </div>
    </div>
  );
}
