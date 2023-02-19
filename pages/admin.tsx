import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AdminDash from "../components/admin/AdminDash";
import prisma from "../lib/prisma";
import { Agent, ImageProduct, OfferIn, Property } from "../types";
import { useAppDispatch } from "../redux-hooks/hooks";
import { setUserId } from "../slices/userIdSlice";
import { setAgentId } from "../slices/agentIdSlice";
import cache from "../lib/cache";

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
  const imageFetcher = async () => {
    const image = await prisma.imageProduct.findMany();
    return image;
  };

  const agentFetcher = async () => {
    const agents = await prisma.agent.findMany();
    return agents;
  };

  const userFetcher = async () => {
    const user = await prisma.user.findMany();
    return user;
  };

  const PropertyFetcher = async () => {
    const property = await prisma.property.findMany({
      include: {
        offerIn: {
          include: {
            ficaDocs: true,
            elecCompCompany: true,
            intermologist: true,
            gasCompliance: true,
            waterCert: true,
            offerAccepted: true,
            bankInspection: true,
            conveyancer: true,
            mortgageOriginator: true,
            electricFence: true,
            alien: true,
          },
        },
      },
    });
    let datyfiedProperty = await JSON.parse(JSON.stringify(property));
    return datyfiedProperty;
  };

  const cachedImage = await cache.fetch("image", imageFetcher, 60 * 60);
  const cachedAgent = await cache.fetch("agent", agentFetcher, 60 * 60);
  const cachedUser = await cache.fetch("user", userFetcher, 60 * 60);
  const cachedProperty = await cache.fetch(
    "Property",
    PropertyFetcher,
    60 * 60
  );

  return {
    props: {
      property: cachedProperty,
      image: cachedImage,
      agents: cachedAgent,
      user: cachedUser,
    },
    revalidate: 10,
  };
}
