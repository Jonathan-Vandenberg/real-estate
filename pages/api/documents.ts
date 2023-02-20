import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import NextCors from "nextjs-cors";
import { Document } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });
  // if (req.method !== "POST") {
  const documents: Document[] = await prisma.document.findMany();
  return res.status(200).json(documents);
  // }
}
