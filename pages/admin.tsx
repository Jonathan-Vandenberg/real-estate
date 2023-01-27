import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AdminDash from "../components/AdminDash";
import prisma from "../lib/prisma";
import { Agent, Image, Property } from "../types";

interface IAdmin {
  property: Property[];
  image: Image[];
  agents: Agent[];
  user: any[];
}

export default function Admin({ property, image, agents, user }: IAdmin) {
  const [agentId, setAgentId] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    function agent() {
      agents.map((a) => {
        if (session?.user) a.email === session?.user?.email && setAgentId(a.id);
      });
    }
    agent();
  }, [session]);

  return (
    <AdminDash
      property={property}
      image={image}
      agents={agents}
      agentId={agentId}
      user={user}
    />
  );
}

export async function getStaticProps() {
  const property = await prisma.property.findMany();
  const image = await prisma.image.findMany();
  const agents = await prisma.agent.findMany();
  const user = await prisma.user.findMany();

  return {
    props: {
      property,
      image,
      agents,
      user,
    },
  };
}
