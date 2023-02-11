import { createServer } from "@graphql-yoga/node";
import { PrismaClient, Status } from "@prisma/client";
import { readFileSync } from "fs";
import { DateScalar, DateTimeScalar, TimeScalar } from "graphql-date-scalars";
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import prisma from "../../lib/prisma";
import { Offer_In_Categories, Resolvers } from "../../types";

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
  Date: DateScalar,
  Time: TimeScalar,
  DateTime: DateTimeScalar,

  Query: {
    allResidentialFeatures: (_, __, { prisma }) => {
      return prisma.residentialFeature.findMany();
    },
    agent: (_, { email }, { prisma }) => {
      const agent = prisma.agent.findUnique({
        where: {
          email,
        },
      });
      return agent;
    },
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
      const image = prisma.imageProduct.findUnique({
        where: {
          id,
        },
      });
      return image;
    },
  },
  Mutation: {
    addOfferIn: async (_, { input }, { prisma }) => {
      const elecCompCompany = await prisma.elecCompCompany.create({
        data: {
          id: input!.elecCompCompanyId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const intermologist = await prisma.intermologist.create({
        data: {
          id: input!.intermologistId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const gasCompliance = await prisma.gasCompliance.create({
        data: {
          id: input!.gasComplianceId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const waterCert = await prisma.waterCert.create({
        data: {
          id: input!.waterCertId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const offerAccepted = await prisma.offerAccepted.create({
        data: {
          id: input!.offerAcceptedId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const bankInspection = await prisma.bankInspection.create({
        data: {
          id: input!.bankInspectionId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const conveyancer = await prisma.conveyancer.create({
        data: {
          id: input!.conveyancerId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const mortgageOriginator = await prisma.mortgageOriginator.create({
        data: {
          id: input!.mortgageOriginatorId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const ficaDocs = await prisma.ficaDocs.create({
        data: {
          id: input!.ficaDocsId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const electricFence = await prisma.electricFence.create({
        data: {
          id: input!.electricFenceId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const alien = await prisma.alien.create({
        data: {
          id: input!.alienId,
          offerInId: input!.id,
          deadline: new Date(),
        },
      });

      const offerIn = await prisma.offerIn.create({
        data: {
          id: input!.id,
          propertyId: input!.propertyId,
          amount: input?.amount,
          flag: input?.flag,
          dot: new Date(),
          dateOfBondApplication: new Date(),
          dateOfBondApprovalInPrincipal: new Date(),
          dateOfBondApproved: new Date(),
          bankName: input?.bankName,
          elecCompCompanyId: input?.elecCompCompanyId,
          intermologistId: input?.intermologistId,
          gasComplianceId: input?.gasComplianceId,
          waterCertId: input?.waterCertId,
          offerAcceptedId: input?.offerAcceptedId,
          bankInspectionId: input?.bankInspectionId,
          conveyancerId: input?.conveyancerId,
          mortgageOriginatorId: input?.mortgageOriginatorId,
          ficaDocsId: input?.ficaDocsId,
          electricFenceId: input?.electricFenceId,
          alienId: input?.alienId,
          elecCompCompany: {
            connect: {
              id: elecCompCompany.id,
            },
          },
          intermologist: {
            connect: {
              id: intermologist.id,
            },
          },
          gasCompliance: {
            connect: {
              id: gasCompliance.id,
            },
          },
          waterCert: {
            connect: {
              id: waterCert.id,
            },
          },
          offerAccepted: {
            connect: {
              id: offerAccepted.id,
            },
          },
          bankInspection: {
            connect: {
              id: bankInspection.id,
            },
          },
          conveyancer: {
            connect: {
              id: conveyancer.id,
            },
          },
          mortgageOriginator: {
            connect: {
              id: mortgageOriginator.id,
            },
          },
          ficaDocs: {
            connect: {
              id: ficaDocs.id,
            },
          },
          electricFence: {
            connect: {
              id: electricFence.id,
            },
          },
          alien: {
            connect: {
              id: alien.id,
            },
          },
        },
      });

      await prisma.property.update({
        where: { id: input.propertyId },
        data: {
          status: Status.OFFER_IN,
          offerIn: {
            connect: { id: offerIn.id },
          },
        },
      });

      return offerIn;
    },
    updateOfferIn: async (_, { input }, { prisma }) => {
      const offerIn = await prisma.offerIn.update({
        where: {
          propertyId: input!.propertyId,
        },
        data: {
          amount: input?.amount,
          dot: input?.dot,
          flag: input?.flag,
          dateOfBondApplication: input?.dateOfBondApplication,
          dateOfBondApprovalInPrincipal: input?.dateOfBondApprovalInPrincipal,
          dateOfBondApproved: input?.dateOfBondApproved,
          bankName: input?.bankName,
          elecCompCompanyId: input!.elecCompCompanyId,
          intermologistId: input!.intermologistId,
          gasComplianceId: input!.gasComplianceId,
          waterCertId: input!.waterCertId,
          offerAcceptedId: input!.offerAcceptedId,
          bankInspectionId: input!.bankInspectionId,
          conveyancerId: input!.conveyancerId,
          mortgageOriginatorId: input!.mortgageOriginatorId,
          ficaDocsId: input!.ficaDocsId,
          electricFenceId: input!.electricFenceId,
          alienId: input!.alienId,
        },
      });

      const elecCompCompany = await prisma.elecCompCompany.update({
        where: {
          id: input!.elecCompCompanyId,
        },
        data: {
          offerInId: input!.id,
          name: input?.elecCompCompany?.name,
          phone: input?.elecCompCompany?.phone,
          email: input?.elecCompCompany?.email,
          notes: input?.elecCompCompany?.notes,
          completed: input?.elecCompCompany?.completed,
          deadline: input?.elecCompCompany?.deadline,
          flag: input?.elecCompCompany?.flag,
        },
      });

      const intermologist = await prisma.intermologist.update({
        where: {
          id: input!.intermologistId,
        },
        data: {
          offerInId: input!.id,
          name: input?.intermologist?.name,
          phone: input?.intermologist?.phone,
          email: input?.intermologist?.email,
          notes: input?.intermologist?.notes,
          completed: input?.intermologist?.completed,
          deadline: input?.intermologist?.deadline,
          flag: input?.intermologist?.flag,
        },
      });

      const gasCompliance = await prisma.gasCompliance.update({
        where: {
          id: input!.gasComplianceId,
        },
        data: {
          offerInId: input!.id,
          notes: input?.gasCompliance?.notes,
          completed: input?.gasCompliance?.completed,
          deadline: input?.gasCompliance?.deadline,
          flag: input?.gasCompliance?.flag,
        },
      });

      const waterCert = await prisma.waterCert.update({
        where: {
          id: input?.waterCertId,
        },
        data: {
          offerInId: input?.id,
          notes: input?.waterCert?.notes,
          completed: input?.waterCert?.completed,
          deadline: input?.waterCert?.deadline,
          flag: input?.waterCert?.flag,
        },
      });

      const offerAccepted = await prisma.offerAccepted.update({
        where: {
          id: input!.offerAcceptedId,
        },
        data: {
          offerInId: input?.id,
          withConditions: input?.offerAccepted?.withConditions,
          conditions: input?.offerAccepted?.conditions,
          notes: input?.offerAccepted?.notes,
          completed: input?.offerAccepted?.completed,
          deadline: input?.offerAccepted?.deadline,
          flag: input?.offerAccepted?.flag,
        },
      });

      const bankInspection = await prisma.bankInspection.update({
        where: {
          id: input!.bankInspectionId,
        },
        data: {
          offerInId: input?.id,
          notes: input?.bankInspection?.notes,
          completed: input?.bankInspection?.completed,
          deadline: input?.bankInspection?.deadline,
          flag: input?.bankInspection?.flag,
        },
      });

      const conveyancer = await prisma.conveyancer.update({
        where: {
          id: input!.conveyancerId,
        },
        data: {
          offerInId: input?.id,
          name: input?.conveyancer?.name,
          phone: input?.conveyancer?.phone,
          notes: input?.conveyancer?.notes,
          completed: input?.conveyancer?.completed,
          deadline: input?.conveyancer?.deadline,
          flag: input?.conveyancer?.flag,
        },
      });

      const mortgageOriginator = await prisma.mortgageOriginator.update({
        where: {
          id: input!.mortgageOriginatorId,
        },
        data: {
          offerInId: input?.id,
          phone: input?.mortgageOriginator?.phone,
          name: input?.mortgageOriginator?.name,
          notes: input?.mortgageOriginator?.notes,
          completed: input?.mortgageOriginator?.completed,
          deadline: input?.mortgageOriginator?.deadline,
          flag: input?.mortgageOriginator?.flag,
        },
      });

      const ficaDocs = await prisma.ficaDocs.update({
        where: {
          id: input!.ficaDocsId,
        },
        data: {
          offerInId: input?.id,
          address: input?.ficaDocs?.address,
          notes: input?.ficaDocs?.notes,
          completed: input?.ficaDocs?.completed,
          deadline: input?.ficaDocs?.deadline,
          flag: input?.ficaDocs?.flag,
        },
      });

      const electricFence = await prisma.electricFence.update({
        where: {
          id: input!.electricFenceId,
        },
        data: {
          offerInId: input?.id,
          notes: input?.electricFence?.notes,
          completed: input?.electricFence?.completed,
          deadline: input?.electricFence?.deadline,
          flag: input?.electricFence?.flag,
        },
      });

      const alien = await prisma.alien.update({
        where: {
          id: input!.alienId,
        },
        data: {
          offerInId: input?.id,
          notes: input?.alien?.notes,
          completed: input?.alien?.completed,
          deadline: input?.alien?.deadline,
          flag: input?.alien?.flag,
        },
      });

      if (
        elecCompCompany.flag ||
        intermologist.flag ||
        gasCompliance.flag ||
        waterCert.flag ||
        offerAccepted.flag ||
        bankInspection.flag ||
        conveyancer.flag ||
        mortgageOriginator.flag ||
        ficaDocs.flag ||
        electricFence.flag ||
        alien.flag
      ) {
        await prisma.offerIn.update({
          where: {
            propertyId: offerIn.propertyId,
          },
          data: {
            flag: true,
          },
        });

        // const property = await prisma.property.findUnique({
        //   where: {
        //     id: input!.propertyId,
        //   },
        //   include: {
        //     agent: {
        //       include: {
        //         properties: true,
        //       },
        //     },
        //   },
        // });

        // if (property) {
        //   const agent = await prisma.agent.findUnique({
        //     where: {
        //       id: property.agentId,
        //     },
        //     include: {
        //       properties: {
        //         include: {
        //           offerIn: true,
        //         },
        //       },
        //     },
        //   });

        //   if (agent?.properties.some((prop) => prop.offerIn?.flag)) {
        //     await prisma.agent.update({
        //       where: {
        //         id: agent.id,
        //       },
        //       data: {
        //         flag: true,
        //       },
        //     });
        //   }
        // }
      } else {
        await prisma.offerIn.update({
          where: {
            propertyId: offerIn.propertyId,
          },
          data: {
            flag: false,
          },
        });

        // const property = await prisma.property.findUnique({
        //   where: {
        //     id: input!.propertyId,
        //   },
        // });

        // if (property) {
        //   const agent = await prisma.agent.findUnique({
        //     where: {
        //       id: property.agentId,
        //     },
        //     include: {
        //       properties: {
        //         include: {
        //           offerIn: true,
        //         },
        //       },
        //     },
        //   });

        //   if (agent?.properties.some((prop) => !prop.offerIn?.flag)) {
        //     await prisma.agent.update({
        //       where: {
        //         id: agent.id,
        //       },
        //       data: {
        //         flag: false,
        //       },
        //     });
        //   }
        // }
      }

      return {
        offerIn,
        elecCompCompany,
        intermologist,
        gasCompliance,
        waterCert,
        offerAccepted,
        bankInspection,
        conveyancer,
        mortgageOriginator,
        ficaDocs,
        electricFence,
        alien,
      };
    },
    addAgent: async (_, { input }, { prisma }) => {
      const agent = await prisma.agent.create({
        data: {
          userId: input!.userId,
          firstName: input?.firstName,
          lastName: input?.lastName,
          flag: input?.flag,
          email: input?.email,
          password: input?.password,
          createdAt: input!.createdAt,
          updatedAt: input!.updatedAt,
          address: input?.address,
          phoneNumber: input?.phoneNumber,
          aboutMe: input?.aboutMe,
          profileImage: input?.profileImage,
        },
      });
      return agent;
    },
    updateAgent: async (_, { input }, { prisma }) => {
      const updatedAgent = await prisma.agent.update({
        where: {
          id: input!.id,
        },
        data: {
          userId: input!.userId,
          email: input?.email,
          roles: input?.roles,
          updatedAt: input?.updatedAt,
          flag: input?.flag,
          profileImage: input?.profileImage,
          firstName: input?.firstName,
          lastName: input?.lastName,
          address: input?.address,
          phoneNumber: input?.phoneNumber,
          aboutMe: input?.aboutMe,
        },
      });

      return updatedAgent;
    },
    deleteImage: async (_, { id }, { prisma }) => {
      const image = await prisma.imageProduct.findUnique({
        where: {
          id,
        },
      });

      if (image)
        await prisma.imageProduct.delete({
          where: {
            id,
          },
        });
      return image;
    },
    deleteImageBlog: async (_, { id }, { prisma }) => {
      const imageBlog = await prisma.imageBlog.findUnique({
        where: {
          id,
        },
      });

      if (imageBlog)
        await prisma.imageBlog.delete({
          where: {
            id,
          },
        });
      return imageBlog;
    },
    deleteDocument: async (_, { id }, { prisma }) => {
      const document = await prisma.document.findUnique({
        where: {
          id,
        },
      });

      if (document)
        await prisma.document.delete({
          where: {
            id,
          },
        });
      return document;
    },
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
      return prisma.property
        .create({
          data: {
            ...input,
          },
        })
        .then((property) => {
          prisma.agent.update({
            where: { id: property.agentId },
            data: { properties: { connect: { id: property.id } } },
          });
          return property;
        });
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
    addResidentialFeature: async (_, { input }, { prisma }) => {
      return prisma.residentialFeature
        .create({
          data: {
            residentialFeature: input?.residentialFeature,
            propertyId: input!.propertyId,
          },
        })
        .then((residentialFeature) => {
          prisma.property.update({
            where: { id: input.propertyId },
            data: {
              residentialFeatures: {
                connect: { id: residentialFeature.id },
              },
            },
          });
          return residentialFeature;
        });
    },
    addCommercialFeature: async (_, { input }, { prisma }) => {
      return prisma.commercialFeature
        .create({
          data: {
            commercialFeature: input?.commercialFeature,
            propertyId: input!.propertyId,
          },
        })
        .then((commercialFeature) => {
          prisma.property.update({
            where: { id: input.propertyId },
            data: {
              commercialFeatures: {
                connect: { id: commercialFeature.id },
              },
            },
          });
          return commercialFeature;
        });
    },
    addTodo: async (_, { input }, { prisma }) => {
      return prisma.todo
        .create({
          data: {
            task: "",
            completed: false,
            offerInCategory: input?.offerInCategory,
            deadline: new Date(),
            offerInId: input!.offerInId,
          },
        })
        .then((todo) => {
          prisma.offerIn.update({
            where: { id: input.offerInId },
            data: {
              todos: {
                connect: { id: todo.id },
              },
            },
          });
          return todo;
        });
    },
    updateTodo: async (_, { id, input }, { prisma }) => {
      const updatedTodo = await prisma.todo.update({
        where: {
          id: id,
        },
        data: {
          task: input?.task,
          offerInCategory: input?.offerInCategory,
          deadline: input?.deadline,
          offerInId: input!.offerInId,
          completed: input?.completed,
        },
      });
      return updatedTodo;
    },
    deleteTodo: async (_, { id }, { prisma }) => {
      const deletedTodo = await prisma.todo.delete({
        where: {
          id: id,
        },
      });
      return deletedTodo;
    },
    addImage: async (_, { input }, { prisma }) => {
      return prisma.imageProduct
        .create({
          data: {
            url: input?.url,
            propertyId: input!.propertyId,
            imageCategory: input?.imageCategory,
          },
        })
        .then((image) => {
          prisma.property.update({
            where: { id: input.propertyId },
            data: {
              images: {
                connect: { id: image.id },
              },
            },
          });
          return image;
        });
    },
    addImageBlog: async (_, { input }, { prisma }) => {
      return prisma.imageBlog
        .create({
          data: {
            url: input?.url,
            blogPostId: input!.blogPostId,
          },
        })
        .then((imageBlog) => {
          prisma.blogPost.update({
            where: { id: input.blogPostId },
            data: {
              imageBlog: {
                connect: { id: imageBlog.id },
              },
            },
          });
          return imageBlog;
        });
    },
    addDocument: async (_, { input }, { prisma }) => {
      return prisma.document
        .create({
          data: {
            url: input?.url,
            offerInId: input!.offerInId,
            documentCategory: input?.documentCategory,
          },
        })
        .then((document) => {
          prisma.offerIn.update({
            where: { id: input.offerInId },
            data: {
              documents: {
                connect: { id: document.id },
              },
            },
          });
          return document;
        });
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
