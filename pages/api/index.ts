import { createServer } from "@graphql-yoga/node";
import type { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import prisma from "../../lib/prisma";
import { Resolvers } from "../../types";

export async function createContext(): Promise<GraphQLContext> {
  return { prisma };
}

export type GraphQLContext = {
  prisma: PrismaClient;
};

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {
  encoding: "utf-8",
});

const resolvers: Resolvers = {
  Query: {
    form: (_, { id }, { prisma }) => {
      const _form = prisma.form.findUnique({
        where: {
          id,
        },
      });
      return _form;
    },
    allForms: (_, __, { prisma }) => {
      return prisma.form.findMany();
    },
    blogPosts: (_, __, { prisma }) => {
      return prisma.blogPost.findMany();
    },
    blogPost: (_, { id }, { prisma }) => {
      const blogPost = prisma.blogPost.findUnique({
        where: {
          id,
        },
      });
      return blogPost;
    },
    blogCard: (_, __, { prisma }) => {
      return prisma.blogPost.findMany();
    },
    allProperties: (_, __, { prisma }) => {
      return prisma.property.findMany();
    },
    property: (_, { id }, { prisma }) => {
      const property = prisma.property.findUnique({
        where: {
          id,
        },
      });

      return property;
    },
    image: (_, { id }, { prisma }) => {
      const image = prisma.image.findUnique({
        where: {
          id,
        },
      });
      return image;
    },
  },

  Mutation: {
    addForm: async (_, { input }, { prisma }) => {
      const addItem = await prisma.form.create({
        data: {
          name: input!.name,
          email: input!.email,
          message: input!.message,
        },
      });
      return addItem;
    },
    addBlogPost: async (_, { input }, { prisma }) => {
      const blogPost = await prisma.blogPost.create({
        data: {
          title: input?.title,
          subtitle1: input?.subtitle1,
          tableContents1: input?.tableContents1,
          tableContents2: input?.tableContents2,
          tableContents3: input?.tableContents3,
          tableContents4: input?.tableContents4,
          p1: input?.p1,
          p2: input?.p2,
          p3: input?.p3,
          subtitle2: input?.subtitle2,
          p4: input?.p4,
          p5: input?.p5,
          l1: input?.l1,
          l2: input?.l2,
          l3: input?.l3,
          l4: input?.l4,
          l5: input?.l5,
          subtitle3: input?.subtitle3,
          p6: input?.p6,
          p7: input?.p7,
          l6: input?.l6,
          l7: input?.l7,
          l8: input?.l8,
          l9: input?.l9,
          l10: input?.l10,
          l11: input?.l11,
          l12: input?.l12,
          l13: input?.l13,
          l14: input?.l14,
          l15: input?.l15,
          p8: input?.p8,
          subtitle4: input?.subtitle4,
          conclusion1: input?.conclusion1,
          conclusion2: input?.conclusion2,
          conclusion3: input?.conclusion3,
          reference1: input?.reference1,
          reference2: input?.reference2,
          authorName: input?.authorName,
          authorAbout: input?.authorAbout,
          authorLink: input?.authorLink,
          photoCredit: input?.photoCredit,
          editedBy: input?.editedBy,
          mainImage: input?.mainImage,
          publishedDate: input?.publishedDate,
        },
      });
      return blogPost;
    },
    updateBlogPost: async (_, { input }, { prisma }) => {
      const blogPost = await prisma.blogPost.update({
        where: {
          id: input.id,
        },
        data: {
          title: input?.title,
          subtitle1: input?.subtitle1,
          tableContents1: input?.tableContents1,
          tableContents2: input?.tableContents2,
          tableContents3: input?.tableContents3,
          tableContents4: input?.tableContents4,
          p1: input?.p1,
          p2: input?.p2,
          p3: input?.p3,
          subtitle2: input?.subtitle2,
          p4: input?.p4,
          p5: input?.p5,
          l1: input?.l1,
          l2: input?.l2,
          l3: input?.l3,
          l4: input?.l4,
          l5: input?.l5,
          subtitle3: input?.subtitle3,
          p6: input?.p6,
          p7: input?.p7,
          l6: input?.l6,
          l7: input?.l7,
          l8: input?.l8,
          l9: input?.l9,
          l10: input?.l10,
          l11: input?.l11,
          l12: input?.l12,
          l13: input?.l13,
          l14: input?.l14,
          l15: input?.l15,
          p8: input?.p8,
          subtitle4: input?.subtitle4,
          conclusion1: input?.conclusion1,
          conclusion2: input?.conclusion2,
          conclusion3: input?.conclusion3,
          reference1: input?.reference1,
          reference2: input?.reference2,
          authorName: input?.authorName,
          authorAbout: input?.authorAbout,
          authorLink: input?.authorLink,
          photoCredit: input?.photoCredit,
          editedBy: input?.editedBy,
          mainImage: input?.mainImage,
          publishedDate: input?.publishedDate,
        },
      });
      return blogPost;
    },
    addProperty: async (_, { input }, { prisma }) => {
      const property = await prisma.property.create({
        data: {
          id: input!.id,
          interior: input!.interior,
          featured: input?.featured,
          status: input?.status,
          title: input!.title,
          overview: input!.overview,
          address: input!.address,
          price: input!.price,
          yearBuilt: input!.yearBuilt,
          heating: input?.heating,
          cooling: input?.cooling,
          parking: input!.parking,
          lotSize: input?.lotSize,
          otherPropertyFeatures: input?.otherPropertyFeatures,
          schools: input?.schools,
          distanceToNearestSchool: input?.distanceToNearestSchool,
          shopping: input?.shopping,
          nightlife: input?.nightlife,
          forKids: input?.forKids,
          surroundingSuburbs: input?.surroundingSuburbs,
          bedrooms: input!.bedrooms,
          bathrooms: input!.bathrooms,
          basement: input?.basement,
          flooring: input!.flooring,
          appliances: input?.appliances,
          otherInteriorFeatures: input?.otherInteriorFeatures,
          propertyCategory: input!.propertyCategory,
          residentialCategory: input?.residentialCategory,
        },
      });

      return property;
    },
    updateProperty: async (_, { input }, { prisma }) => {
      const property = await prisma.property.update({
        where: {
          id: input!.id,
        },
        data: {
          interior: input!.interior,
          featured: input?.featured,
          status: input?.status,
          title: input!.title,
          overview: input!.overview,
          address: input!.address,
          price: input!.price,
          yearBuilt: input!.yearBuilt,
          heating: input?.heating,
          cooling: input?.cooling,
          parking: input!.parking,
          lotSize: input!.lotSize,
          otherPropertyFeatures: input?.otherPropertyFeatures,
          schools: input?.schools,
          distanceToNearestSchool: input?.distanceToNearestSchool,
          shopping: input?.shopping,
          nightlife: input?.nightlife,
          forKids: input?.forKids,
          surroundingSuburbs: input?.surroundingSuburbs,
          bedrooms: input!.bedrooms,
          bathrooms: input!.bathrooms,
          basement: input?.basement,
          flooring: input!.flooring,
          appliances: input?.appliances,
          otherInteriorFeatures: input?.otherInteriorFeatures,
          propertyCategory: input!.propertyCategory,
          residentialCategory: input?.residentialCategory,
        },
      });
      return property;
    },
    addImage: async (_, { input }, { prisma }) => {
      const interiorImage = await prisma.image.create({
        data: {
          url: input!.url,
          propertyId: input!.propertyId,
          imageCategory: input!.imageCategory,
        },
      });
      await prisma.property.update({
        where: { id: input.propertyId },
        data: {
          images: {
            connect: { id: interiorImage.id },
          },
        },
      });
      return interiorImage;
    },
  },
};

const server = createServer<{ req: NextApiRequest; res: NextApiResponse }>({
  endpoint: "/api",
  schema: {
    typeDefs,
    resolvers,
  },
  context: createContext(),
});

export default server;
