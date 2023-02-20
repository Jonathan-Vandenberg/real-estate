import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AdminDash from "../components/admin/AdminDash";
import prisma from "../lib/prisma";
import { Agent, ImageProduct, Property } from "../types";
import { useAppDispatch } from "../redux-hooks/hooks";
import { setUserId } from "../slices/userIdSlice";
import { setAgentId } from "../slices/agentIdSlice";
import useSWR from "swr";

interface IAdmin {
  property: Property[];
  image: ImageProduct[];
  agents: Agent[];
  user: any[];
}

const imagesFetcher = async () => {
  const res = await fetch(IMAGES_URL);
  return res.json();
};

const usersFetcher = async () => {
  const res = await fetch(USERS_URL);
  return res.json();
};

const propertiesFetcher = async () => {
  const res = await fetch(PROPERTIES_URL);
  let property: Property[] = await res.json();
  property = await JSON.parse(JSON.stringify(property));
  return property;
};

const agentsFetcher = async () => {
  const res = await fetch(AGENTS_URL);
  return res.json();
};

const IMAGES_URL = "http://localhost:3000/api/images";
const AGENTS_URL = "http://localhost:3000/api/agents";
const PROPERTIES_URL = "http://localhost:3000/api/properties";
const USERS_URL = "http://localhost:3000/api/users";

export default function Admin({ property, image, agents, user }: IAdmin) {
  const [role, setRole] = useState<string | null | undefined>("");
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  const { data: imageData, error: imageError } = useSWR(
    IMAGES_URL,
    imagesFetcher,
    {
      fallbackData: image,
      refreshInterval: 1000,
    }
  );

  const { data: agentsData, error: agentsError } = useSWR(
    AGENTS_URL,
    agentsFetcher,
    {
      fallbackData: agents,
      refreshInterval: 1000,
    }
  );
  const { data: propertiesData, error: propertiesError } = useSWR(
    PROPERTIES_URL,
    propertiesFetcher,
    {
      fallbackData: property,
      refreshInterval: 1000,
    }
  );
  const { data: usersData, error: usersError } = useSWR(
    USERS_URL,
    usersFetcher,
    {
      fallbackData: user,
      refreshInterval: 1000,
    }
  );

  if (imageError) console.log(imageError);
  if (agentsError) console.log(agentsError);
  if (propertiesError) console.log(propertiesError);
  if (usersError) console.log(usersError);

  useEffect(() => {
    function agent() {
      agents.map((a) => {
        if (session?.user?.email)
          if (a.email === session.user.email) {
            dispatch(setAgentId(a.id)), setRole(a.roles);
          }
      });
    }
    agent();
  }, [session]);

  useEffect(() => {
    function userId() {
      user.map((u) => {
        if (u) {
          if (u.email === session?.user?.email) {
            dispatch(setUserId(u.id));
          }
        }
      });
    }
    userId();
  }, [session]);

  return (
    <AdminDash
      property={propertiesData}
      image={imageData}
      agents={agentsData}
      user={usersData}
      role={role}
    />
  );
}

export async function getStaticProps() {
  // const imageFetcher = async () => {
  //   const image = await prisma.imageProduct.findMany();
  //   return image;
  // };

  // const agentFetcher = async () => {
  //   const agents = await prisma.agent.findMany();
  //   return agents;
  // };

  // const userFetcher = async () => {
  //   const user = await prisma.user.findMany();
  //   return user;
  // };

  // const PropertyFetcher = async () => {
  //   const property = await prisma.property.findMany({
  //     include: {
  //       offerIn: {
  //         include: {
  //           ficaDocs: true,
  //           elecCompCompany: true,
  //           intermologist: true,
  //           gasCompliance: true,
  //           waterCert: true,
  //           offerAccepted: true,
  //           bankInspection: true,
  //           conveyancer: true,
  //           mortgageOriginator: true,
  //           electricFence: true,
  //           alien: true,
  //         },
  //       },
  //     },
  //   });
  //   let datyfiedProperty = await JSON.parse(JSON.stringify(property));
  //   return datyfiedProperty;
  // };

  // const cachedImage = await cache.fetch("image", imageFetcher, 60 * 60);
  // const cachedAgent = await cache.fetch("agent", agentFetcher, 60 * 60);
  // const cachedUser = await cache.fetch("user", userFetcher, 60 * 60);
  // const cachedProperty = await cache.fetch(
  //   "Property",
  //   PropertyFetcher,
  //   60 * 60
  // );

  const resAgents = await fetch(AGENTS_URL);
  const agents = await resAgents.json();

  const resProperties = await fetch(PROPERTIES_URL);
  let property = await resProperties.json();
  property = await JSON.parse(JSON.stringify(property));

  const resImages = await fetch(IMAGES_URL);
  const image = await resImages.json();

  const resUser = await fetch(USERS_URL);
  const user = await resUser.json();

  return {
    props: {
      property,
      image,
      agents,
      user,
    },
    revalidate: 10,
  };
}
