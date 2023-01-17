import { GraphQLResolveInfo } from "graphql";
import {
  Form as FormModel,
  Property as PropertyModel,
  BlogPost as BlogPostModel,
  Image as ImageModel,
} from "@prisma/client";
import { GraphQLContext } from "./pages/api/index";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BlogPost = {
  __typename?: "BlogPost";
  authorAbout?: Maybe<Scalars["String"]>;
  authorLink?: Maybe<Scalars["String"]>;
  authorName?: Maybe<Scalars["String"]>;
  conclusion1?: Maybe<Scalars["String"]>;
  conclusion2?: Maybe<Scalars["String"]>;
  conclusion3?: Maybe<Scalars["String"]>;
  editedBy?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  l1?: Maybe<Scalars["String"]>;
  l2?: Maybe<Scalars["String"]>;
  l3?: Maybe<Scalars["String"]>;
  l4?: Maybe<Scalars["String"]>;
  l5?: Maybe<Scalars["String"]>;
  l6?: Maybe<Scalars["String"]>;
  l7?: Maybe<Scalars["String"]>;
  l8?: Maybe<Scalars["String"]>;
  l9?: Maybe<Scalars["String"]>;
  l10?: Maybe<Scalars["String"]>;
  l11?: Maybe<Scalars["String"]>;
  l12?: Maybe<Scalars["String"]>;
  l13?: Maybe<Scalars["String"]>;
  l14?: Maybe<Scalars["String"]>;
  l15?: Maybe<Scalars["String"]>;
  mainImage?: Maybe<Scalars["String"]>;
  p1?: Maybe<Scalars["String"]>;
  p2?: Maybe<Scalars["String"]>;
  p3?: Maybe<Scalars["String"]>;
  p4?: Maybe<Scalars["String"]>;
  p5?: Maybe<Scalars["String"]>;
  p6?: Maybe<Scalars["String"]>;
  p7?: Maybe<Scalars["String"]>;
  p8?: Maybe<Scalars["String"]>;
  photoCredit?: Maybe<Scalars["String"]>;
  publishedDate?: Maybe<Scalars["String"]>;
  reference1?: Maybe<Scalars["String"]>;
  reference2?: Maybe<Scalars["String"]>;
  subtitle1?: Maybe<Scalars["String"]>;
  subtitle2?: Maybe<Scalars["String"]>;
  subtitle3?: Maybe<Scalars["String"]>;
  subtitle4?: Maybe<Scalars["String"]>;
  tableContents1?: Maybe<Scalars["String"]>;
  tableContents2?: Maybe<Scalars["String"]>;
  tableContents3?: Maybe<Scalars["String"]>;
  tableContents4?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type BlogPostInput = {
  authorAbout?: InputMaybe<Scalars["String"]>;
  authorLink?: InputMaybe<Scalars["String"]>;
  authorName?: InputMaybe<Scalars["String"]>;
  conclusion1?: InputMaybe<Scalars["String"]>;
  conclusion2?: InputMaybe<Scalars["String"]>;
  conclusion3?: InputMaybe<Scalars["String"]>;
  editedBy?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  l1?: InputMaybe<Scalars["String"]>;
  l2?: InputMaybe<Scalars["String"]>;
  l3?: InputMaybe<Scalars["String"]>;
  l4?: InputMaybe<Scalars["String"]>;
  l5?: InputMaybe<Scalars["String"]>;
  l6?: InputMaybe<Scalars["String"]>;
  l7?: InputMaybe<Scalars["String"]>;
  l8?: InputMaybe<Scalars["String"]>;
  l9?: InputMaybe<Scalars["String"]>;
  l10?: InputMaybe<Scalars["String"]>;
  l11?: InputMaybe<Scalars["String"]>;
  l12?: InputMaybe<Scalars["String"]>;
  l13?: InputMaybe<Scalars["String"]>;
  l14?: InputMaybe<Scalars["String"]>;
  l15?: InputMaybe<Scalars["String"]>;
  mainImage?: InputMaybe<Scalars["String"]>;
  p1?: InputMaybe<Scalars["String"]>;
  p2?: InputMaybe<Scalars["String"]>;
  p3?: InputMaybe<Scalars["String"]>;
  p4?: InputMaybe<Scalars["String"]>;
  p5?: InputMaybe<Scalars["String"]>;
  p6?: InputMaybe<Scalars["String"]>;
  p7?: InputMaybe<Scalars["String"]>;
  p8?: InputMaybe<Scalars["String"]>;
  photoCredit?: InputMaybe<Scalars["String"]>;
  publishedDate?: InputMaybe<Scalars["String"]>;
  reference1?: InputMaybe<Scalars["String"]>;
  reference2?: InputMaybe<Scalars["String"]>;
  subtitle1?: InputMaybe<Scalars["String"]>;
  subtitle2?: InputMaybe<Scalars["String"]>;
  subtitle3?: InputMaybe<Scalars["String"]>;
  subtitle4?: InputMaybe<Scalars["String"]>;
  tableContents1?: InputMaybe<Scalars["String"]>;
  tableContents2?: InputMaybe<Scalars["String"]>;
  tableContents3?: InputMaybe<Scalars["String"]>;
  tableContents4?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type CommercialFeatures = {
  __typename?: "CommercialFeatures";
  commercialFeature?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  propertyId: Scalars["ID"];
};

export type CommercialFeaturesInput = {
  commercialFeature?: InputMaybe<Scalars["String"]>;
  propertyId: Scalars["ID"];
};

export type Form = {
  __typename?: "Form";
  email: Scalars["String"];
  id: Scalars["ID"];
  message: Scalars["String"];
  name: Scalars["String"];
};

export type FormInput = {
  email: Scalars["String"];
  message: Scalars["String"];
  name: Scalars["String"];
};

export type Image = {
  __typename?: "Image";
  id: Scalars["ID"];
  imageCategory: Image_Category;
  propertyId: Scalars["ID"];
  url?: Maybe<Scalars["String"]>;
};

export type ImageInput = {
  imageCategory: Image_Category;
  propertyId: Scalars["ID"];
  url?: InputMaybe<Scalars["String"]>;
};

export enum Image_Category {
  Interior = "INTERIOR",
  Main = "MAIN",
  Property = "PROPERTY",
  Submain = "SUBMAIN",
  Surroundings = "SURROUNDINGS",
  MAIN = "MAIN",
}

export type Mutation = {
  __typename?: "Mutation";
  addBlogPost?: Maybe<BlogPost>;
  addForm?: Maybe<Form>;
  addImage?: Maybe<Image>;
  addImagesToProperty?: Maybe<Property>;
  addProperty?: Maybe<Property>;
  updateBlogPost?: Maybe<BlogPost>;
  updateImage?: Maybe<Image>;
  updateProperty?: Maybe<Property>;
};

export type MutationAddBlogPostArgs = {
  input: BlogPostInput;
};

export type MutationAddFormArgs = {
  input: FormInput;
};

export type MutationAddImageArgs = {
  input: ImageInput;
};

export type MutationAddImagesToPropertyArgs = {
  imagesIds: Array<InputMaybe<Scalars["ID"]>>;
  propertyId: Scalars["ID"];
};

export type MutationAddPropertyArgs = {
  input: PropertyInput;
};

export type MutationUpdateBlogPostArgs = {
  input: BlogPostInput;
};

export type MutationUpdateImageArgs = {
  id: Scalars["ID"];
  input: ImageInput;
};

export type MutationUpdatePropertyArgs = {
  input: PropertyInput;
};

export type Property = {
  __typename?: "Property";
  address: Scalars["String"];
  appliances?: Maybe<Scalars["String"]>;
  basement?: Maybe<Scalars["String"]>;
  bathrooms: Scalars["Int"];
  bedrooms: Scalars["Int"];
  cooling?: Maybe<Scalars["String"]>;
  distanceToNearestSchool?: Maybe<Scalars["String"]>;
  featured?: Maybe<Scalars["Boolean"]>;
  flooring: Scalars["String"];
  forKids?: Maybe<Scalars["String"]>;
  heating?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  images?: Maybe<Array<Maybe<Image>>>;
  interior: Scalars["String"];
  lotSize: Scalars["String"];
  nightlife?: Maybe<Scalars["String"]>;
  otherInteriorFeatures?: Maybe<Scalars["String"]>;
  otherPropertyFeatures?: Maybe<Scalars["String"]>;
  overview: Scalars["String"];
  parking: Scalars["Int"];
  price: Scalars["String"];
  propertyCategory: Property_Category;
  residentialCategory?: Maybe<Residential_Category>;
  residentialFeatures?: Maybe<Array<Maybe<ResidentialFeatures>>>;
  schools?: Maybe<Scalars["String"]>;
  shopping?: Maybe<Scalars["String"]>;
  status?: Maybe<Status>;
  surroundingSuburbs?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  yearBuilt: Scalars["String"];
};

export type PropertyInput = {
  address: Scalars["String"];
  appliances?: InputMaybe<Scalars["String"]>;
  basement?: InputMaybe<Scalars["String"]>;
  bathrooms: Scalars["Int"];
  bedrooms: Scalars["Int"];
  cooling?: InputMaybe<Scalars["String"]>;
  distanceToNearestSchool?: InputMaybe<Scalars["String"]>;
  featured?: InputMaybe<Scalars["Boolean"]>;
  flooring: Scalars["String"];
  forKids?: InputMaybe<Scalars["String"]>;
  heating?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  interior: Scalars["String"];
  lotSize: Scalars["String"];
  nightlife?: InputMaybe<Scalars["String"]>;
  otherInteriorFeatures?: InputMaybe<Scalars["String"]>;
  otherPropertyFeatures?: InputMaybe<Scalars["String"]>;
  overview: Scalars["String"];
  parking: Scalars["Int"];
  price: Scalars["String"];
  propertyCategory: Property_Category;
  residentialCategory?: InputMaybe<Residential_Category>;
  schools?: InputMaybe<Scalars["String"]>;
  shopping?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Status>;
  surroundingSuburbs?: InputMaybe<Scalars["String"]>;
  title: Scalars["String"];
  yearBuilt: Scalars["String"];
};

export enum Property_Category {
  Commercial = "COMMERCIAL",
  Industrial = "INDUSTRIAL",
  Office = "OFFICE",
  RawLand = "RAW_LAND",
  Residential = "RESIDENTIAL",
  SpecialUse = "SPECIAL_USE",
}

export type Query = {
  __typename?: "Query";
  allCommercialFeatures?: Maybe<Array<Maybe<CommercialFeatures>>>;
  allForms?: Maybe<Array<Maybe<Form>>>;
  allImages?: Maybe<Array<Maybe<Image>>>;
  allProperties?: Maybe<Array<Maybe<Property>>>;
  allResidentialFeatures?: Maybe<Array<Maybe<ResidentialFeatures>>>;
  blogCard?: Maybe<Array<Maybe<BlogPost>>>;
  blogPost?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  form?: Maybe<Form>;
  image?: Maybe<Image>;
  property?: Maybe<Property>;
};

export type QueryBlogPostArgs = {
  id: Scalars["ID"];
};

export type QueryFormArgs = {
  id: Scalars["ID"];
};

export type QueryImageArgs = {
  id: Scalars["ID"];
};

export type QueryPropertyArgs = {
  id: Scalars["ID"];
};

export type ResidentialFeatures = {
  __typename?: "ResidentialFeatures";
  id: Scalars["ID"];
  propertyId: Scalars["ID"];
  residentialFeature?: Maybe<Scalars["String"]>;
};

export type ResidentialFeaturesInput = {
  propertyId: Scalars["ID"];
  residentialFeature?: InputMaybe<Scalars["String"]>;
};

export enum Residential_Category {
  Condo = "CONDO",
  Duplex = "DUPLEX",
  Flat = "FLAT",
  FreeStanding = "FREE_STANDING",
  GrannyFlat = "GRANNY_FLAT",
  Luxury = "LUXURY",
  Simplex = "SIMPLEX",
}

export enum Status {
  ForRent = "FOR_RENT",
  ForSale = "FOR_SALE",
  Sold = "SOLD",
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BlogPost: ResolverTypeWrapper<BlogPostModel>;
  BlogPostInput: BlogPostInput;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  CommercialFeatures: ResolverTypeWrapper<CommercialFeatures>;
  CommercialFeaturesInput: CommercialFeaturesInput;
  Form: ResolverTypeWrapper<FormModel>;
  FormInput: FormInput;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Image: ResolverTypeWrapper<ImageModel>;
  ImageInput: ImageInput;
  Image_Category: Image_Category;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Property: ResolverTypeWrapper<PropertyModel>;
  PropertyInput: PropertyInput;
  Property_Category: Property_Category;
  Query: ResolverTypeWrapper<{}>;
  ResidentialFeatures: ResolverTypeWrapper<ResidentialFeatures>;
  ResidentialFeaturesInput: ResidentialFeaturesInput;
  Residential_Category: Residential_Category;
  Status: Status;
  String: ResolverTypeWrapper<Scalars["String"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BlogPost: BlogPostModel;
  BlogPostInput: BlogPostInput;
  Boolean: Scalars["Boolean"];
  CommercialFeatures: CommercialFeatures;
  CommercialFeaturesInput: CommercialFeaturesInput;
  Form: FormModel;
  FormInput: FormInput;
  ID: Scalars["ID"];
  Image: ImageModel;
  ImageInput: ImageInput;
  Int: Scalars["Int"];
  Mutation: {};
  Property: PropertyModel;
  PropertyInput: PropertyInput;
  Query: {};
  ResidentialFeatures: ResidentialFeatures;
  ResidentialFeaturesInput: ResidentialFeaturesInput;
  String: Scalars["String"];
};

export type BlogPostResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["BlogPost"] = ResolversParentTypes["BlogPost"]
> = {
  authorAbout?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  authorLink?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  authorName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  conclusion1?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  conclusion2?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  conclusion3?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  editedBy?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  mainImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  p1?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  photoCredit?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  publishedDate?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  reference1?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  reference2?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  subtitle1?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  subtitle2?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  subtitle3?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  subtitle4?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  tableContents1?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  tableContents2?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  tableContents3?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  tableContents4?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommercialFeaturesResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["CommercialFeatures"] = ResolversParentTypes["CommercialFeatures"]
> = {
  commercialFeature?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  propertyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FormResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["Form"] = ResolversParentTypes["Form"]
> = {
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["Image"] = ResolversParentTypes["Image"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  imageCategory?: Resolver<
    ResolversTypes["Image_Category"],
    ParentType,
    ContextType
  >;
  propertyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Image_CategoryResolvers = {
  INTERIOR: "undefined";
  MAIN: "undefined";
  PROPERTY: "undefined";
  SUBMAIN: "undefined";
  SURROUNDINGS: "undefined";
};

export type MutationResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  addBlogPost?: Resolver<
    Maybe<ResolversTypes["BlogPost"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddBlogPostArgs, "input">
  >;
  addForm?: Resolver<
    Maybe<ResolversTypes["Form"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddFormArgs, "input">
  >;
  addImage?: Resolver<
    Maybe<ResolversTypes["Image"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddImageArgs, "input">
  >;
  addImagesToProperty?: Resolver<
    Maybe<ResolversTypes["Property"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddImagesToPropertyArgs, "imagesIds" | "propertyId">
  >;
  addProperty?: Resolver<
    Maybe<ResolversTypes["Property"]>,
    ParentType,
    ContextType,
    RequireFields<MutationAddPropertyArgs, "input">
  >;
  updateBlogPost?: Resolver<
    Maybe<ResolversTypes["BlogPost"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBlogPostArgs, "input">
  >;
  updateImage?: Resolver<
    Maybe<ResolversTypes["Image"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateImageArgs, "id" | "input">
  >;
  updateProperty?: Resolver<
    Maybe<ResolversTypes["Property"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePropertyArgs, "input">
  >;
};

export type PropertyResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["Property"] = ResolversParentTypes["Property"]
> = {
  address?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  appliances?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  basement?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  bathrooms?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  bedrooms?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  cooling?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  distanceToNearestSchool?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  featured?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  flooring?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  forKids?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  heating?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Image"]>>>,
    ParentType,
    ContextType
  >;
  interior?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lotSize?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  nightlife?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  otherInteriorFeatures?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  otherPropertyFeatures?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  overview?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  parking?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  propertyCategory?: Resolver<
    ResolversTypes["Property_Category"],
    ParentType,
    ContextType
  >;
  residentialCategory?: Resolver<
    Maybe<ResolversTypes["Residential_Category"]>,
    ParentType,
    ContextType
  >;
  residentialFeatures?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ResidentialFeatures"]>>>,
    ParentType,
    ContextType
  >;
  schools?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  shopping?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["Status"]>, ParentType, ContextType>;
  surroundingSuburbs?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  yearBuilt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Property_CategoryResolvers = {
  COMMERCIAL: "undefined";
  INDUSTRIAL: "undefined";
  OFFICE: "undefined";
  RAW_LAND: "undefined";
  RESIDENTIAL: "undefined";
  SPECIAL_USE: "undefined";
};

export type QueryResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  allCommercialFeatures?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CommercialFeatures"]>>>,
    ParentType,
    ContextType
  >;
  allForms?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Form"]>>>,
    ParentType,
    ContextType
  >;
  allImages?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Image"]>>>,
    ParentType,
    ContextType
  >;
  allProperties?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Property"]>>>,
    ParentType,
    ContextType
  >;
  allResidentialFeatures?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ResidentialFeatures"]>>>,
    ParentType,
    ContextType
  >;
  blogCard?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["BlogPost"]>>>,
    ParentType,
    ContextType
  >;
  blogPost?: Resolver<
    Maybe<ResolversTypes["BlogPost"]>,
    ParentType,
    ContextType,
    RequireFields<QueryBlogPostArgs, "id">
  >;
  blogPosts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["BlogPost"]>>>,
    ParentType,
    ContextType
  >;
  form?: Resolver<
    Maybe<ResolversTypes["Form"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFormArgs, "id">
  >;
  image?: Resolver<
    Maybe<ResolversTypes["Image"]>,
    ParentType,
    ContextType,
    RequireFields<QueryImageArgs, "id">
  >;
  property?: Resolver<
    Maybe<ResolversTypes["Property"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPropertyArgs, "id">
  >;
};

export type ResidentialFeaturesResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes["ResidentialFeatures"] = ResolversParentTypes["ResidentialFeatures"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  propertyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  residentialFeature?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Residential_CategoryResolvers = {
  CONDO: "undefined";
  DUPLEX: "undefined";
  FLAT: "undefined";
  FREE_STANDING: "undefined";
  GRANNY_FLAT: "undefined";
  LUXURY: "undefined";
  SIMPLEX: "undefined";
};

export type StatusResolvers = {
  FOR_RENT: "undefined";
  FOR_SALE: "undefined";
  SOLD: "undefined";
};

export type Resolvers<ContextType = GraphQLContext> = {
  BlogPost?: BlogPostResolvers<ContextType>;
  CommercialFeatures?: CommercialFeaturesResolvers<ContextType>;
  Form?: FormResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Image_Category?: Image_CategoryResolvers;
  Mutation?: MutationResolvers<ContextType>;
  Property?: PropertyResolvers<ContextType>;
  Property_Category?: Property_CategoryResolvers;
  Query?: QueryResolvers<ContextType>;
  ResidentialFeatures?: ResidentialFeaturesResolvers<ContextType>;
  Residential_Category?: Residential_CategoryResolvers;
  Status?: StatusResolvers;
};

export const FormFragmentDoc = gql`
  fragment Form on Form {
    id
    name
    email
    message
  }
`;
export const BlogPostFragmentDoc = gql`
  fragment BlogPost on BlogPost {
    id
    publishedDate
    title
    subtitle1
    tableContents1
    tableContents2
    tableContents3
    tableContents4
    p1
    p2
    p3
    subtitle2
    p4
    p5
    l1
    l2
    l3
    l4
    l5
    subtitle3
    p6
    p7
    l6
    l7
    l8
    l9
    l10
    l11
    l12
    l13
    l14
    l15
    p8
    subtitle4
    conclusion1
    conclusion2
    conclusion3
    reference1
    reference2
    authorName
    authorAbout
    authorLink
    photoCredit
    editedBy
    mainImage
  }
`;
export const ImageFragmentDoc = gql`
  fragment Image on Image {
    id
    url
    propertyId
    imageCategory
  }
`;
export const PropertyFragmentDoc = gql`
  fragment Property on Property {
    id
    interior
    bedrooms
    bathrooms
    basement
    flooring
    appliances
    otherPropertyFeatures
    otherInteriorFeatures
    schools
    distanceToNearestSchool
    shopping
    nightlife
    forKids
    surroundingSuburbs
    featured
    status
    title
    overview
    address
    price
    yearBuilt
    heating
    cooling
    parking
    lotSize
    propertyCategory
    residentialCategory
    images {
      url
      id
      imageCategory
      propertyId
    }
  }
`;
export const AddFormDocument = gql`
  mutation AddForm($input: FormInput!) {
    addForm(input: $input) {
      ...Form
    }
  }
  ${FormFragmentDoc}
`;
export type AddFormMutationFn = Apollo.MutationFunction<
  AddFormMutation,
  AddFormMutationVariables
>;

/**
 * __useAddFormMutation__
 *
 * To run a mutation, you first call `useAddFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFormMutation, { data, loading, error }] = useAddFormMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddFormMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddFormMutation,
    AddFormMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddFormMutation, AddFormMutationVariables>(
    AddFormDocument,
    options
  );
}
export type AddFormMutationHookResult = ReturnType<typeof useAddFormMutation>;
export type AddFormMutationResult = Apollo.MutationResult<AddFormMutation>;
export type AddFormMutationOptions = Apollo.BaseMutationOptions<
  AddFormMutation,
  AddFormMutationVariables
>;
export const FormDocument = gql`
  query Form($id: ID!) {
    form(id: $id) {
      ...Form
    }
  }
  ${FormFragmentDoc}
`;

/**
 * __useFormQuery__
 *
 * To run a query within a React component, call `useFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFormQuery(
  baseOptions: Apollo.QueryHookOptions<FormQuery, FormQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FormQuery, FormQueryVariables>(FormDocument, options);
}
export function useFormLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FormQuery, FormQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FormQuery, FormQueryVariables>(
    FormDocument,
    options
  );
}
export type FormQueryHookResult = ReturnType<typeof useFormQuery>;
export type FormLazyQueryHookResult = ReturnType<typeof useFormLazyQuery>;
export type FormQueryResult = Apollo.QueryResult<FormQuery, FormQueryVariables>;
export const AddBlogPostDocument = gql`
  mutation AddBlogPost($input: BlogPostInput!) {
    addBlogPost(input: $input) {
      ...BlogPost
    }
  }
  ${BlogPostFragmentDoc}
`;
export type AddBlogPostMutationFn = Apollo.MutationFunction<
  AddBlogPostMutation,
  AddBlogPostMutationVariables
>;

/**
 * __useAddBlogPostMutation__
 *
 * To run a mutation, you first call `useAddBlogPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBlogPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBlogPostMutation, { data, loading, error }] = useAddBlogPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBlogPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddBlogPostMutation,
    AddBlogPostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddBlogPostMutation, AddBlogPostMutationVariables>(
    AddBlogPostDocument,
    options
  );
}
export type AddBlogPostMutationHookResult = ReturnType<
  typeof useAddBlogPostMutation
>;
export type AddBlogPostMutationResult =
  Apollo.MutationResult<AddBlogPostMutation>;
export type AddBlogPostMutationOptions = Apollo.BaseMutationOptions<
  AddBlogPostMutation,
  AddBlogPostMutationVariables
>;
export const BlogPostDocument = gql`
  query BlogPost($id: ID!) {
    blogPost(id: $id) {
      ...BlogPost
    }
  }
  ${BlogPostFragmentDoc}
`;

/**
 * __useBlogPostQuery__
 *
 * To run a query within a React component, call `useBlogPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBlogPostQuery(
  baseOptions: Apollo.QueryHookOptions<BlogPostQuery, BlogPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlogPostQuery, BlogPostQueryVariables>(
    BlogPostDocument,
    options
  );
}
export function useBlogPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogPostQuery,
    BlogPostQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlogPostQuery, BlogPostQueryVariables>(
    BlogPostDocument,
    options
  );
}
export type BlogPostQueryHookResult = ReturnType<typeof useBlogPostQuery>;
export type BlogPostLazyQueryHookResult = ReturnType<
  typeof useBlogPostLazyQuery
>;
export type BlogPostQueryResult = Apollo.QueryResult<
  BlogPostQuery,
  BlogPostQueryVariables
>;
export const BlogPostsDocument = gql`
  query BlogPosts {
    blogPosts {
      ...BlogPost
    }
  }
  ${BlogPostFragmentDoc}
`;

/**
 * __useBlogPostsQuery__
 *
 * To run a query within a React component, call `useBlogPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlogPostsQuery, BlogPostsQueryVariables>(
    BlogPostsDocument,
    options
  );
}
export function useBlogPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogPostsQuery,
    BlogPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlogPostsQuery, BlogPostsQueryVariables>(
    BlogPostsDocument,
    options
  );
}
export type BlogPostsQueryHookResult = ReturnType<typeof useBlogPostsQuery>;
export type BlogPostsLazyQueryHookResult = ReturnType<
  typeof useBlogPostsLazyQuery
>;
export type BlogPostsQueryResult = Apollo.QueryResult<
  BlogPostsQuery,
  BlogPostsQueryVariables
>;
export const UpdateBlogPostDocument = gql`
  mutation UpdateBlogPost($input: BlogPostInput!) {
    updateBlogPost(input: $input) {
      ...BlogPost
    }
  }
  ${BlogPostFragmentDoc}
`;
export type UpdateBlogPostMutationFn = Apollo.MutationFunction<
  UpdateBlogPostMutation,
  UpdateBlogPostMutationVariables
>;

/**
 * __useUpdateBlogPostMutation__
 *
 * To run a mutation, you first call `useUpdateBlogPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogPostMutation, { data, loading, error }] = useUpdateBlogPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBlogPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBlogPostMutation,
    UpdateBlogPostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateBlogPostMutation,
    UpdateBlogPostMutationVariables
  >(UpdateBlogPostDocument, options);
}
export type UpdateBlogPostMutationHookResult = ReturnType<
  typeof useUpdateBlogPostMutation
>;
export type UpdateBlogPostMutationResult =
  Apollo.MutationResult<UpdateBlogPostMutation>;
export type UpdateBlogPostMutationOptions = Apollo.BaseMutationOptions<
  UpdateBlogPostMutation,
  UpdateBlogPostMutationVariables
>;
export const AddImageDocument = gql`
  mutation AddImage($input: ImageInput!) {
    addImage(input: $input) {
      ...Image
    }
  }
  ${ImageFragmentDoc}
`;
export type AddImageMutationFn = Apollo.MutationFunction<
  AddImageMutation,
  AddImageMutationVariables
>;

/**
 * __useAddImageMutation__
 *
 * To run a mutation, you first call `useAddImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addImageMutation, { data, loading, error }] = useAddImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddImageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddImageMutation,
    AddImageMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddImageMutation, AddImageMutationVariables>(
    AddImageDocument,
    options
  );
}
export type AddImageMutationHookResult = ReturnType<typeof useAddImageMutation>;
export type AddImageMutationResult = Apollo.MutationResult<AddImageMutation>;
export type AddImageMutationOptions = Apollo.BaseMutationOptions<
  AddImageMutation,
  AddImageMutationVariables
>;
export const AddImagesToPropertyDocument = gql`
  mutation addImagesToProperty($propertyId: ID!, $imagesIds: [ID]!) {
    addImagesToProperty(propertyId: $propertyId, imagesIds: $imagesIds) {
      id
    }
  }
`;
export type AddImagesToPropertyMutationFn = Apollo.MutationFunction<
  AddImagesToPropertyMutation,
  AddImagesToPropertyMutationVariables
>;

/**
 * __useAddImagesToPropertyMutation__
 *
 * To run a mutation, you first call `useAddImagesToPropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddImagesToPropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addImagesToPropertyMutation, { data, loading, error }] = useAddImagesToPropertyMutation({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *      imagesIds: // value for 'imagesIds'
 *   },
 * });
 */
export function useAddImagesToPropertyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddImagesToPropertyMutation,
    AddImagesToPropertyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddImagesToPropertyMutation,
    AddImagesToPropertyMutationVariables
  >(AddImagesToPropertyDocument, options);
}
export type AddImagesToPropertyMutationHookResult = ReturnType<
  typeof useAddImagesToPropertyMutation
>;
export type AddImagesToPropertyMutationResult =
  Apollo.MutationResult<AddImagesToPropertyMutation>;
export type AddImagesToPropertyMutationOptions = Apollo.BaseMutationOptions<
  AddImagesToPropertyMutation,
  AddImagesToPropertyMutationVariables
>;
export const AllImagesDocument = gql`
  query AllImages {
    allImages {
      ...Image
    }
  }
  ${ImageFragmentDoc}
`;

/**
 * __useAllImagesQuery__
 *
 * To run a query within a React component, call `useAllImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllImagesQuery(
  baseOptions?: Apollo.QueryHookOptions<AllImagesQuery, AllImagesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllImagesQuery, AllImagesQueryVariables>(
    AllImagesDocument,
    options
  );
}
export function useAllImagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllImagesQuery,
    AllImagesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllImagesQuery, AllImagesQueryVariables>(
    AllImagesDocument,
    options
  );
}
export type AllImagesQueryHookResult = ReturnType<typeof useAllImagesQuery>;
export type AllImagesLazyQueryHookResult = ReturnType<
  typeof useAllImagesLazyQuery
>;
export type AllImagesQueryResult = Apollo.QueryResult<
  AllImagesQuery,
  AllImagesQueryVariables
>;
export const ImageDocument = gql`
  query Image($id: ID!) {
    image(id: $id) {
      ...Image
    }
  }
  ${ImageFragmentDoc}
`;

/**
 * __useImageQuery__
 *
 * To run a query within a React component, call `useImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useImageQuery(
  baseOptions: Apollo.QueryHookOptions<ImageQuery, ImageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ImageQuery, ImageQueryVariables>(
    ImageDocument,
    options
  );
}
export function useImageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ImageQuery, ImageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ImageQuery, ImageQueryVariables>(
    ImageDocument,
    options
  );
}
export type ImageQueryHookResult = ReturnType<typeof useImageQuery>;
export type ImageLazyQueryHookResult = ReturnType<typeof useImageLazyQuery>;
export type ImageQueryResult = Apollo.QueryResult<
  ImageQuery,
  ImageQueryVariables
>;
export const AddPropertyDocument = gql`
  mutation AddProperty($input: PropertyInput!) {
    addProperty(input: $input) {
      ...Property
    }
  }
  ${PropertyFragmentDoc}
`;
export type AddPropertyMutationFn = Apollo.MutationFunction<
  AddPropertyMutation,
  AddPropertyMutationVariables
>;

/**
 * __useAddPropertyMutation__
 *
 * To run a mutation, you first call `useAddPropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPropertyMutation, { data, loading, error }] = useAddPropertyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPropertyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddPropertyMutation,
    AddPropertyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddPropertyMutation, AddPropertyMutationVariables>(
    AddPropertyDocument,
    options
  );
}
export type AddPropertyMutationHookResult = ReturnType<
  typeof useAddPropertyMutation
>;
export type AddPropertyMutationResult =
  Apollo.MutationResult<AddPropertyMutation>;
export type AddPropertyMutationOptions = Apollo.BaseMutationOptions<
  AddPropertyMutation,
  AddPropertyMutationVariables
>;
export const AllPropertiesDocument = gql`
  query AllProperties {
    allProperties {
      ...Property
    }
  }
  ${PropertyFragmentDoc}
`;

/**
 * __useAllPropertiesQuery__
 *
 * To run a query within a React component, call `useAllPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPropertiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllPropertiesQuery,
    AllPropertiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllPropertiesQuery, AllPropertiesQueryVariables>(
    AllPropertiesDocument,
    options
  );
}
export function useAllPropertiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllPropertiesQuery,
    AllPropertiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllPropertiesQuery, AllPropertiesQueryVariables>(
    AllPropertiesDocument,
    options
  );
}
export type AllPropertiesQueryHookResult = ReturnType<
  typeof useAllPropertiesQuery
>;
export type AllPropertiesLazyQueryHookResult = ReturnType<
  typeof useAllPropertiesLazyQuery
>;
export type AllPropertiesQueryResult = Apollo.QueryResult<
  AllPropertiesQuery,
  AllPropertiesQueryVariables
>;
export const PropertyDocument = gql`
  query Property($id: ID!) {
    property(id: $id) {
      ...Property
    }
  }
  ${PropertyFragmentDoc}
`;

/**
 * __usePropertyQuery__
 *
 * To run a query within a React component, call `usePropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePropertyQuery(
  baseOptions: Apollo.QueryHookOptions<PropertyQuery, PropertyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PropertyQuery, PropertyQueryVariables>(
    PropertyDocument,
    options
  );
}
export function usePropertyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PropertyQuery,
    PropertyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PropertyQuery, PropertyQueryVariables>(
    PropertyDocument,
    options
  );
}
export type PropertyQueryHookResult = ReturnType<typeof usePropertyQuery>;
export type PropertyLazyQueryHookResult = ReturnType<
  typeof usePropertyLazyQuery
>;
export type PropertyQueryResult = Apollo.QueryResult<
  PropertyQuery,
  PropertyQueryVariables
>;
export const UpdatePropertyDocument = gql`
  mutation UpdateProperty($input: PropertyInput!) {
    updateProperty(input: $input) {
      ...Property
    }
  }
  ${PropertyFragmentDoc}
`;
export type UpdatePropertyMutationFn = Apollo.MutationFunction<
  UpdatePropertyMutation,
  UpdatePropertyMutationVariables
>;

/**
 * __useUpdatePropertyMutation__
 *
 * To run a mutation, you first call `useUpdatePropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePropertyMutation, { data, loading, error }] = useUpdatePropertyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePropertyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePropertyMutation,
    UpdatePropertyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdatePropertyMutation,
    UpdatePropertyMutationVariables
  >(UpdatePropertyDocument, options);
}
export type UpdatePropertyMutationHookResult = ReturnType<
  typeof useUpdatePropertyMutation
>;
export type UpdatePropertyMutationResult =
  Apollo.MutationResult<UpdatePropertyMutation>;
export type UpdatePropertyMutationOptions = Apollo.BaseMutationOptions<
  UpdatePropertyMutation,
  UpdatePropertyMutationVariables
>;
export type AddFormMutationVariables = Exact<{
  input: FormInput;
}>;

export type AddFormMutation = {
  __typename?: "Mutation";
  addForm?: {
    __typename?: "Form";
    id: string;
    name: string;
    email: string;
    message: string;
  } | null;
};

export type FormQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type FormQuery = {
  __typename?: "Query";
  form?: {
    __typename?: "Form";
    id: string;
    name: string;
    email: string;
    message: string;
  } | null;
};

export type FormFragment = {
  __typename?: "Form";
  id: string;
  name: string;
  email: string;
  message: string;
};

export type AddBlogPostMutationVariables = Exact<{
  input: BlogPostInput;
}>;

export type AddBlogPostMutation = {
  __typename?: "Mutation";
  addBlogPost?: {
    __typename?: "BlogPost";
    id: string;
    publishedDate?: string | null;
    title?: string | null;
    subtitle1?: string | null;
    tableContents1?: string | null;
    tableContents2?: string | null;
    tableContents3?: string | null;
    tableContents4?: string | null;
    p1?: string | null;
    p2?: string | null;
    p3?: string | null;
    subtitle2?: string | null;
    p4?: string | null;
    p5?: string | null;
    l1?: string | null;
    l2?: string | null;
    l3?: string | null;
    l4?: string | null;
    l5?: string | null;
    subtitle3?: string | null;
    p6?: string | null;
    p7?: string | null;
    l6?: string | null;
    l7?: string | null;
    l8?: string | null;
    l9?: string | null;
    l10?: string | null;
    l11?: string | null;
    l12?: string | null;
    l13?: string | null;
    l14?: string | null;
    l15?: string | null;
    p8?: string | null;
    subtitle4?: string | null;
    conclusion1?: string | null;
    conclusion2?: string | null;
    conclusion3?: string | null;
    reference1?: string | null;
    reference2?: string | null;
    authorName?: string | null;
    authorAbout?: string | null;
    authorLink?: string | null;
    photoCredit?: string | null;
    editedBy?: string | null;
    mainImage?: string | null;
  } | null;
};

export type BlogPostQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type BlogPostQuery = {
  __typename?: "Query";
  blogPost?: {
    __typename?: "BlogPost";
    id: string;
    publishedDate?: string | null;
    title?: string | null;
    subtitle1?: string | null;
    tableContents1?: string | null;
    tableContents2?: string | null;
    tableContents3?: string | null;
    tableContents4?: string | null;
    p1?: string | null;
    p2?: string | null;
    p3?: string | null;
    subtitle2?: string | null;
    p4?: string | null;
    p5?: string | null;
    l1?: string | null;
    l2?: string | null;
    l3?: string | null;
    l4?: string | null;
    l5?: string | null;
    subtitle3?: string | null;
    p6?: string | null;
    p7?: string | null;
    l6?: string | null;
    l7?: string | null;
    l8?: string | null;
    l9?: string | null;
    l10?: string | null;
    l11?: string | null;
    l12?: string | null;
    l13?: string | null;
    l14?: string | null;
    l15?: string | null;
    p8?: string | null;
    subtitle4?: string | null;
    conclusion1?: string | null;
    conclusion2?: string | null;
    conclusion3?: string | null;
    reference1?: string | null;
    reference2?: string | null;
    authorName?: string | null;
    authorAbout?: string | null;
    authorLink?: string | null;
    photoCredit?: string | null;
    editedBy?: string | null;
    mainImage?: string | null;
  } | null;
};

export type BlogPostFragment = {
  __typename?: "BlogPost";
  id: string;
  publishedDate?: string | null;
  title?: string | null;
  subtitle1?: string | null;
  tableContents1?: string | null;
  tableContents2?: string | null;
  tableContents3?: string | null;
  tableContents4?: string | null;
  p1?: string | null;
  p2?: string | null;
  p3?: string | null;
  subtitle2?: string | null;
  p4?: string | null;
  p5?: string | null;
  l1?: string | null;
  l2?: string | null;
  l3?: string | null;
  l4?: string | null;
  l5?: string | null;
  subtitle3?: string | null;
  p6?: string | null;
  p7?: string | null;
  l6?: string | null;
  l7?: string | null;
  l8?: string | null;
  l9?: string | null;
  l10?: string | null;
  l11?: string | null;
  l12?: string | null;
  l13?: string | null;
  l14?: string | null;
  l15?: string | null;
  p8?: string | null;
  subtitle4?: string | null;
  conclusion1?: string | null;
  conclusion2?: string | null;
  conclusion3?: string | null;
  reference1?: string | null;
  reference2?: string | null;
  authorName?: string | null;
  authorAbout?: string | null;
  authorLink?: string | null;
  photoCredit?: string | null;
  editedBy?: string | null;
  mainImage?: string | null;
};

export type BlogPostsQueryVariables = Exact<{ [key: string]: never }>;

export type BlogPostsQuery = {
  __typename?: "Query";
  blogPosts?: Array<{
    __typename?: "BlogPost";
    id: string;
    publishedDate?: string | null;
    title?: string | null;
    subtitle1?: string | null;
    tableContents1?: string | null;
    tableContents2?: string | null;
    tableContents3?: string | null;
    tableContents4?: string | null;
    p1?: string | null;
    p2?: string | null;
    p3?: string | null;
    subtitle2?: string | null;
    p4?: string | null;
    p5?: string | null;
    l1?: string | null;
    l2?: string | null;
    l3?: string | null;
    l4?: string | null;
    l5?: string | null;
    subtitle3?: string | null;
    p6?: string | null;
    p7?: string | null;
    l6?: string | null;
    l7?: string | null;
    l8?: string | null;
    l9?: string | null;
    l10?: string | null;
    l11?: string | null;
    l12?: string | null;
    l13?: string | null;
    l14?: string | null;
    l15?: string | null;
    p8?: string | null;
    subtitle4?: string | null;
    conclusion1?: string | null;
    conclusion2?: string | null;
    conclusion3?: string | null;
    reference1?: string | null;
    reference2?: string | null;
    authorName?: string | null;
    authorAbout?: string | null;
    authorLink?: string | null;
    photoCredit?: string | null;
    editedBy?: string | null;
    mainImage?: string | null;
  } | null> | null;
};

export type UpdateBlogPostMutationVariables = Exact<{
  input: BlogPostInput;
}>;

export type UpdateBlogPostMutation = {
  __typename?: "Mutation";
  updateBlogPost?: {
    __typename?: "BlogPost";
    id: string;
    publishedDate?: string | null;
    title?: string | null;
    subtitle1?: string | null;
    tableContents1?: string | null;
    tableContents2?: string | null;
    tableContents3?: string | null;
    tableContents4?: string | null;
    p1?: string | null;
    p2?: string | null;
    p3?: string | null;
    subtitle2?: string | null;
    p4?: string | null;
    p5?: string | null;
    l1?: string | null;
    l2?: string | null;
    l3?: string | null;
    l4?: string | null;
    l5?: string | null;
    subtitle3?: string | null;
    p6?: string | null;
    p7?: string | null;
    l6?: string | null;
    l7?: string | null;
    l8?: string | null;
    l9?: string | null;
    l10?: string | null;
    l11?: string | null;
    l12?: string | null;
    l13?: string | null;
    l14?: string | null;
    l15?: string | null;
    p8?: string | null;
    subtitle4?: string | null;
    conclusion1?: string | null;
    conclusion2?: string | null;
    conclusion3?: string | null;
    reference1?: string | null;
    reference2?: string | null;
    authorName?: string | null;
    authorAbout?: string | null;
    authorLink?: string | null;
    photoCredit?: string | null;
    editedBy?: string | null;
    mainImage?: string | null;
  } | null;
};

export type AddImageMutationVariables = Exact<{
  input: ImageInput;
}>;

export type AddImageMutation = {
  __typename?: "Mutation";
  addImage?: {
    __typename?: "Image";
    id: string;
    url?: string | null;
    propertyId: string;
    imageCategory: Image_Category;
  } | null;
};

export type AddImagesToPropertyMutationVariables = Exact<{
  propertyId: Scalars["ID"];
  imagesIds: Array<InputMaybe<Scalars["ID"]>> | InputMaybe<Scalars["ID"]>;
}>;

export type AddImagesToPropertyMutation = {
  __typename?: "Mutation";
  addImagesToProperty?: { __typename?: "Property"; id: string } | null;
};

export type AllImagesQueryVariables = Exact<{ [key: string]: never }>;

export type AllImagesQuery = {
  __typename?: "Query";
  allImages?: Array<{
    __typename?: "Image";
    id: string;
    url?: string | null;
    propertyId: string;
    imageCategory: Image_Category;
  } | null> | null;
};

export type ImageQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type ImageQuery = {
  __typename?: "Query";
  image?: {
    __typename?: "Image";
    id: string;
    url?: string | null;
    propertyId: string;
    imageCategory: Image_Category;
  } | null;
};

export type ImageFragment = {
  __typename?: "Image";
  id: string;
  url?: string | null;
  propertyId: string;
  imageCategory: Image_Category;
};

export type AddPropertyMutationVariables = Exact<{
  input: PropertyInput;
}>;

export type AddPropertyMutation = {
  __typename?: "Mutation";
  addProperty?: {
    __typename?: "Property";
    id: string;
    interior: string;
    bedrooms: number;
    bathrooms: number;
    basement?: string | null;
    flooring: string;
    appliances?: string | null;
    otherPropertyFeatures?: string | null;
    otherInteriorFeatures?: string | null;
    schools?: string | null;
    distanceToNearestSchool?: string | null;
    shopping?: string | null;
    nightlife?: string | null;
    forKids?: string | null;
    surroundingSuburbs?: string | null;
    featured?: boolean | null;
    status?: Status | null;
    title: string;
    overview: string;
    address: string;
    price: string;
    yearBuilt: string;
    heating?: string | null;
    cooling?: string | null;
    parking: number;
    lotSize: string;
    propertyCategory: Property_Category;
    residentialCategory?: Residential_Category | null;
    images?: Array<{
      __typename?: "Image";
      url?: string | null;
      id: string;
      imageCategory: Image_Category;
      propertyId: string;
    } | null> | null;
  } | null;
};

export type AllPropertiesQueryVariables = Exact<{ [key: string]: never }>;

export type AllPropertiesQuery = {
  __typename?: "Query";
  allProperties?: Array<{
    __typename?: "Property";
    id: string;
    interior: string;
    bedrooms: number;
    bathrooms: number;
    basement?: string | null;
    flooring: string;
    appliances?: string | null;
    otherPropertyFeatures?: string | null;
    otherInteriorFeatures?: string | null;
    schools?: string | null;
    distanceToNearestSchool?: string | null;
    shopping?: string | null;
    nightlife?: string | null;
    forKids?: string | null;
    surroundingSuburbs?: string | null;
    featured?: boolean | null;
    status?: Status | null;
    title: string;
    overview: string;
    address: string;
    price: string;
    yearBuilt: string;
    heating?: string | null;
    cooling?: string | null;
    parking: number;
    lotSize: string;
    propertyCategory: Property_Category;
    residentialCategory?: Residential_Category | null;
    images?: Array<{
      __typename?: "Image";
      url?: string | null;
      id: string;
      imageCategory: Image_Category;
      propertyId: string;
    } | null> | null;
  } | null> | null;
};

export type PropertyQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type PropertyQuery = {
  __typename?: "Query";
  property?: {
    __typename?: "Property";
    id: string;
    interior: string;
    bedrooms: number;
    bathrooms: number;
    basement?: string | null;
    flooring: string;
    appliances?: string | null;
    otherPropertyFeatures?: string | null;
    otherInteriorFeatures?: string | null;
    schools?: string | null;
    distanceToNearestSchool?: string | null;
    shopping?: string | null;
    nightlife?: string | null;
    forKids?: string | null;
    surroundingSuburbs?: string | null;
    featured?: boolean | null;
    status?: Status | null;
    title: string;
    overview: string;
    address: string;
    price: string;
    yearBuilt: string;
    heating?: string | null;
    cooling?: string | null;
    parking: number;
    lotSize: string;
    propertyCategory: Property_Category;
    residentialCategory?: Residential_Category | null;
    images?: Array<{
      __typename?: "Image";
      url?: string | null;
      id: string;
      imageCategory: Image_Category;
      propertyId: string;
    } | null> | null;
  } | null;
};

export type PropertyFragment = {
  __typename?: "Property";
  id: string;
  interior: string;
  bedrooms: number;
  bathrooms: number;
  basement?: string | null;
  flooring: string;
  appliances?: string | null;
  otherPropertyFeatures?: string | null;
  otherInteriorFeatures?: string | null;
  schools?: string | null;
  distanceToNearestSchool?: string | null;
  shopping?: string | null;
  nightlife?: string | null;
  forKids?: string | null;
  surroundingSuburbs?: string | null;
  featured?: boolean | null;
  status?: Status | null;
  title: string;
  overview: string;
  address: string;
  price: string;
  yearBuilt: string;
  heating?: string | null;
  cooling?: string | null;
  parking: number;
  lotSize: string;
  propertyCategory: Property_Category;
  residentialCategory?: Residential_Category | null;
  images?: Array<{
    __typename?: "Image";
    url?: string | null;
    id: string;
    imageCategory: Image_Category;
    propertyId: string;
  } | null> | null;
};

export type UpdatePropertyMutationVariables = Exact<{
  input: PropertyInput;
}>;

export type UpdatePropertyMutation = {
  __typename?: "Mutation";
  updateProperty?: {
    __typename?: "Property";
    id: string;
    interior: string;
    bedrooms: number;
    bathrooms: number;
    basement?: string | null;
    flooring: string;
    appliances?: string | null;
    otherPropertyFeatures?: string | null;
    otherInteriorFeatures?: string | null;
    schools?: string | null;
    distanceToNearestSchool?: string | null;
    shopping?: string | null;
    nightlife?: string | null;
    forKids?: string | null;
    surroundingSuburbs?: string | null;
    featured?: boolean | null;
    status?: Status | null;
    title: string;
    overview: string;
    address: string;
    price: string;
    yearBuilt: string;
    heating?: string | null;
    cooling?: string | null;
    parking: number;
    lotSize: string;
    propertyCategory: Property_Category;
    residentialCategory?: Residential_Category | null;
    images?: Array<{
      __typename?: "Image";
      url?: string | null;
      id: string;
      imageCategory: Image_Category;
      propertyId: string;
    } | null> | null;
  } | null;
};
