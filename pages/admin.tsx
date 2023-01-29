import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AdminDash from "../components/AdminDash";
import prisma from "../lib/prisma";
import { Agent, ImageProduct, Property } from "../types";
import { useAppDispatch } from "../redux-hooks/hooks";
import { setUserId } from "../slices/userIdSlice";
import { setAgentId } from "../slices/agentIdSlice";

interface IAdmin {
  property: Property[];
  image: ImageProduct[];
  agents: Agent[];
  user: any[];
}

export default function Admin({ property, image, agents, user }: IAdmin) {
  const [role, setRole] = useState<string | null | undefined>("");
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

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
      property={property}
      image={image}
      agents={agents}
      user={user}
      role={role}
    />
  );
}

export async function getStaticProps() {
  const property = await prisma.property.findMany();
  const image = await prisma.imageProduct.findMany();
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
