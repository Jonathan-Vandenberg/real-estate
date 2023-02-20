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
  if (req.method !== "POST") {
    const id = req.query.id as string;
    const property: Property | null | undefined =
      await prisma.property.findUnique({
        where: {
          id: id,
        },
      });
    return res.status(200).json(property);
  }
}
