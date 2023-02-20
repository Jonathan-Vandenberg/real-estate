import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import NextCors from "nextjs-cors";
import { Property } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  // if (req.method !== "POST") {
  const properties: Property[] = await prisma.property.findMany({
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
  return res.status(200).json(properties);
  // }
}

//
