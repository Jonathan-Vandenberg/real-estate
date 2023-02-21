import { PrismaClient } from "@prisma/client";
import useSWR from "swr";

const prisma = new PrismaClient();

const fetcher = async (modelName: string) => {
  const data = await prisma[modelName].findMany();
  return data;
};

export const PrismaSwr = (url: string, modelName: string) => {
  const { data, error } = useSWR(url, () => fetcher(modelName), {
    refreshInterval: 1000,
  });
  return { data, error };
};
