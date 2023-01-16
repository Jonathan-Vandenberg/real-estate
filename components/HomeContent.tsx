import Image from "next/image";
import image from "../public/houseImage.jpeg";

export default function HomeContent() {
  return (
    <div>
      <p className="border-b-2 border-gray/20 text-center text-3xl text-dark-gray py-12">
        We are all biochemically <i>unique</i>. <br /> Buying or selling your
        home should be, too.
      </p>
      <div className="flex flex-col md:grid md:grid-cols-2 pt-12 gap-8">
        <div className="col-span-1 text-md text-dark-gray">
          <p className="text-lg pb-2 text-gray font-light">TOP 1.5% REALTOR</p>
          <p className="pr-14 text-lg text-dark-gray font-light">
            I believe that everything boils down to the human connection, and
            every part of my business is a direct reflection of this conviction.
            Whether buying or selling, what matters most to me is honest
            communication, extreme loyalty to my clients, and a direct, hands-on
            approach. I’m honored that my growing client family was built almost
            exclusively on referrals. My relationships with clients last long
            after the close of the sale, and it is that underlying philosophy
            that drives my worth ethic and the success of my business.
          </p>
        </div>
        <div className="col-span-1 text-md text-dark-gray block">
          <Image src={image} alt="image" layout="responsive" />
        </div>
        <div className="col-span-1 text-md text-dark-gray">
          <p className="text-lg pb-2 text-gray font-light">
            FULL SERVICE AGENT
          </p>
          <p className="pr-14 text-lg text-dark-gray font-light">
            Should we work together? If this speaks to you, give me a call or
            send me a note. I look forward to hearing from you! In the meantime,
            I invite you to explore San Francisco and Marin market insights and
            read about some of my favorite topics on the blog: Nutrition +
            Neighborhoods. Follow along on Instagram to see beautiful property
            and nutritious finds across San Francisco, Marin, and the globe.
          </p>
        </div>
        <div className="col-span-1 text-md text-dark-gray">
          <p className="text-lg pb-2 text-gray font-light">
            BRINGING WELLNESS TO REAL ESTATE
          </p>
          <p className="pr-14 text-lg text-dark-gray font-light">
            I aim to bridge the gap between Real Estate and Wellness for my
            buyers and sellers in San Francisco and Marin. My background in
            Nutrition & Functional Medicine has taught me there are many
            underlying similarities. Identifying the root cause or goal is the
            way to move forward successfully. I help my clients to identify
            their underlying goals for buying or selling, and diligently manage
            the process from start to finish, so you can remain clear-headed,
            healthy, and well.
          </p>
        </div>
      </div>
    </div>
  );
}
