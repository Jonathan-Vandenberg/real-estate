import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Agent as AgentModel, Form as FormModel, Property as PropertyModel, BlogPost as BlogPostModel, ImageBlog as ImageBlogModel, ImageProduct as ImageProductModel, OfferIn as OfferInModel, ElecCompCompany as ElecCompCompanyModel, Intermologist as IntermologistModel, GasCompliance as GasComplianceModel, WaterCert as WaterCertModel, OfferAccepted as OfferAcceptedModel, BankInspection as BankInspectionModel, Conveyancer as ConveyancerModel, MortgageOriginator as MortgageOriginatorModel, FicaDocs as FicaDocsModel, ElectricFence as ElectricFenceModel, Alien as AlienModel, AdminMessage as AdminMessageModel, Document as DocumentModel, ResidentialFeature as ResidentialFeatureModel, CommercialFeature as CommercialFeatureModel, Todo as TodoModel } from '@prisma/client';
import { GraphQLContext } from './pages/api/index';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  DateTime: Date;
  Time: Date;
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AdminMessage = {
  __typename?: 'AdminMessage';
  adminId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  read?: Maybe<Scalars['Boolean']>;
  relatingTo?: Maybe<Offer_In_Categories>;
  title?: Maybe<Scalars['String']>;
  urgent?: Maybe<Scalars['Boolean']>;
};

export type AdminMessageInput = {
  adminId?: InputMaybe<Scalars['ID']>;
  message?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  read?: InputMaybe<Scalars['Boolean']>;
  relatingTo?: InputMaybe<Offer_In_Categories>;
  title?: InputMaybe<Scalars['String']>;
  urgent?: InputMaybe<Scalars['Boolean']>;
};

export type Agent = {
  __typename?: 'Agent';
  aboutMe?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  profileImage?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<Property>>>;
  roles?: Maybe<Roles>;
  updatedAt?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type AgentInput = {
  aboutMe?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  profileImage?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<InputMaybe<PropertyInput>>>;
  roles?: InputMaybe<Roles>;
  updatedAt?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type Alien = {
  __typename?: 'Alien';
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type AlienInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type BankInspection = {
  __typename?: 'BankInspection';
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type BankInspectionInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type BlogPost = {
  __typename?: 'BlogPost';
  authorAbout?: Maybe<Scalars['String']>;
  authorLink?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  conclusion1?: Maybe<Scalars['String']>;
  conclusion2?: Maybe<Scalars['String']>;
  conclusion3?: Maybe<Scalars['String']>;
  editedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageBlog?: Maybe<Array<Maybe<ImageBlog>>>;
  l1?: Maybe<Scalars['String']>;
  l2?: Maybe<Scalars['String']>;
  l3?: Maybe<Scalars['String']>;
  l4?: Maybe<Scalars['String']>;
  l5?: Maybe<Scalars['String']>;
  l6?: Maybe<Scalars['String']>;
  l7?: Maybe<Scalars['String']>;
  l8?: Maybe<Scalars['String']>;
  l9?: Maybe<Scalars['String']>;
  l10?: Maybe<Scalars['String']>;
  l11?: Maybe<Scalars['String']>;
  l12?: Maybe<Scalars['String']>;
  l13?: Maybe<Scalars['String']>;
  l14?: Maybe<Scalars['String']>;
  l15?: Maybe<Scalars['String']>;
  mainImage?: Maybe<Scalars['String']>;
  p1?: Maybe<Scalars['String']>;
  p2?: Maybe<Scalars['String']>;
  p3?: Maybe<Scalars['String']>;
  p4?: Maybe<Scalars['String']>;
  p5?: Maybe<Scalars['String']>;
  p6?: Maybe<Scalars['String']>;
  p7?: Maybe<Scalars['String']>;
  p8?: Maybe<Scalars['String']>;
  photoCredit?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  reference1?: Maybe<Scalars['String']>;
  reference2?: Maybe<Scalars['String']>;
  subtitle1?: Maybe<Scalars['String']>;
  subtitle2?: Maybe<Scalars['String']>;
  subtitle3?: Maybe<Scalars['String']>;
  subtitle4?: Maybe<Scalars['String']>;
  tableContents1?: Maybe<Scalars['String']>;
  tableContents2?: Maybe<Scalars['String']>;
  tableContents3?: Maybe<Scalars['String']>;
  tableContents4?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BlogPostInput = {
  authorAbout?: InputMaybe<Scalars['String']>;
  authorLink?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  conclusion1?: InputMaybe<Scalars['String']>;
  conclusion2?: InputMaybe<Scalars['String']>;
  conclusion3?: InputMaybe<Scalars['String']>;
  editedBy?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  l1?: InputMaybe<Scalars['String']>;
  l2?: InputMaybe<Scalars['String']>;
  l3?: InputMaybe<Scalars['String']>;
  l4?: InputMaybe<Scalars['String']>;
  l5?: InputMaybe<Scalars['String']>;
  l6?: InputMaybe<Scalars['String']>;
  l7?: InputMaybe<Scalars['String']>;
  l8?: InputMaybe<Scalars['String']>;
  l9?: InputMaybe<Scalars['String']>;
  l10?: InputMaybe<Scalars['String']>;
  l11?: InputMaybe<Scalars['String']>;
  l12?: InputMaybe<Scalars['String']>;
  l13?: InputMaybe<Scalars['String']>;
  l14?: InputMaybe<Scalars['String']>;
  l15?: InputMaybe<Scalars['String']>;
  mainImage?: InputMaybe<Scalars['String']>;
  p1?: InputMaybe<Scalars['String']>;
  p2?: InputMaybe<Scalars['String']>;
  p3?: InputMaybe<Scalars['String']>;
  p4?: InputMaybe<Scalars['String']>;
  p5?: InputMaybe<Scalars['String']>;
  p6?: InputMaybe<Scalars['String']>;
  p7?: InputMaybe<Scalars['String']>;
  p8?: InputMaybe<Scalars['String']>;
  photoCredit?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  reference1?: InputMaybe<Scalars['String']>;
  reference2?: InputMaybe<Scalars['String']>;
  subtitle1?: InputMaybe<Scalars['String']>;
  subtitle2?: InputMaybe<Scalars['String']>;
  subtitle3?: InputMaybe<Scalars['String']>;
  subtitle4?: InputMaybe<Scalars['String']>;
  tableContents1?: InputMaybe<Scalars['String']>;
  tableContents2?: InputMaybe<Scalars['String']>;
  tableContents3?: InputMaybe<Scalars['String']>;
  tableContents4?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CommercialFeature = {
  __typename?: 'CommercialFeature';
  commercialFeature?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  propertyId: Scalars['ID'];
};

export type CommercialFeatureInput = {
  commercialFeature?: InputMaybe<Scalars['String']>;
  propertyId: Scalars['ID'];
};

export type Conveyancer = {
  __typename?: 'Conveyancer';
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
};

export type ConveyancerInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  phone?: InputMaybe<Scalars['String']>;
};

export type Document = {
  __typename?: 'Document';
  documentCategory?: Maybe<Document_Category>;
  id: Scalars['ID'];
  offerInId: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
};

export type DocumentInput = {
  documentCategory?: InputMaybe<Document_Category>;
  offerInId: Scalars['ID'];
  url?: InputMaybe<Scalars['String']>;
};

export enum Document_Category {
  Alien = 'ALIEN',
  BankInspection = 'BANK_INSPECTION',
  ComCert = 'COM_CERT',
  Conveyancer = 'CONVEYANCER',
  Cop = 'COP',
  Eleccompcompany = 'ELECCOMPCOMPANY',
  ElectricFence = 'ELECTRIC_FENCE',
  FicaDocuments = 'FICA_DOCUMENTS',
  GasComCert = 'GAS_COM_CERT',
  Intermologist = 'INTERMOLOGIST',
  MarriageLicense = 'MARRIAGE_LICENSE',
  Mortgage = 'MORTGAGE',
  OfferAccepted = 'OFFER_ACCEPTED',
  TaxCert = 'TAX_CERT',
  WaterCert = 'WATER_CERT'
}

export type ElecCompCompany = {
  __typename?: 'ElecCompCompany';
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
};

export type ElecCompCompanyInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  phone?: InputMaybe<Scalars['String']>;
};

export type ElectricFence = {
  __typename?: 'ElectricFence';
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type ElectricFenceInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type FicaDocs = {
  __typename?: 'FicaDocs';
  address?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type FicaDocsInput = {
  address?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type Form = {
  __typename?: 'Form';
  email: Scalars['String'];
  id: Scalars['ID'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type FormInput = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type GasCompliance = {
  __typename?: 'GasCompliance';
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  flag?: Maybe<Scalars['Boolean']>;
  gasCompCerUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type GasComplianceInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  gasCompCerUrl?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type ImageBlog = {
  __typename?: 'ImageBlog';
  blogPostId: Scalars['ID'];
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
};

export type ImageBlogInput = {
  blogPostId: Scalars['ID'];
  url?: InputMaybe<Scalars['String']>;
};

export type ImageProduct = {
  __typename?: 'ImageProduct';
  id: Scalars['ID'];
  imageCategory?: Maybe<Image_Category>;
  propertyId: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
};

export type ImageProductInput = {
  imageCategory?: InputMaybe<Image_Category>;
  propertyId: Scalars['ID'];
  url?: InputMaybe<Scalars['String']>;
};

export enum Image_Category {
  Main = 'MAIN',
  Property = 'PROPERTY'
}

export type Intermologist = {
  __typename?: 'Intermologist';
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
};

export type IntermologistInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  phone?: InputMaybe<Scalars['String']>;
};

export type MortgageOriginator = {
  __typename?: 'MortgageOriginator';
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
};

export type MortgageOriginatorInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  phone?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAgent?: Maybe<Agent>;
  addBlogPost?: Maybe<BlogPost>;
  addCommercialFeature?: Maybe<CommercialFeature>;
  addDocument?: Maybe<Document>;
  addForm?: Maybe<Form>;
  addImage?: Maybe<ImageProduct>;
  addImageBlog?: Maybe<ImageBlog>;
  addOfferIn?: Maybe<OfferIn>;
  addProperty?: Maybe<Property>;
  addResidentialFeature?: Maybe<ResidentialFeature>;
  addTodo?: Maybe<Todo>;
  deleteAgentImage?: Maybe<Agent>;
  deleteDocument?: Maybe<Document>;
  deleteImage?: Maybe<ImageProduct>;
  deleteImageBlog?: Maybe<ImageBlog>;
  deleteTodo?: Maybe<Todo>;
  updateAgent?: Maybe<Agent>;
  updateBlogPost?: Maybe<BlogPost>;
  updateDocument?: Maybe<Document>;
  updateImage?: Maybe<ImageProduct>;
  updateImageBlog?: Maybe<ImageBlog>;
  updateOfferIn?: Maybe<OfferIn>;
  updateProperty?: Maybe<Property>;
  updateTodo?: Maybe<Todo>;
};


export type MutationAddAgentArgs = {
  input?: InputMaybe<AgentInput>;
};


export type MutationAddBlogPostArgs = {
  input: BlogPostInput;
};


export type MutationAddCommercialFeatureArgs = {
  input: CommercialFeatureInput;
};


export type MutationAddDocumentArgs = {
  input: DocumentInput;
};


export type MutationAddFormArgs = {
  input: FormInput;
};


export type MutationAddImageArgs = {
  input: ImageProductInput;
};


export type MutationAddImageBlogArgs = {
  input: ImageBlogInput;
};


export type MutationAddOfferInArgs = {
  input: OfferInInput;
};


export type MutationAddPropertyArgs = {
  input: PropertyInput;
};


export type MutationAddResidentialFeatureArgs = {
  input: ResidentialFeatureInput;
};


export type MutationAddTodoArgs = {
  input: TodoInput;
};


export type MutationDeleteAgentImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDocumentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImageBlogArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAgentArgs = {
  input?: InputMaybe<AgentInput>;
};


export type MutationUpdateBlogPostArgs = {
  input: BlogPostInput;
};


export type MutationUpdateDocumentArgs = {
  id: Scalars['ID'];
  input: DocumentInput;
};


export type MutationUpdateImageArgs = {
  id: Scalars['ID'];
  input: ImageProductInput;
};


export type MutationUpdateImageBlogArgs = {
  id: Scalars['ID'];
  input: ImageBlogInput;
};


export type MutationUpdateOfferInArgs = {
  input: OfferInInput;
};


export type MutationUpdatePropertyArgs = {
  input: PropertyInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: TodoInput;
};

export type OfferAccepted = {
  __typename?: 'OfferAccepted';
  completed?: Maybe<Scalars['Boolean']>;
  conditions?: Maybe<Scalars['String']>;
  deadline?: Maybe<Scalars['DateTime']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  withConditions?: Maybe<Scalars['Boolean']>;
};

export type OfferAcceptedInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  conditions?: InputMaybe<Scalars['String']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
  withConditions?: InputMaybe<Scalars['Boolean']>;
};

export type OfferIn = {
  __typename?: 'OfferIn';
  alien?: Maybe<Alien>;
  alienId: Scalars['ID'];
  amount?: Maybe<Scalars['String']>;
  bankInspection?: Maybe<BankInspection>;
  bankInspectionId: Scalars['ID'];
  bankName?: Maybe<Scalars['String']>;
  conveyancer?: Maybe<Conveyancer>;
  conveyancerId: Scalars['ID'];
  dateOfBondApplication?: Maybe<Scalars['DateTime']>;
  dateOfBondApprovalInPrincipal?: Maybe<Scalars['DateTime']>;
  dateOfBondApproved?: Maybe<Scalars['DateTime']>;
  documents?: Maybe<Array<Maybe<Document>>>;
  dot?: Maybe<Scalars['DateTime']>;
  elecCompCompany?: Maybe<ElecCompCompany>;
  elecCompCompanyId: Scalars['ID'];
  electricFence?: Maybe<ElectricFence>;
  electricFenceId: Scalars['ID'];
  ficaDocs?: Maybe<FicaDocs>;
  ficaDocsId: Scalars['ID'];
  flag?: Maybe<Scalars['Boolean']>;
  gasCompliance?: Maybe<GasCompliance>;
  gasComplianceId: Scalars['ID'];
  id: Scalars['ID'];
  intermologist?: Maybe<Intermologist>;
  intermologistId: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  mortgageOriginator?: Maybe<MortgageOriginator>;
  mortgageOriginatorId: Scalars['ID'];
  offerAccepted?: Maybe<OfferAccepted>;
  offerAcceptedId: Scalars['ID'];
  propertyId: Scalars['ID'];
  todos?: Maybe<Array<Maybe<Todo>>>;
  waterCert?: Maybe<WaterCert>;
  waterCertId: Scalars['ID'];
};

export type OfferInInput = {
  alien?: InputMaybe<AlienInput>;
  alienId: Scalars['ID'];
  amount?: InputMaybe<Scalars['String']>;
  bankInspection?: InputMaybe<BankInspectionInput>;
  bankInspectionId: Scalars['ID'];
  bankName?: InputMaybe<Scalars['String']>;
  conveyancer?: InputMaybe<ConveyancerInput>;
  conveyancerId: Scalars['ID'];
  dateOfBondApplication?: InputMaybe<Scalars['DateTime']>;
  dateOfBondApprovalInPrincipal?: InputMaybe<Scalars['DateTime']>;
  dateOfBondApproved?: InputMaybe<Scalars['DateTime']>;
  documents?: InputMaybe<DocumentInput>;
  dot?: InputMaybe<Scalars['DateTime']>;
  elecCompCompany?: InputMaybe<ElecCompCompanyInput>;
  elecCompCompanyId: Scalars['ID'];
  electricFence?: InputMaybe<ElectricFenceInput>;
  electricFenceId: Scalars['ID'];
  ficaDocs?: InputMaybe<FicaDocsInput>;
  ficaDocsId: Scalars['ID'];
  flag?: InputMaybe<Scalars['Boolean']>;
  gasCompliance?: InputMaybe<GasComplianceInput>;
  gasComplianceId: Scalars['ID'];
  id: Scalars['ID'];
  intermologist?: InputMaybe<IntermologistInput>;
  intermologistId: Scalars['ID'];
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  mortgageOriginator?: InputMaybe<MortgageOriginatorInput>;
  mortgageOriginatorId: Scalars['ID'];
  offerAccepted?: InputMaybe<OfferAcceptedInput>;
  offerAcceptedId: Scalars['ID'];
  propertyId: Scalars['ID'];
  waterCert?: InputMaybe<WaterCertInput>;
  waterCertId: Scalars['ID'];
};

export enum Offer_In_Categories {
  Alien = 'ALIEN',
  Bankinspection = 'BANKINSPECTION',
  Conveyancer = 'CONVEYANCER',
  Eleccompcompany = 'ELECCOMPCOMPANY',
  ElectricFence = 'ELECTRIC_FENCE',
  Ficadocs = 'FICADOCS',
  Gascompliance = 'GASCOMPLIANCE',
  General = 'GENERAL',
  Intermologist = 'INTERMOLOGIST',
  Mortgageoriginator = 'MORTGAGEORIGINATOR',
  Offeraccepted = 'OFFERACCEPTED',
  Watercert = 'WATERCERT'
}

export type Property = {
  __typename?: 'Property';
  address: Scalars['String'];
  agentId: Scalars['ID'];
  appliances?: Maybe<Scalars['String']>;
  basement?: Maybe<Scalars['String']>;
  bathrooms: Scalars['Int'];
  bedrooms: Scalars['Int'];
  commercialFeatures?: Maybe<Array<Maybe<CommercialFeature>>>;
  cooling?: Maybe<Scalars['String']>;
  distanceToNearestSchool?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  flooring: Scalars['String'];
  forKids?: Maybe<Scalars['String']>;
  heating?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<ImageProduct>>>;
  interior: Scalars['String'];
  lotSize: Scalars['String'];
  nightlife?: Maybe<Scalars['String']>;
  offerIn?: Maybe<OfferIn>;
  otherInteriorFeatures?: Maybe<Scalars['String']>;
  otherPropertyFeatures?: Maybe<Scalars['String']>;
  overview: Scalars['String'];
  parking: Scalars['Int'];
  price: Scalars['String'];
  propertyCategory: Property_Category;
  residentialCategory?: Maybe<Residential_Category>;
  residentialFeatures?: Maybe<Array<Maybe<ResidentialFeature>>>;
  schools?: Maybe<Scalars['String']>;
  shopping?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  surroundingSuburbs?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  yearBuilt?: Maybe<Scalars['String']>;
};

export type PropertyInput = {
  address: Scalars['String'];
  agentId: Scalars['ID'];
  appliances?: InputMaybe<Scalars['String']>;
  basement?: InputMaybe<Scalars['String']>;
  bathrooms: Scalars['Int'];
  bedrooms: Scalars['Int'];
  cooling?: InputMaybe<Scalars['String']>;
  distanceToNearestSchool?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  flooring: Scalars['String'];
  forKids?: InputMaybe<Scalars['String']>;
  heating?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  interior: Scalars['String'];
  lotSize: Scalars['String'];
  nightlife?: InputMaybe<Scalars['String']>;
  otherInteriorFeatures?: InputMaybe<Scalars['String']>;
  otherPropertyFeatures?: InputMaybe<Scalars['String']>;
  overview: Scalars['String'];
  parking: Scalars['Int'];
  price: Scalars['String'];
  propertyCategory: Property_Category;
  residentialCategory?: InputMaybe<Residential_Category>;
  schools?: InputMaybe<Scalars['String']>;
  shopping?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
  surroundingSuburbs?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  yearBuilt?: InputMaybe<Scalars['String']>;
};

export enum Property_Category {
  Commercial = 'COMMERCIAL',
  Industrial = 'INDUSTRIAL',
  Office = 'OFFICE',
  RawLand = 'RAW_LAND',
  Residential = 'RESIDENTIAL',
  SpecialUse = 'SPECIAL_USE'
}

export type Query = {
  __typename?: 'Query';
  agent?: Maybe<Agent>;
  allAgents?: Maybe<Array<Maybe<Agent>>>;
  allCommercialFeatures?: Maybe<Array<Maybe<CommercialFeature>>>;
  allDocuments?: Maybe<Array<Maybe<Document>>>;
  allForms?: Maybe<Array<Maybe<Form>>>;
  allImageBlogs?: Maybe<Array<Maybe<ImageBlog>>>;
  allImages?: Maybe<Array<Maybe<ImageProduct>>>;
  allProperties?: Maybe<Array<Maybe<Property>>>;
  allResidentialFeatures?: Maybe<Array<Maybe<ResidentialFeature>>>;
  blogCard?: Maybe<Array<Maybe<BlogPost>>>;
  blogPost?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  document?: Maybe<Document>;
  form?: Maybe<Form>;
  image?: Maybe<ImageProduct>;
  imageBlog?: Maybe<ImageBlog>;
  property?: Maybe<Property>;
};


export type QueryAgentArgs = {
  email: Scalars['String'];
};


export type QueryBlogPostArgs = {
  id: Scalars['ID'];
};


export type QueryDocumentArgs = {
  id: Scalars['ID'];
};


export type QueryFormArgs = {
  id: Scalars['ID'];
};


export type QueryImageArgs = {
  id: Scalars['ID'];
};


export type QueryImageBlogArgs = {
  id: Scalars['ID'];
};


export type QueryPropertyArgs = {
  id: Scalars['ID'];
};

export type ResidentialFeature = {
  __typename?: 'ResidentialFeature';
  id: Scalars['ID'];
  propertyId: Scalars['ID'];
  residentialFeature?: Maybe<Scalars['String']>;
};

export type ResidentialFeatureInput = {
  propertyId: Scalars['ID'];
  residentialFeature?: InputMaybe<Scalars['String']>;
};

export enum Residential_Category {
  Condo = 'CONDO',
  Duplex = 'DUPLEX',
  Flat = 'FLAT',
  FreeStanding = 'FREE_STANDING',
  GrannyFlat = 'GRANNY_FLAT',
  Luxury = 'LUXURY',
  Simplex = 'SIMPLEX'
}

export enum Roles {
  Admin = 'ADMIN',
  Agent = 'AGENT',
  Ceo = 'CEO',
  Manager = 'MANAGER'
}

export enum Status {
  ForRent = 'FOR_RENT',
  ForSale = 'FOR_SALE',
  OfferIn = 'OFFER_IN',
  Sold = 'SOLD'
}

export type Subscription = {
  __typename?: 'Subscription';
  updatedAgent?: Maybe<Agent>;
};

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  offerInCategory?: Maybe<Offer_In_Categories>;
  offerInId: Scalars['ID'];
  task?: Maybe<Scalars['String']>;
};

export type TodoInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  offerInCategory?: InputMaybe<Offer_In_Categories>;
  offerInId: Scalars['ID'];
  task?: InputMaybe<Scalars['String']>;
};

export type UpdateOfferInResponse = {
  __typename?: 'UpdateOfferInResponse';
  alien?: Maybe<Alien>;
  bankInspection?: Maybe<BankInspection>;
  conveyancer?: Maybe<Conveyancer>;
  elecCompCompany?: Maybe<ElecCompCompany>;
  electricFence?: Maybe<ElectricFence>;
  ficaDocs?: Maybe<FicaDocs>;
  gasCompliance?: Maybe<GasCompliance>;
  intermologist?: Maybe<Intermologist>;
  mortgageOriginator?: Maybe<MortgageOriginator>;
  offerAccepted?: Maybe<OfferAccepted>;
  offerIn?: Maybe<OfferIn>;
  waterCert?: Maybe<WaterCert>;
};

export type WaterCert = {
  __typename?: 'WaterCert';
  completed?: Maybe<Scalars['Boolean']>;
  deadline?: Maybe<Scalars['DateTime']>;
  flag?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  message?: Maybe<Array<Maybe<AdminMessage>>>;
  notes?: Maybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};

export type WaterCertInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  flag?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Array<InputMaybe<AdminMessageInput>>>;
  notes?: InputMaybe<Scalars['String']>;
  offerInId: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Account>;
  AdminMessage: ResolverTypeWrapper<AdminMessageModel>;
  AdminMessageInput: AdminMessageInput;
  Agent: ResolverTypeWrapper<AgentModel>;
  AgentInput: AgentInput;
  Alien: ResolverTypeWrapper<AlienModel>;
  AlienInput: AlienInput;
  BankInspection: ResolverTypeWrapper<BankInspectionModel>;
  BankInspectionInput: BankInspectionInput;
  BlogPost: ResolverTypeWrapper<BlogPostModel>;
  BlogPostInput: BlogPostInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CommercialFeature: ResolverTypeWrapper<CommercialFeatureModel>;
  CommercialFeatureInput: CommercialFeatureInput;
  Conveyancer: ResolverTypeWrapper<ConveyancerModel>;
  ConveyancerInput: ConveyancerInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Document: ResolverTypeWrapper<DocumentModel>;
  DocumentInput: DocumentInput;
  Document_Category: Document_Category;
  ElecCompCompany: ResolverTypeWrapper<ElecCompCompanyModel>;
  ElecCompCompanyInput: ElecCompCompanyInput;
  ElectricFence: ResolverTypeWrapper<ElectricFenceModel>;
  ElectricFenceInput: ElectricFenceInput;
  FicaDocs: ResolverTypeWrapper<FicaDocsModel>;
  FicaDocsInput: FicaDocsInput;
  Form: ResolverTypeWrapper<FormModel>;
  FormInput: FormInput;
  GasCompliance: ResolverTypeWrapper<GasComplianceModel>;
  GasComplianceInput: GasComplianceInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImageBlog: ResolverTypeWrapper<ImageBlogModel>;
  ImageBlogInput: ImageBlogInput;
  ImageProduct: ResolverTypeWrapper<ImageProductModel>;
  ImageProductInput: ImageProductInput;
  Image_Category: Image_Category;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Intermologist: ResolverTypeWrapper<IntermologistModel>;
  IntermologistInput: IntermologistInput;
  MortgageOriginator: ResolverTypeWrapper<MortgageOriginatorModel>;
  MortgageOriginatorInput: MortgageOriginatorInput;
  Mutation: ResolverTypeWrapper<{}>;
  OfferAccepted: ResolverTypeWrapper<OfferAcceptedModel>;
  OfferAcceptedInput: OfferAcceptedInput;
  OfferIn: ResolverTypeWrapper<OfferInModel>;
  OfferInInput: OfferInInput;
  Offer_In_Categories: Offer_In_Categories;
  Property: ResolverTypeWrapper<PropertyModel>;
  PropertyInput: PropertyInput;
  Property_Category: Property_Category;
  Query: ResolverTypeWrapper<{}>;
  ResidentialFeature: ResolverTypeWrapper<ResidentialFeatureModel>;
  ResidentialFeatureInput: ResidentialFeatureInput;
  Residential_Category: Residential_Category;
  Roles: Roles;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  Todo: ResolverTypeWrapper<TodoModel>;
  TodoInput: TodoInput;
  UpdateOfferInResponse: ResolverTypeWrapper<Omit<UpdateOfferInResponse, 'alien' | 'bankInspection' | 'conveyancer' | 'elecCompCompany' | 'electricFence' | 'ficaDocs' | 'gasCompliance' | 'intermologist' | 'mortgageOriginator' | 'offerAccepted' | 'offerIn' | 'waterCert'> & { alien?: Maybe<ResolversTypes['Alien']>, bankInspection?: Maybe<ResolversTypes['BankInspection']>, conveyancer?: Maybe<ResolversTypes['Conveyancer']>, elecCompCompany?: Maybe<ResolversTypes['ElecCompCompany']>, electricFence?: Maybe<ResolversTypes['ElectricFence']>, ficaDocs?: Maybe<ResolversTypes['FicaDocs']>, gasCompliance?: Maybe<ResolversTypes['GasCompliance']>, intermologist?: Maybe<ResolversTypes['Intermologist']>, mortgageOriginator?: Maybe<ResolversTypes['MortgageOriginator']>, offerAccepted?: Maybe<ResolversTypes['OfferAccepted']>, offerIn?: Maybe<ResolversTypes['OfferIn']>, waterCert?: Maybe<ResolversTypes['WaterCert']> }>;
  WaterCert: ResolverTypeWrapper<WaterCertModel>;
  WaterCertInput: WaterCertInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  AdminMessage: AdminMessageModel;
  AdminMessageInput: AdminMessageInput;
  Agent: AgentModel;
  AgentInput: AgentInput;
  Alien: AlienModel;
  AlienInput: AlienInput;
  BankInspection: BankInspectionModel;
  BankInspectionInput: BankInspectionInput;
  BlogPost: BlogPostModel;
  BlogPostInput: BlogPostInput;
  Boolean: Scalars['Boolean'];
  CommercialFeature: CommercialFeatureModel;
  CommercialFeatureInput: CommercialFeatureInput;
  Conveyancer: ConveyancerModel;
  ConveyancerInput: ConveyancerInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Document: DocumentModel;
  DocumentInput: DocumentInput;
  ElecCompCompany: ElecCompCompanyModel;
  ElecCompCompanyInput: ElecCompCompanyInput;
  ElectricFence: ElectricFenceModel;
  ElectricFenceInput: ElectricFenceInput;
  FicaDocs: FicaDocsModel;
  FicaDocsInput: FicaDocsInput;
  Form: FormModel;
  FormInput: FormInput;
  GasCompliance: GasComplianceModel;
  GasComplianceInput: GasComplianceInput;
  ID: Scalars['ID'];
  ImageBlog: ImageBlogModel;
  ImageBlogInput: ImageBlogInput;
  ImageProduct: ImageProductModel;
  ImageProductInput: ImageProductInput;
  Int: Scalars['Int'];
  Intermologist: IntermologistModel;
  IntermologistInput: IntermologistInput;
  MortgageOriginator: MortgageOriginatorModel;
  MortgageOriginatorInput: MortgageOriginatorInput;
  Mutation: {};
  OfferAccepted: OfferAcceptedModel;
  OfferAcceptedInput: OfferAcceptedInput;
  OfferIn: OfferInModel;
  OfferInInput: OfferInInput;
  Property: PropertyModel;
  PropertyInput: PropertyInput;
  Query: {};
  ResidentialFeature: ResidentialFeatureModel;
  ResidentialFeatureInput: ResidentialFeatureInput;
  String: Scalars['String'];
  Subscription: {};
  Time: Scalars['Time'];
  Todo: TodoModel;
  TodoInput: TodoInput;
  UpdateOfferInResponse: Omit<UpdateOfferInResponse, 'alien' | 'bankInspection' | 'conveyancer' | 'elecCompCompany' | 'electricFence' | 'ficaDocs' | 'gasCompliance' | 'intermologist' | 'mortgageOriginator' | 'offerAccepted' | 'offerIn' | 'waterCert'> & { alien?: Maybe<ResolversParentTypes['Alien']>, bankInspection?: Maybe<ResolversParentTypes['BankInspection']>, conveyancer?: Maybe<ResolversParentTypes['Conveyancer']>, elecCompCompany?: Maybe<ResolversParentTypes['ElecCompCompany']>, electricFence?: Maybe<ResolversParentTypes['ElectricFence']>, ficaDocs?: Maybe<ResolversParentTypes['FicaDocs']>, gasCompliance?: Maybe<ResolversParentTypes['GasCompliance']>, intermologist?: Maybe<ResolversParentTypes['Intermologist']>, mortgageOriginator?: Maybe<ResolversParentTypes['MortgageOriginator']>, offerAccepted?: Maybe<ResolversParentTypes['OfferAccepted']>, offerIn?: Maybe<ResolversParentTypes['OfferIn']>, waterCert?: Maybe<ResolversParentTypes['WaterCert']> };
  WaterCert: WaterCertModel;
  WaterCertInput: WaterCertInput;
};

export type AccountResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  session_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminMessageResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['AdminMessage'] = ResolversParentTypes['AdminMessage']> = {
  adminId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  read?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  relatingTo?: Resolver<Maybe<ResolversTypes['Offer_In_Categories']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urgent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgentResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Agent'] = ResolversParentTypes['Agent']> = {
  aboutMe?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<Array<Maybe<ResolversTypes['Property']>>>, ParentType, ContextType>;
  roles?: Resolver<Maybe<ResolversTypes['Roles']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlienResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Alien'] = ResolversParentTypes['Alien']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BankInspectionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BankInspection'] = ResolversParentTypes['BankInspection']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogPostResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['BlogPost'] = ResolversParentTypes['BlogPost']> = {
  authorAbout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conclusion3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageBlog?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageBlog']>>>, ParentType, ContextType>;
  l1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l9?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l10?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l11?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l12?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l13?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l14?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  l15?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p6?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p7?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p8?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoCredit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subtitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tableContents4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommercialFeatureResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CommercialFeature'] = ResolversParentTypes['CommercialFeature']> = {
  commercialFeature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  propertyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConveyancerResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Conveyancer'] = ResolversParentTypes['Conveyancer']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DocumentResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = {
  documentCategory?: Resolver<Maybe<ResolversTypes['Document_Category']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Document_CategoryResolvers = { ALIEN: 'undefined', BANK_INSPECTION: 'undefined', COM_CERT: 'undefined', CONVEYANCER: 'undefined', COP: 'undefined', ELECCOMPCOMPANY: 'undefined', ELECTRIC_FENCE: 'undefined', FICA_DOCUMENTS: 'undefined', GAS_COM_CERT: 'undefined', INTERMOLOGIST: 'undefined', MARRIAGE_LICENSE: 'undefined', MORTGAGE: 'undefined', OFFER_ACCEPTED: 'undefined', TAX_CERT: 'undefined', WATER_CERT: 'undefined' };

export type ElecCompCompanyResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ElecCompCompany'] = ResolversParentTypes['ElecCompCompany']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ElectricFenceResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ElectricFence'] = ResolversParentTypes['ElectricFence']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FicaDocsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['FicaDocs'] = ResolversParentTypes['FicaDocs']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FormResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Form'] = ResolversParentTypes['Form']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GasComplianceResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['GasCompliance'] = ResolversParentTypes['GasCompliance']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gasCompCerUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageBlogResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ImageBlog'] = ResolversParentTypes['ImageBlog']> = {
  blogPostId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageProductResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ImageProduct'] = ResolversParentTypes['ImageProduct']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageCategory?: Resolver<Maybe<ResolversTypes['Image_Category']>, ParentType, ContextType>;
  propertyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Image_CategoryResolvers = { MAIN: 'undefined', PROPERTY: 'undefined' };

export type IntermologistResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Intermologist'] = ResolversParentTypes['Intermologist']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MortgageOriginatorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['MortgageOriginator'] = ResolversParentTypes['MortgageOriginator']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, Partial<MutationAddAgentArgs>>;
  addBlogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<MutationAddBlogPostArgs, 'input'>>;
  addCommercialFeature?: Resolver<Maybe<ResolversTypes['CommercialFeature']>, ParentType, ContextType, RequireFields<MutationAddCommercialFeatureArgs, 'input'>>;
  addDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationAddDocumentArgs, 'input'>>;
  addForm?: Resolver<Maybe<ResolversTypes['Form']>, ParentType, ContextType, RequireFields<MutationAddFormArgs, 'input'>>;
  addImage?: Resolver<Maybe<ResolversTypes['ImageProduct']>, ParentType, ContextType, RequireFields<MutationAddImageArgs, 'input'>>;
  addImageBlog?: Resolver<Maybe<ResolversTypes['ImageBlog']>, ParentType, ContextType, RequireFields<MutationAddImageBlogArgs, 'input'>>;
  addOfferIn?: Resolver<Maybe<ResolversTypes['OfferIn']>, ParentType, ContextType, RequireFields<MutationAddOfferInArgs, 'input'>>;
  addProperty?: Resolver<Maybe<ResolversTypes['Property']>, ParentType, ContextType, RequireFields<MutationAddPropertyArgs, 'input'>>;
  addResidentialFeature?: Resolver<Maybe<ResolversTypes['ResidentialFeature']>, ParentType, ContextType, RequireFields<MutationAddResidentialFeatureArgs, 'input'>>;
  addTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationAddTodoArgs, 'input'>>;
  deleteAgentImage?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RequireFields<MutationDeleteAgentImageArgs, 'id'>>;
  deleteDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationDeleteDocumentArgs, 'id'>>;
  deleteImage?: Resolver<Maybe<ResolversTypes['ImageProduct']>, ParentType, ContextType, RequireFields<MutationDeleteImageArgs, 'id'>>;
  deleteImageBlog?: Resolver<Maybe<ResolversTypes['ImageBlog']>, ParentType, ContextType, RequireFields<MutationDeleteImageBlogArgs, 'id'>>;
  deleteTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  updateAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, Partial<MutationUpdateAgentArgs>>;
  updateBlogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<MutationUpdateBlogPostArgs, 'input'>>;
  updateDocument?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<MutationUpdateDocumentArgs, 'id' | 'input'>>;
  updateImage?: Resolver<Maybe<ResolversTypes['ImageProduct']>, ParentType, ContextType, RequireFields<MutationUpdateImageArgs, 'id' | 'input'>>;
  updateImageBlog?: Resolver<Maybe<ResolversTypes['ImageBlog']>, ParentType, ContextType, RequireFields<MutationUpdateImageBlogArgs, 'id' | 'input'>>;
  updateOfferIn?: Resolver<Maybe<ResolversTypes['OfferIn']>, ParentType, ContextType, RequireFields<MutationUpdateOfferInArgs, 'input'>>;
  updateProperty?: Resolver<Maybe<ResolversTypes['Property']>, ParentType, ContextType, RequireFields<MutationUpdatePropertyArgs, 'input'>>;
  updateTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationUpdateTodoArgs, 'id' | 'input'>>;
};

export type OfferAcceptedResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OfferAccepted'] = ResolversParentTypes['OfferAccepted']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  conditions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  withConditions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfferInResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OfferIn'] = ResolversParentTypes['OfferIn']> = {
  alien?: Resolver<Maybe<ResolversTypes['Alien']>, ParentType, ContextType>;
  alienId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bankInspection?: Resolver<Maybe<ResolversTypes['BankInspection']>, ParentType, ContextType>;
  bankInspectionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bankName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conveyancer?: Resolver<Maybe<ResolversTypes['Conveyancer']>, ParentType, ContextType>;
  conveyancerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  dateOfBondApplication?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dateOfBondApprovalInPrincipal?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dateOfBondApproved?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  documents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Document']>>>, ParentType, ContextType>;
  dot?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  elecCompCompany?: Resolver<Maybe<ResolversTypes['ElecCompCompany']>, ParentType, ContextType>;
  elecCompCompanyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  electricFence?: Resolver<Maybe<ResolversTypes['ElectricFence']>, ParentType, ContextType>;
  electricFenceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ficaDocs?: Resolver<Maybe<ResolversTypes['FicaDocs']>, ParentType, ContextType>;
  ficaDocsId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gasCompliance?: Resolver<Maybe<ResolversTypes['GasCompliance']>, ParentType, ContextType>;
  gasComplianceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  intermologist?: Resolver<Maybe<ResolversTypes['Intermologist']>, ParentType, ContextType>;
  intermologistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  mortgageOriginator?: Resolver<Maybe<ResolversTypes['MortgageOriginator']>, ParentType, ContextType>;
  mortgageOriginatorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  offerAccepted?: Resolver<Maybe<ResolversTypes['OfferAccepted']>, ParentType, ContextType>;
  offerAcceptedId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  propertyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  todos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType>;
  waterCert?: Resolver<Maybe<ResolversTypes['WaterCert']>, ParentType, ContextType>;
  waterCertId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Offer_In_CategoriesResolvers = { ALIEN: 'undefined', BANKINSPECTION: 'undefined', CONVEYANCER: 'undefined', ELECCOMPCOMPANY: 'undefined', ELECTRIC_FENCE: 'undefined', FICADOCS: 'undefined', GASCOMPLIANCE: 'undefined', GENERAL: 'undefined', INTERMOLOGIST: 'undefined', MORTGAGEORIGINATOR: 'undefined', OFFERACCEPTED: 'undefined', WATERCERT: 'undefined' };

export type PropertyResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Property'] = ResolversParentTypes['Property']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  agentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  appliances?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  basement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bathrooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bedrooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  commercialFeatures?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommercialFeature']>>>, ParentType, ContextType>;
  cooling?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distanceToNearestSchool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featured?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  flooring?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  forKids?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heating?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageProduct']>>>, ParentType, ContextType>;
  interior?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lotSize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nightlife?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerIn?: Resolver<Maybe<ResolversTypes['OfferIn']>, ParentType, ContextType>;
  otherInteriorFeatures?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otherPropertyFeatures?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parking?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  propertyCategory?: Resolver<ResolversTypes['Property_Category'], ParentType, ContextType>;
  residentialCategory?: Resolver<Maybe<ResolversTypes['Residential_Category']>, ParentType, ContextType>;
  residentialFeatures?: Resolver<Maybe<Array<Maybe<ResolversTypes['ResidentialFeature']>>>, ParentType, ContextType>;
  schools?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shopping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  surroundingSuburbs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  yearBuilt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Property_CategoryResolvers = { COMMERCIAL: 'undefined', INDUSTRIAL: 'undefined', OFFICE: 'undefined', RAW_LAND: 'undefined', RESIDENTIAL: 'undefined', SPECIAL_USE: 'undefined' };

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  agent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RequireFields<QueryAgentArgs, 'email'>>;
  allAgents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Agent']>>>, ParentType, ContextType>;
  allCommercialFeatures?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommercialFeature']>>>, ParentType, ContextType>;
  allDocuments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Document']>>>, ParentType, ContextType>;
  allForms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Form']>>>, ParentType, ContextType>;
  allImageBlogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageBlog']>>>, ParentType, ContextType>;
  allImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageProduct']>>>, ParentType, ContextType>;
  allProperties?: Resolver<Maybe<Array<Maybe<ResolversTypes['Property']>>>, ParentType, ContextType>;
  allResidentialFeatures?: Resolver<Maybe<Array<Maybe<ResolversTypes['ResidentialFeature']>>>, ParentType, ContextType>;
  blogCard?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  blogPost?: Resolver<Maybe<ResolversTypes['BlogPost']>, ParentType, ContextType, RequireFields<QueryBlogPostArgs, 'id'>>;
  blogPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogPost']>>>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType, RequireFields<QueryDocumentArgs, 'id'>>;
  form?: Resolver<Maybe<ResolversTypes['Form']>, ParentType, ContextType, RequireFields<QueryFormArgs, 'id'>>;
  image?: Resolver<Maybe<ResolversTypes['ImageProduct']>, ParentType, ContextType, RequireFields<QueryImageArgs, 'id'>>;
  imageBlog?: Resolver<Maybe<ResolversTypes['ImageBlog']>, ParentType, ContextType, RequireFields<QueryImageBlogArgs, 'id'>>;
  property?: Resolver<Maybe<ResolversTypes['Property']>, ParentType, ContextType, RequireFields<QueryPropertyArgs, 'id'>>;
};

export type ResidentialFeatureResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ResidentialFeature'] = ResolversParentTypes['ResidentialFeature']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  propertyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  residentialFeature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Residential_CategoryResolvers = { CONDO: 'undefined', DUPLEX: 'undefined', FLAT: 'undefined', FREE_STANDING: 'undefined', GRANNY_FLAT: 'undefined', LUXURY: 'undefined', SIMPLEX: 'undefined' };

export type RolesResolvers = { ADMIN: 'undefined', AGENT: 'undefined', CEO: 'undefined', MANAGER: 'undefined' };

export type StatusResolvers = { FOR_RENT: 'undefined', FOR_SALE: 'undefined', OFFER_IN: 'undefined', SOLD: 'undefined' };

export type SubscriptionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  updatedAgent?: SubscriptionResolver<Maybe<ResolversTypes['Agent']>, "updatedAgent", ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type TodoResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  offerInCategory?: Resolver<Maybe<ResolversTypes['Offer_In_Categories']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOfferInResponseResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdateOfferInResponse'] = ResolversParentTypes['UpdateOfferInResponse']> = {
  alien?: Resolver<Maybe<ResolversTypes['Alien']>, ParentType, ContextType>;
  bankInspection?: Resolver<Maybe<ResolversTypes['BankInspection']>, ParentType, ContextType>;
  conveyancer?: Resolver<Maybe<ResolversTypes['Conveyancer']>, ParentType, ContextType>;
  elecCompCompany?: Resolver<Maybe<ResolversTypes['ElecCompCompany']>, ParentType, ContextType>;
  electricFence?: Resolver<Maybe<ResolversTypes['ElectricFence']>, ParentType, ContextType>;
  ficaDocs?: Resolver<Maybe<ResolversTypes['FicaDocs']>, ParentType, ContextType>;
  gasCompliance?: Resolver<Maybe<ResolversTypes['GasCompliance']>, ParentType, ContextType>;
  intermologist?: Resolver<Maybe<ResolversTypes['Intermologist']>, ParentType, ContextType>;
  mortgageOriginator?: Resolver<Maybe<ResolversTypes['MortgageOriginator']>, ParentType, ContextType>;
  offerAccepted?: Resolver<Maybe<ResolversTypes['OfferAccepted']>, ParentType, ContextType>;
  offerIn?: Resolver<Maybe<ResolversTypes['OfferIn']>, ParentType, ContextType>;
  waterCert?: Resolver<Maybe<ResolversTypes['WaterCert']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WaterCertResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['WaterCert'] = ResolversParentTypes['WaterCert']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deadline?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminMessage']>>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offerInId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Account?: AccountResolvers<ContextType>;
  AdminMessage?: AdminMessageResolvers<ContextType>;
  Agent?: AgentResolvers<ContextType>;
  Alien?: AlienResolvers<ContextType>;
  BankInspection?: BankInspectionResolvers<ContextType>;
  BlogPost?: BlogPostResolvers<ContextType>;
  CommercialFeature?: CommercialFeatureResolvers<ContextType>;
  Conveyancer?: ConveyancerResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Document?: DocumentResolvers<ContextType>;
  Document_Category?: Document_CategoryResolvers;
  ElecCompCompany?: ElecCompCompanyResolvers<ContextType>;
  ElectricFence?: ElectricFenceResolvers<ContextType>;
  FicaDocs?: FicaDocsResolvers<ContextType>;
  Form?: FormResolvers<ContextType>;
  GasCompliance?: GasComplianceResolvers<ContextType>;
  ImageBlog?: ImageBlogResolvers<ContextType>;
  ImageProduct?: ImageProductResolvers<ContextType>;
  Image_Category?: Image_CategoryResolvers;
  Intermologist?: IntermologistResolvers<ContextType>;
  MortgageOriginator?: MortgageOriginatorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OfferAccepted?: OfferAcceptedResolvers<ContextType>;
  OfferIn?: OfferInResolvers<ContextType>;
  Offer_In_Categories?: Offer_In_CategoriesResolvers;
  Property?: PropertyResolvers<ContextType>;
  Property_Category?: Property_CategoryResolvers;
  Query?: QueryResolvers<ContextType>;
  ResidentialFeature?: ResidentialFeatureResolvers<ContextType>;
  Residential_Category?: Residential_CategoryResolvers;
  Roles?: RolesResolvers;
  Status?: StatusResolvers;
  Subscription?: SubscriptionResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Todo?: TodoResolvers<ContextType>;
  UpdateOfferInResponse?: UpdateOfferInResponseResolvers<ContextType>;
  WaterCert?: WaterCertResolvers<ContextType>;
};


export const FormFragmentDoc = gql`
    fragment Form on Form {
  id
  name
  email
  message
}
    `;
export const AccountFragmentDoc = gql`
    fragment Account on Account {
  id
  type
  provider
  providerAccountId
  refresh_token
  access_token
  expires_at
  token_type
  scope
  id_token
  session_state
}
    `;
export const AdminMessageFragmentDoc = gql`
    fragment AdminMessage on AdminMessage {
  id
  offerInId
  adminId
  title
  message
  read
  urgent
  relatingTo
}
    `;
export const AgentFragmentDoc = gql`
    fragment Agent on Agent {
  id
  userId
  flag
  roles
  firstName
  lastName
  email
  password
  createdAt
  updatedAt
  address
  phoneNumber
  aboutMe
  profileImage
  properties {
    id
    agentId
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
export const CommercialFeatureFragmentDoc = gql`
    fragment CommercialFeature on CommercialFeature {
  id
  propertyId
  commercialFeature
}
    `;
export const DocumentFragmentDoc = gql`
    fragment Document on Document {
  id
  url
  offerInId
  documentCategory
}
    `;
export const ImageBlogFragmentDoc = gql`
    fragment ImageBlog on ImageBlog {
  id
  url
  blogPostId
}
    `;
export const ImageProductFragmentDoc = gql`
    fragment ImageProduct on ImageProduct {
  id
  url
  propertyId
  imageCategory
}
    `;
export const OfferInFragmentDoc = gql`
    fragment OfferIn on OfferIn {
  id
  propertyId
  elecCompCompanyId
  intermologistId
  gasComplianceId
  waterCertId
  offerAcceptedId
  bankInspectionId
  conveyancerId
  mortgageOriginatorId
  ficaDocsId
  amount
  dot
  dateOfBondApplication
  dateOfBondApprovalInPrincipal
  dateOfBondApproved
  bankName
  flag
  documents {
    offerInId
    documentCategory
    url
  }
  todos {
    id
    offerInId
    offerInCategory
    task
    completed
    deadline
  }
  message {
    id
    offerInId
    adminId
    title
    message
    read
    urgent
    relatingTo
  }
  elecCompCompany {
    id
    offerInId
    name
    phone
    email
    notes
    completed
    deadline
    flag
  }
  intermologist {
    id
    offerInId
    name
    phone
    email
    notes
    completed
    deadline
    flag
  }
  gasCompliance {
    id
    offerInId
    notes
    completed
    deadline
    flag
  }
  waterCert {
    id
    offerInId
    notes
    completed
    deadline
    flag
  }
  offerAccepted {
    id
    offerInId
    withConditions
    conditions
    notes
    completed
    deadline
    flag
  }
  bankInspection {
    id
    offerInId
    notes
    completed
    deadline
    flag
  }
  conveyancer {
    id
    offerInId
    name
    phone
    notes
    completed
    deadline
    flag
  }
  mortgageOriginator {
    id
    offerInId
    phone
    name
    notes
    completed
    deadline
    flag
  }
  ficaDocs {
    id
    offerInId
    address
    notes
    completed
    deadline
    flag
  }
  electricFence {
    id
    offerInId
    notes
    completed
    deadline
    flag
  }
  alien {
    id
    offerInId
    notes
    completed
    deadline
    flag
  }
}
    `;
export const ElecCompCompanyFragmentDoc = gql`
    fragment ElecCompCompany on ElecCompCompany {
  id
  offerInId
  name
  phone
  email
  notes
  completed
  deadline
  flag
}
    `;
export const IntermologistFragmentDoc = gql`
    fragment Intermologist on Intermologist {
  id
  offerInId
  name
  phone
  email
  notes
  completed
  deadline
  flag
}
    `;
export const GasComplianceFragmentDoc = gql`
    fragment GasCompliance on GasCompliance {
  id
  offerInId
  notes
  completed
  deadline
  flag
}
    `;
export const WaterCertFragmentDoc = gql`
    fragment WaterCert on WaterCert {
  id
  offerInId
  notes
  completed
  deadline
  flag
}
    `;
export const OfferAcceptedFragmentDoc = gql`
    fragment OfferAccepted on OfferAccepted {
  id
  offerInId
  withConditions
  conditions
  notes
  completed
  deadline
  flag
}
    `;
export const BankInspectionFragmentDoc = gql`
    fragment BankInspection on BankInspection {
  id
  offerInId
  notes
  completed
  deadline
  flag
}
    `;
export const ConveyancerFragmentDoc = gql`
    fragment Conveyancer on Conveyancer {
  id
  offerInId
  name
  phone
  notes
  completed
  deadline
  flag
}
    `;
export const MortgageOriginatorFragmentDoc = gql`
    fragment MortgageOriginator on MortgageOriginator {
  id
  offerInId
  phone
  name
  notes
  completed
  deadline
  flag
}
    `;
export const FicaDocsFragmentDoc = gql`
    fragment FicaDocs on FicaDocs {
  id
  offerInId
  address
  notes
  completed
  deadline
  flag
}
    `;
export const ElectricFenceFragmentDoc = gql`
    fragment ElectricFence on ElectricFence {
  id
  offerInId
  notes
  completed
  deadline
  flag
}
    `;
export const AlienFragmentDoc = gql`
    fragment Alien on Alien {
  id
  offerInId
  notes
  completed
  deadline
  flag
}
    `;
export const UpdateOfferInResponseFragmentDoc = gql`
    fragment UpdateOfferInResponse on UpdateOfferInResponse {
  offerIn {
    ...OfferIn
  }
  elecCompCompany {
    ...ElecCompCompany
  }
  intermologist {
    ...Intermologist
  }
  gasCompliance {
    ...GasCompliance
  }
  waterCert {
    ...WaterCert
  }
  offerAccepted {
    ...OfferAccepted
  }
  bankInspection {
    ...BankInspection
  }
  conveyancer {
    ...Conveyancer
  }
  mortgageOriginator {
    ...MortgageOriginator
  }
  ficaDocs {
    ...FicaDocs
  }
  electricFence {
    ...ElectricFence
  }
  alien {
    ...Alien
  }
}
    ${OfferInFragmentDoc}
${ElecCompCompanyFragmentDoc}
${IntermologistFragmentDoc}
${GasComplianceFragmentDoc}
${WaterCertFragmentDoc}
${OfferAcceptedFragmentDoc}
${BankInspectionFragmentDoc}
${ConveyancerFragmentDoc}
${MortgageOriginatorFragmentDoc}
${FicaDocsFragmentDoc}
${ElectricFenceFragmentDoc}
${AlienFragmentDoc}`;
export const PropertyFragmentDoc = gql`
    fragment Property on Property {
  id
  agentId
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
  residentialFeatures {
    id
    propertyId
    residentialFeature
  }
  images {
    url
    id
    imageCategory
    propertyId
  }
}
    `;
export const ResidentialFeatureFragmentDoc = gql`
    fragment ResidentialFeature on ResidentialFeature {
  id
  propertyId
  residentialFeature
}
    `;
export const TodoFragmentDoc = gql`
    fragment Todo on Todo {
  id
  offerInId
  offerInCategory
  task
  completed
  deadline
}
    `;
export const AddFormDocument = gql`
    mutation AddForm($input: FormInput!) {
  addForm(input: $input) {
    ...Form
  }
}
    ${FormFragmentDoc}`;
export type AddFormMutationFn = Apollo.MutationFunction<AddFormMutation, AddFormMutationVariables>;

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
export function useAddFormMutation(baseOptions?: Apollo.MutationHookOptions<AddFormMutation, AddFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFormMutation, AddFormMutationVariables>(AddFormDocument, options);
      }
export type AddFormMutationHookResult = ReturnType<typeof useAddFormMutation>;
export type AddFormMutationResult = Apollo.MutationResult<AddFormMutation>;
export type AddFormMutationOptions = Apollo.BaseMutationOptions<AddFormMutation, AddFormMutationVariables>;
export const FormDocument = gql`
    query Form($id: ID!) {
  form(id: $id) {
    ...Form
  }
}
    ${FormFragmentDoc}`;

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
export function useFormQuery(baseOptions: Apollo.QueryHookOptions<FormQuery, FormQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FormQuery, FormQueryVariables>(FormDocument, options);
      }
export function useFormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormQuery, FormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FormQuery, FormQueryVariables>(FormDocument, options);
        }
export type FormQueryHookResult = ReturnType<typeof useFormQuery>;
export type FormLazyQueryHookResult = ReturnType<typeof useFormLazyQuery>;
export type FormQueryResult = Apollo.QueryResult<FormQuery, FormQueryVariables>;
export const AddAgentDocument = gql`
    mutation AddAgent($input: AgentInput!) {
  addAgent(input: $input) {
    ...Agent
  }
}
    ${AgentFragmentDoc}`;
export type AddAgentMutationFn = Apollo.MutationFunction<AddAgentMutation, AddAgentMutationVariables>;

/**
 * __useAddAgentMutation__
 *
 * To run a mutation, you first call `useAddAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAgentMutation, { data, loading, error }] = useAddAgentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddAgentMutation(baseOptions?: Apollo.MutationHookOptions<AddAgentMutation, AddAgentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAgentMutation, AddAgentMutationVariables>(AddAgentDocument, options);
      }
export type AddAgentMutationHookResult = ReturnType<typeof useAddAgentMutation>;
export type AddAgentMutationResult = Apollo.MutationResult<AddAgentMutation>;
export type AddAgentMutationOptions = Apollo.BaseMutationOptions<AddAgentMutation, AddAgentMutationVariables>;
export const AgentDocument = gql`
    query Agent($email: String!) {
  agent(email: $email) {
    ...Agent
  }
}
    ${AgentFragmentDoc}`;

/**
 * __useAgentQuery__
 *
 * To run a query within a React component, call `useAgentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAgentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAgentQuery(baseOptions: Apollo.QueryHookOptions<AgentQuery, AgentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AgentQuery, AgentQueryVariables>(AgentDocument, options);
      }
export function useAgentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AgentQuery, AgentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AgentQuery, AgentQueryVariables>(AgentDocument, options);
        }
export type AgentQueryHookResult = ReturnType<typeof useAgentQuery>;
export type AgentLazyQueryHookResult = ReturnType<typeof useAgentLazyQuery>;
export type AgentQueryResult = Apollo.QueryResult<AgentQuery, AgentQueryVariables>;
export const DeleteAgentImageDocument = gql`
    mutation deleteAgentImage($id: ID!) {
  deleteAgentImage(id: $id) {
    ...Agent
  }
}
    ${AgentFragmentDoc}`;
export type DeleteAgentImageMutationFn = Apollo.MutationFunction<DeleteAgentImageMutation, DeleteAgentImageMutationVariables>;

/**
 * __useDeleteAgentImageMutation__
 *
 * To run a mutation, you first call `useDeleteAgentImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAgentImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAgentImageMutation, { data, loading, error }] = useDeleteAgentImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAgentImageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAgentImageMutation, DeleteAgentImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAgentImageMutation, DeleteAgentImageMutationVariables>(DeleteAgentImageDocument, options);
      }
export type DeleteAgentImageMutationHookResult = ReturnType<typeof useDeleteAgentImageMutation>;
export type DeleteAgentImageMutationResult = Apollo.MutationResult<DeleteAgentImageMutation>;
export type DeleteAgentImageMutationOptions = Apollo.BaseMutationOptions<DeleteAgentImageMutation, DeleteAgentImageMutationVariables>;
export const UpdateAgentDocument = gql`
    mutation UpdateAgent($input: AgentInput!) {
  updateAgent(input: $input) {
    ...Agent
  }
}
    ${AgentFragmentDoc}`;
export type UpdateAgentMutationFn = Apollo.MutationFunction<UpdateAgentMutation, UpdateAgentMutationVariables>;

/**
 * __useUpdateAgentMutation__
 *
 * To run a mutation, you first call `useUpdateAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAgentMutation, { data, loading, error }] = useUpdateAgentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAgentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAgentMutation, UpdateAgentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAgentMutation, UpdateAgentMutationVariables>(UpdateAgentDocument, options);
      }
export type UpdateAgentMutationHookResult = ReturnType<typeof useUpdateAgentMutation>;
export type UpdateAgentMutationResult = Apollo.MutationResult<UpdateAgentMutation>;
export type UpdateAgentMutationOptions = Apollo.BaseMutationOptions<UpdateAgentMutation, UpdateAgentMutationVariables>;
export const UpdatedAgentDocument = gql`
    subscription UpdatedAgent {
  updatedAgent {
    ...Agent
  }
}
    ${AgentFragmentDoc}`;

/**
 * __useUpdatedAgentSubscription__
 *
 * To run a query within a React component, call `useUpdatedAgentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedAgentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedAgentSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUpdatedAgentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedAgentSubscription, UpdatedAgentSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UpdatedAgentSubscription, UpdatedAgentSubscriptionVariables>(UpdatedAgentDocument, options);
      }
export type UpdatedAgentSubscriptionHookResult = ReturnType<typeof useUpdatedAgentSubscription>;
export type UpdatedAgentSubscriptionResult = Apollo.SubscriptionResult<UpdatedAgentSubscription>;
export const AddBlogPostDocument = gql`
    mutation AddBlogPost($input: BlogPostInput!) {
  addBlogPost(input: $input) {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;
export type AddBlogPostMutationFn = Apollo.MutationFunction<AddBlogPostMutation, AddBlogPostMutationVariables>;

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
export function useAddBlogPostMutation(baseOptions?: Apollo.MutationHookOptions<AddBlogPostMutation, AddBlogPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBlogPostMutation, AddBlogPostMutationVariables>(AddBlogPostDocument, options);
      }
export type AddBlogPostMutationHookResult = ReturnType<typeof useAddBlogPostMutation>;
export type AddBlogPostMutationResult = Apollo.MutationResult<AddBlogPostMutation>;
export type AddBlogPostMutationOptions = Apollo.BaseMutationOptions<AddBlogPostMutation, AddBlogPostMutationVariables>;
export const BlogPostDocument = gql`
    query BlogPost($id: ID!) {
  blogPost(id: $id) {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;

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
export function useBlogPostQuery(baseOptions: Apollo.QueryHookOptions<BlogPostQuery, BlogPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPostQuery, BlogPostQueryVariables>(BlogPostDocument, options);
      }
export function useBlogPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPostQuery, BlogPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPostQuery, BlogPostQueryVariables>(BlogPostDocument, options);
        }
export type BlogPostQueryHookResult = ReturnType<typeof useBlogPostQuery>;
export type BlogPostLazyQueryHookResult = ReturnType<typeof useBlogPostLazyQuery>;
export type BlogPostQueryResult = Apollo.QueryResult<BlogPostQuery, BlogPostQueryVariables>;
export const BlogPostsDocument = gql`
    query BlogPosts {
  blogPosts {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;

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
export function useBlogPostsQuery(baseOptions?: Apollo.QueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlogPostsQuery, BlogPostsQueryVariables>(BlogPostsDocument, options);
      }
export function useBlogPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlogPostsQuery, BlogPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlogPostsQuery, BlogPostsQueryVariables>(BlogPostsDocument, options);
        }
export type BlogPostsQueryHookResult = ReturnType<typeof useBlogPostsQuery>;
export type BlogPostsLazyQueryHookResult = ReturnType<typeof useBlogPostsLazyQuery>;
export type BlogPostsQueryResult = Apollo.QueryResult<BlogPostsQuery, BlogPostsQueryVariables>;
export const UpdateBlogPostDocument = gql`
    mutation UpdateBlogPost($input: BlogPostInput!) {
  updateBlogPost(input: $input) {
    ...BlogPost
  }
}
    ${BlogPostFragmentDoc}`;
export type UpdateBlogPostMutationFn = Apollo.MutationFunction<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>;

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
export function useUpdateBlogPostMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>(UpdateBlogPostDocument, options);
      }
export type UpdateBlogPostMutationHookResult = ReturnType<typeof useUpdateBlogPostMutation>;
export type UpdateBlogPostMutationResult = Apollo.MutationResult<UpdateBlogPostMutation>;
export type UpdateBlogPostMutationOptions = Apollo.BaseMutationOptions<UpdateBlogPostMutation, UpdateBlogPostMutationVariables>;
export const AddCommercialFeatureDocument = gql`
    mutation AddCommercialFeature($input: CommercialFeatureInput!) {
  addCommercialFeature(input: $input) {
    ...CommercialFeature
  }
}
    ${CommercialFeatureFragmentDoc}`;
export type AddCommercialFeatureMutationFn = Apollo.MutationFunction<AddCommercialFeatureMutation, AddCommercialFeatureMutationVariables>;

/**
 * __useAddCommercialFeatureMutation__
 *
 * To run a mutation, you first call `useAddCommercialFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommercialFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommercialFeatureMutation, { data, loading, error }] = useAddCommercialFeatureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCommercialFeatureMutation(baseOptions?: Apollo.MutationHookOptions<AddCommercialFeatureMutation, AddCommercialFeatureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommercialFeatureMutation, AddCommercialFeatureMutationVariables>(AddCommercialFeatureDocument, options);
      }
export type AddCommercialFeatureMutationHookResult = ReturnType<typeof useAddCommercialFeatureMutation>;
export type AddCommercialFeatureMutationResult = Apollo.MutationResult<AddCommercialFeatureMutation>;
export type AddCommercialFeatureMutationOptions = Apollo.BaseMutationOptions<AddCommercialFeatureMutation, AddCommercialFeatureMutationVariables>;
export const AddDocumentDocument = gql`
    mutation AddDocument($input: DocumentInput!) {
  addDocument(input: $input) {
    ...Document
  }
}
    ${DocumentFragmentDoc}`;
export type AddDocumentMutationFn = Apollo.MutationFunction<AddDocumentMutation, AddDocumentMutationVariables>;

/**
 * __useAddDocumentMutation__
 *
 * To run a mutation, you first call `useAddDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDocumentMutation, { data, loading, error }] = useAddDocumentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddDocumentMutation(baseOptions?: Apollo.MutationHookOptions<AddDocumentMutation, AddDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDocumentMutation, AddDocumentMutationVariables>(AddDocumentDocument, options);
      }
export type AddDocumentMutationHookResult = ReturnType<typeof useAddDocumentMutation>;
export type AddDocumentMutationResult = Apollo.MutationResult<AddDocumentMutation>;
export type AddDocumentMutationOptions = Apollo.BaseMutationOptions<AddDocumentMutation, AddDocumentMutationVariables>;
export const AllDocumentsDocument = gql`
    query AllDocuments {
  allDocuments {
    ...Document
  }
}
    ${DocumentFragmentDoc}`;

/**
 * __useAllDocumentsQuery__
 *
 * To run a query within a React component, call `useAllDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDocumentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllDocumentsQuery(baseOptions?: Apollo.QueryHookOptions<AllDocumentsQuery, AllDocumentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllDocumentsQuery, AllDocumentsQueryVariables>(AllDocumentsDocument, options);
      }
export function useAllDocumentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllDocumentsQuery, AllDocumentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllDocumentsQuery, AllDocumentsQueryVariables>(AllDocumentsDocument, options);
        }
export type AllDocumentsQueryHookResult = ReturnType<typeof useAllDocumentsQuery>;
export type AllDocumentsLazyQueryHookResult = ReturnType<typeof useAllDocumentsLazyQuery>;
export type AllDocumentsQueryResult = Apollo.QueryResult<AllDocumentsQuery, AllDocumentsQueryVariables>;
export const DeleteDocumentDocument = gql`
    mutation deleteDocument($id: ID!) {
  deleteDocument(id: $id) {
    ...Document
  }
}
    ${DocumentFragmentDoc}`;
export type DeleteDocumentMutationFn = Apollo.MutationFunction<DeleteDocumentMutation, DeleteDocumentMutationVariables>;

/**
 * __useDeleteDocumentMutation__
 *
 * To run a mutation, you first call `useDeleteDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDocumentMutation, { data, loading, error }] = useDeleteDocumentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDocumentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDocumentMutation, DeleteDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDocumentMutation, DeleteDocumentMutationVariables>(DeleteDocumentDocument, options);
      }
export type DeleteDocumentMutationHookResult = ReturnType<typeof useDeleteDocumentMutation>;
export type DeleteDocumentMutationResult = Apollo.MutationResult<DeleteDocumentMutation>;
export type DeleteDocumentMutationOptions = Apollo.BaseMutationOptions<DeleteDocumentMutation, DeleteDocumentMutationVariables>;
export const DocumentDocument = gql`
    query Document($id: ID!) {
  document(id: $id) {
    ...Document
  }
}
    ${DocumentFragmentDoc}`;

/**
 * __useDocumentQuery__
 *
 * To run a query within a React component, call `useDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDocumentQuery(baseOptions: Apollo.QueryHookOptions<DocumentQuery, DocumentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DocumentQuery, DocumentQueryVariables>(DocumentDocument, options);
      }
export function useDocumentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DocumentQuery, DocumentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DocumentQuery, DocumentQueryVariables>(DocumentDocument, options);
        }
export type DocumentQueryHookResult = ReturnType<typeof useDocumentQuery>;
export type DocumentLazyQueryHookResult = ReturnType<typeof useDocumentLazyQuery>;
export type DocumentQueryResult = Apollo.QueryResult<DocumentQuery, DocumentQueryVariables>;
export const AddImageBlogDocument = gql`
    mutation AddImageBlog($input: ImageBlogInput!) {
  addImageBlog(input: $input) {
    ...ImageBlog
  }
}
    ${ImageBlogFragmentDoc}`;
export type AddImageBlogMutationFn = Apollo.MutationFunction<AddImageBlogMutation, AddImageBlogMutationVariables>;

/**
 * __useAddImageBlogMutation__
 *
 * To run a mutation, you first call `useAddImageBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddImageBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addImageBlogMutation, { data, loading, error }] = useAddImageBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddImageBlogMutation(baseOptions?: Apollo.MutationHookOptions<AddImageBlogMutation, AddImageBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddImageBlogMutation, AddImageBlogMutationVariables>(AddImageBlogDocument, options);
      }
export type AddImageBlogMutationHookResult = ReturnType<typeof useAddImageBlogMutation>;
export type AddImageBlogMutationResult = Apollo.MutationResult<AddImageBlogMutation>;
export type AddImageBlogMutationOptions = Apollo.BaseMutationOptions<AddImageBlogMutation, AddImageBlogMutationVariables>;
export const AllImageBlogsDocument = gql`
    query AllImageBlogs {
  allImageBlogs {
    ...ImageBlog
  }
}
    ${ImageBlogFragmentDoc}`;

/**
 * __useAllImageBlogsQuery__
 *
 * To run a query within a React component, call `useAllImageBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllImageBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllImageBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllImageBlogsQuery(baseOptions?: Apollo.QueryHookOptions<AllImageBlogsQuery, AllImageBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllImageBlogsQuery, AllImageBlogsQueryVariables>(AllImageBlogsDocument, options);
      }
export function useAllImageBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllImageBlogsQuery, AllImageBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllImageBlogsQuery, AllImageBlogsQueryVariables>(AllImageBlogsDocument, options);
        }
export type AllImageBlogsQueryHookResult = ReturnType<typeof useAllImageBlogsQuery>;
export type AllImageBlogsLazyQueryHookResult = ReturnType<typeof useAllImageBlogsLazyQuery>;
export type AllImageBlogsQueryResult = Apollo.QueryResult<AllImageBlogsQuery, AllImageBlogsQueryVariables>;
export const DeleteImageBlogDocument = gql`
    mutation deleteImageBlog($id: ID!) {
  deleteImageBlog(id: $id) {
    ...ImageBlog
  }
}
    ${ImageBlogFragmentDoc}`;
export type DeleteImageBlogMutationFn = Apollo.MutationFunction<DeleteImageBlogMutation, DeleteImageBlogMutationVariables>;

/**
 * __useDeleteImageBlogMutation__
 *
 * To run a mutation, you first call `useDeleteImageBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImageBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImageBlogMutation, { data, loading, error }] = useDeleteImageBlogMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteImageBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImageBlogMutation, DeleteImageBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImageBlogMutation, DeleteImageBlogMutationVariables>(DeleteImageBlogDocument, options);
      }
export type DeleteImageBlogMutationHookResult = ReturnType<typeof useDeleteImageBlogMutation>;
export type DeleteImageBlogMutationResult = Apollo.MutationResult<DeleteImageBlogMutation>;
export type DeleteImageBlogMutationOptions = Apollo.BaseMutationOptions<DeleteImageBlogMutation, DeleteImageBlogMutationVariables>;
export const ImageBlogDocument = gql`
    query ImageBlog($id: ID!) {
  imageBlog(id: $id) {
    ...ImageBlog
  }
}
    ${ImageBlogFragmentDoc}`;

/**
 * __useImageBlogQuery__
 *
 * To run a query within a React component, call `useImageBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useImageBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImageBlogQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useImageBlogQuery(baseOptions: Apollo.QueryHookOptions<ImageBlogQuery, ImageBlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImageBlogQuery, ImageBlogQueryVariables>(ImageBlogDocument, options);
      }
export function useImageBlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImageBlogQuery, ImageBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImageBlogQuery, ImageBlogQueryVariables>(ImageBlogDocument, options);
        }
export type ImageBlogQueryHookResult = ReturnType<typeof useImageBlogQuery>;
export type ImageBlogLazyQueryHookResult = ReturnType<typeof useImageBlogLazyQuery>;
export type ImageBlogQueryResult = Apollo.QueryResult<ImageBlogQuery, ImageBlogQueryVariables>;
export const AddImageDocument = gql`
    mutation AddImage($input: ImageProductInput!) {
  addImage(input: $input) {
    ...ImageProduct
  }
}
    ${ImageProductFragmentDoc}`;
export type AddImageMutationFn = Apollo.MutationFunction<AddImageMutation, AddImageMutationVariables>;

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
export function useAddImageMutation(baseOptions?: Apollo.MutationHookOptions<AddImageMutation, AddImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddImageMutation, AddImageMutationVariables>(AddImageDocument, options);
      }
export type AddImageMutationHookResult = ReturnType<typeof useAddImageMutation>;
export type AddImageMutationResult = Apollo.MutationResult<AddImageMutation>;
export type AddImageMutationOptions = Apollo.BaseMutationOptions<AddImageMutation, AddImageMutationVariables>;
export const AllImagesDocument = gql`
    query AllImages {
  allImages {
    ...ImageProduct
  }
}
    ${ImageProductFragmentDoc}`;

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
export function useAllImagesQuery(baseOptions?: Apollo.QueryHookOptions<AllImagesQuery, AllImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllImagesQuery, AllImagesQueryVariables>(AllImagesDocument, options);
      }
export function useAllImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllImagesQuery, AllImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllImagesQuery, AllImagesQueryVariables>(AllImagesDocument, options);
        }
export type AllImagesQueryHookResult = ReturnType<typeof useAllImagesQuery>;
export type AllImagesLazyQueryHookResult = ReturnType<typeof useAllImagesLazyQuery>;
export type AllImagesQueryResult = Apollo.QueryResult<AllImagesQuery, AllImagesQueryVariables>;
export const DeleteImageDocument = gql`
    mutation deleteImage($id: ID!) {
  deleteImage(id: $id) {
    ...ImageProduct
  }
}
    ${ImageProductFragmentDoc}`;
export type DeleteImageMutationFn = Apollo.MutationFunction<DeleteImageMutation, DeleteImageMutationVariables>;

/**
 * __useDeleteImageMutation__
 *
 * To run a mutation, you first call `useDeleteImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImageMutation, { data, loading, error }] = useDeleteImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteImageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImageMutation, DeleteImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImageMutation, DeleteImageMutationVariables>(DeleteImageDocument, options);
      }
export type DeleteImageMutationHookResult = ReturnType<typeof useDeleteImageMutation>;
export type DeleteImageMutationResult = Apollo.MutationResult<DeleteImageMutation>;
export type DeleteImageMutationOptions = Apollo.BaseMutationOptions<DeleteImageMutation, DeleteImageMutationVariables>;
export const ImageDocument = gql`
    query Image($id: ID!) {
  image(id: $id) {
    ...ImageProduct
  }
}
    ${ImageProductFragmentDoc}`;

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
export function useImageQuery(baseOptions: Apollo.QueryHookOptions<ImageQuery, ImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImageQuery, ImageQueryVariables>(ImageDocument, options);
      }
export function useImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImageQuery, ImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImageQuery, ImageQueryVariables>(ImageDocument, options);
        }
export type ImageQueryHookResult = ReturnType<typeof useImageQuery>;
export type ImageLazyQueryHookResult = ReturnType<typeof useImageLazyQuery>;
export type ImageQueryResult = Apollo.QueryResult<ImageQuery, ImageQueryVariables>;
export const AddOfferInDocument = gql`
    mutation AddOfferIn($input: OfferInInput!) {
  addOfferIn(input: $input) {
    ...OfferIn
  }
}
    ${OfferInFragmentDoc}`;
export type AddOfferInMutationFn = Apollo.MutationFunction<AddOfferInMutation, AddOfferInMutationVariables>;

/**
 * __useAddOfferInMutation__
 *
 * To run a mutation, you first call `useAddOfferInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOfferInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOfferInMutation, { data, loading, error }] = useAddOfferInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddOfferInMutation(baseOptions?: Apollo.MutationHookOptions<AddOfferInMutation, AddOfferInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOfferInMutation, AddOfferInMutationVariables>(AddOfferInDocument, options);
      }
export type AddOfferInMutationHookResult = ReturnType<typeof useAddOfferInMutation>;
export type AddOfferInMutationResult = Apollo.MutationResult<AddOfferInMutation>;
export type AddOfferInMutationOptions = Apollo.BaseMutationOptions<AddOfferInMutation, AddOfferInMutationVariables>;
export const UpdateOfferInDocument = gql`
    mutation UpdateOfferIn($input: OfferInInput!) {
  updateOfferIn(input: $input) {
    ...OfferIn
  }
}
    ${OfferInFragmentDoc}`;
export type UpdateOfferInMutationFn = Apollo.MutationFunction<UpdateOfferInMutation, UpdateOfferInMutationVariables>;

/**
 * __useUpdateOfferInMutation__
 *
 * To run a mutation, you first call `useUpdateOfferInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOfferInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOfferInMutation, { data, loading, error }] = useUpdateOfferInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOfferInMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOfferInMutation, UpdateOfferInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOfferInMutation, UpdateOfferInMutationVariables>(UpdateOfferInDocument, options);
      }
export type UpdateOfferInMutationHookResult = ReturnType<typeof useUpdateOfferInMutation>;
export type UpdateOfferInMutationResult = Apollo.MutationResult<UpdateOfferInMutation>;
export type UpdateOfferInMutationOptions = Apollo.BaseMutationOptions<UpdateOfferInMutation, UpdateOfferInMutationVariables>;
export const AddPropertyDocument = gql`
    mutation AddProperty($input: PropertyInput!) {
  addProperty(input: $input) {
    ...Property
  }
}
    ${PropertyFragmentDoc}`;
export type AddPropertyMutationFn = Apollo.MutationFunction<AddPropertyMutation, AddPropertyMutationVariables>;

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
export function useAddPropertyMutation(baseOptions?: Apollo.MutationHookOptions<AddPropertyMutation, AddPropertyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPropertyMutation, AddPropertyMutationVariables>(AddPropertyDocument, options);
      }
export type AddPropertyMutationHookResult = ReturnType<typeof useAddPropertyMutation>;
export type AddPropertyMutationResult = Apollo.MutationResult<AddPropertyMutation>;
export type AddPropertyMutationOptions = Apollo.BaseMutationOptions<AddPropertyMutation, AddPropertyMutationVariables>;
export const AllPropertiesDocument = gql`
    query AllProperties {
  allProperties {
    ...Property
  }
}
    ${PropertyFragmentDoc}`;

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
export function useAllPropertiesQuery(baseOptions?: Apollo.QueryHookOptions<AllPropertiesQuery, AllPropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPropertiesQuery, AllPropertiesQueryVariables>(AllPropertiesDocument, options);
      }
export function useAllPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPropertiesQuery, AllPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPropertiesQuery, AllPropertiesQueryVariables>(AllPropertiesDocument, options);
        }
export type AllPropertiesQueryHookResult = ReturnType<typeof useAllPropertiesQuery>;
export type AllPropertiesLazyQueryHookResult = ReturnType<typeof useAllPropertiesLazyQuery>;
export type AllPropertiesQueryResult = Apollo.QueryResult<AllPropertiesQuery, AllPropertiesQueryVariables>;
export const PropertyDocument = gql`
    query Property($id: ID!) {
  property(id: $id) {
    ...Property
  }
}
    ${PropertyFragmentDoc}`;

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
export function usePropertyQuery(baseOptions: Apollo.QueryHookOptions<PropertyQuery, PropertyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PropertyQuery, PropertyQueryVariables>(PropertyDocument, options);
      }
export function usePropertyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PropertyQuery, PropertyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PropertyQuery, PropertyQueryVariables>(PropertyDocument, options);
        }
export type PropertyQueryHookResult = ReturnType<typeof usePropertyQuery>;
export type PropertyLazyQueryHookResult = ReturnType<typeof usePropertyLazyQuery>;
export type PropertyQueryResult = Apollo.QueryResult<PropertyQuery, PropertyQueryVariables>;
export const UpdatePropertyDocument = gql`
    mutation UpdateProperty($input: PropertyInput!) {
  updateProperty(input: $input) {
    ...Property
  }
}
    ${PropertyFragmentDoc}`;
export type UpdatePropertyMutationFn = Apollo.MutationFunction<UpdatePropertyMutation, UpdatePropertyMutationVariables>;

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
export function useUpdatePropertyMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePropertyMutation, UpdatePropertyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePropertyMutation, UpdatePropertyMutationVariables>(UpdatePropertyDocument, options);
      }
export type UpdatePropertyMutationHookResult = ReturnType<typeof useUpdatePropertyMutation>;
export type UpdatePropertyMutationResult = Apollo.MutationResult<UpdatePropertyMutation>;
export type UpdatePropertyMutationOptions = Apollo.BaseMutationOptions<UpdatePropertyMutation, UpdatePropertyMutationVariables>;
export const AddResidentialFeatureDocument = gql`
    mutation AddResidentialFeature($input: ResidentialFeatureInput!) {
  addResidentialFeature(input: $input) {
    ...ResidentialFeature
  }
}
    ${ResidentialFeatureFragmentDoc}`;
export type AddResidentialFeatureMutationFn = Apollo.MutationFunction<AddResidentialFeatureMutation, AddResidentialFeatureMutationVariables>;

/**
 * __useAddResidentialFeatureMutation__
 *
 * To run a mutation, you first call `useAddResidentialFeatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddResidentialFeatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addResidentialFeatureMutation, { data, loading, error }] = useAddResidentialFeatureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddResidentialFeatureMutation(baseOptions?: Apollo.MutationHookOptions<AddResidentialFeatureMutation, AddResidentialFeatureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddResidentialFeatureMutation, AddResidentialFeatureMutationVariables>(AddResidentialFeatureDocument, options);
      }
export type AddResidentialFeatureMutationHookResult = ReturnType<typeof useAddResidentialFeatureMutation>;
export type AddResidentialFeatureMutationResult = Apollo.MutationResult<AddResidentialFeatureMutation>;
export type AddResidentialFeatureMutationOptions = Apollo.BaseMutationOptions<AddResidentialFeatureMutation, AddResidentialFeatureMutationVariables>;
export const AllResidentialFeaturesDocument = gql`
    query AllResidentialFeatures {
  allResidentialFeatures {
    ...ResidentialFeature
  }
}
    ${ResidentialFeatureFragmentDoc}`;

/**
 * __useAllResidentialFeaturesQuery__
 *
 * To run a query within a React component, call `useAllResidentialFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllResidentialFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllResidentialFeaturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllResidentialFeaturesQuery(baseOptions?: Apollo.QueryHookOptions<AllResidentialFeaturesQuery, AllResidentialFeaturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllResidentialFeaturesQuery, AllResidentialFeaturesQueryVariables>(AllResidentialFeaturesDocument, options);
      }
export function useAllResidentialFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllResidentialFeaturesQuery, AllResidentialFeaturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllResidentialFeaturesQuery, AllResidentialFeaturesQueryVariables>(AllResidentialFeaturesDocument, options);
        }
export type AllResidentialFeaturesQueryHookResult = ReturnType<typeof useAllResidentialFeaturesQuery>;
export type AllResidentialFeaturesLazyQueryHookResult = ReturnType<typeof useAllResidentialFeaturesLazyQuery>;
export type AllResidentialFeaturesQueryResult = Apollo.QueryResult<AllResidentialFeaturesQuery, AllResidentialFeaturesQueryVariables>;
export const AddTodoDocument = gql`
    mutation AddTodo($input: TodoInput!) {
  addTodo(input: $input) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: ID!, $input: TodoInput!) {
  updateTodo(id: $id, input: $input) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export type AddFormMutationVariables = Exact<{
  input: FormInput;
}>;


export type AddFormMutation = { __typename?: 'Mutation', addForm?: { __typename?: 'Form', id: string, name: string, email: string, message: string } | null };

export type FormQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FormQuery = { __typename?: 'Query', form?: { __typename?: 'Form', id: string, name: string, email: string, message: string } | null };

export type FormFragment = { __typename?: 'Form', id: string, name: string, email: string, message: string };

export type AccountFragment = { __typename?: 'Account', id: string, type: string, provider: string, providerAccountId: string, refresh_token?: string | null, access_token?: string | null, expires_at?: number | null, token_type?: string | null, scope?: string | null, id_token?: string | null, session_state?: string | null };

export type AdminMessageFragment = { __typename?: 'AdminMessage', id: string, offerInId: string, adminId?: string | null, title?: string | null, message?: string | null, read?: boolean | null, urgent?: boolean | null, relatingTo?: Offer_In_Categories | null };

export type AddAgentMutationVariables = Exact<{
  input: AgentInput;
}>;


export type AddAgentMutation = { __typename?: 'Mutation', addAgent?: { __typename?: 'Agent', id: string, userId: string, flag?: boolean | null, roles?: Roles | null, firstName?: string | null, lastName?: string | null, email?: string | null, password?: string | null, createdAt?: string | null, updatedAt?: string | null, address?: string | null, phoneNumber?: string | null, aboutMe?: string | null, profileImage?: string | null, properties?: Array<{ __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null } | null> | null } | null };

export type AgentQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type AgentQuery = { __typename?: 'Query', agent?: { __typename?: 'Agent', id: string, userId: string, flag?: boolean | null, roles?: Roles | null, firstName?: string | null, lastName?: string | null, email?: string | null, password?: string | null, createdAt?: string | null, updatedAt?: string | null, address?: string | null, phoneNumber?: string | null, aboutMe?: string | null, profileImage?: string | null, properties?: Array<{ __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null } | null> | null } | null };

export type AgentFragment = { __typename?: 'Agent', id: string, userId: string, flag?: boolean | null, roles?: Roles | null, firstName?: string | null, lastName?: string | null, email?: string | null, password?: string | null, createdAt?: string | null, updatedAt?: string | null, address?: string | null, phoneNumber?: string | null, aboutMe?: string | null, profileImage?: string | null, properties?: Array<{ __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null } | null> | null };

export type DeleteAgentImageMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAgentImageMutation = { __typename?: 'Mutation', deleteAgentImage?: { __typename?: 'Agent', id: string, userId: string, flag?: boolean | null, roles?: Roles | null, firstName?: string | null, lastName?: string | null, email?: string | null, password?: string | null, createdAt?: string | null, updatedAt?: string | null, address?: string | null, phoneNumber?: string | null, aboutMe?: string | null, profileImage?: string | null, properties?: Array<{ __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null } | null> | null } | null };

export type UpdateAgentMutationVariables = Exact<{
  input: AgentInput;
}>;


export type UpdateAgentMutation = { __typename?: 'Mutation', updateAgent?: { __typename?: 'Agent', id: string, userId: string, flag?: boolean | null, roles?: Roles | null, firstName?: string | null, lastName?: string | null, email?: string | null, password?: string | null, createdAt?: string | null, updatedAt?: string | null, address?: string | null, phoneNumber?: string | null, aboutMe?: string | null, profileImage?: string | null, properties?: Array<{ __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null } | null> | null } | null };

export type UpdatedAgentSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UpdatedAgentSubscription = { __typename?: 'Subscription', updatedAgent?: { __typename?: 'Agent', id: string, userId: string, flag?: boolean | null, roles?: Roles | null, firstName?: string | null, lastName?: string | null, email?: string | null, password?: string | null, createdAt?: string | null, updatedAt?: string | null, address?: string | null, phoneNumber?: string | null, aboutMe?: string | null, profileImage?: string | null, properties?: Array<{ __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null } | null> | null } | null };

export type AddBlogPostMutationVariables = Exact<{
  input: BlogPostInput;
}>;


export type AddBlogPostMutation = { __typename?: 'Mutation', addBlogPost?: { __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BlogPostQuery = { __typename?: 'Query', blogPost?: { __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type BlogPostFragment = { __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null };

export type BlogPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPostsQuery = { __typename?: 'Query', blogPosts?: Array<{ __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null> | null };

export type UpdateBlogPostMutationVariables = Exact<{
  input: BlogPostInput;
}>;


export type UpdateBlogPostMutation = { __typename?: 'Mutation', updateBlogPost?: { __typename?: 'BlogPost', id: string, publishedDate?: string | null, title?: string | null, subtitle1?: string | null, tableContents1?: string | null, tableContents2?: string | null, tableContents3?: string | null, tableContents4?: string | null, p1?: string | null, p2?: string | null, p3?: string | null, subtitle2?: string | null, p4?: string | null, p5?: string | null, l1?: string | null, l2?: string | null, l3?: string | null, l4?: string | null, l5?: string | null, subtitle3?: string | null, p6?: string | null, p7?: string | null, l6?: string | null, l7?: string | null, l8?: string | null, l9?: string | null, l10?: string | null, l11?: string | null, l12?: string | null, l13?: string | null, l14?: string | null, l15?: string | null, p8?: string | null, subtitle4?: string | null, conclusion1?: string | null, conclusion2?: string | null, conclusion3?: string | null, reference1?: string | null, reference2?: string | null, authorName?: string | null, authorAbout?: string | null, authorLink?: string | null, photoCredit?: string | null, editedBy?: string | null, mainImage?: string | null } | null };

export type AddCommercialFeatureMutationVariables = Exact<{
  input: CommercialFeatureInput;
}>;


export type AddCommercialFeatureMutation = { __typename?: 'Mutation', addCommercialFeature?: { __typename?: 'CommercialFeature', id: string, propertyId: string, commercialFeature?: string | null } | null };

export type CommercialFeatureFragment = { __typename?: 'CommercialFeature', id: string, propertyId: string, commercialFeature?: string | null };

export type AddDocumentMutationVariables = Exact<{
  input: DocumentInput;
}>;


export type AddDocumentMutation = { __typename?: 'Mutation', addDocument?: { __typename?: 'Document', id: string, url?: string | null, offerInId: string, documentCategory?: Document_Category | null } | null };

export type AllDocumentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDocumentsQuery = { __typename?: 'Query', allDocuments?: Array<{ __typename?: 'Document', id: string, url?: string | null, offerInId: string, documentCategory?: Document_Category | null } | null> | null };

export type DeleteDocumentMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteDocumentMutation = { __typename?: 'Mutation', deleteDocument?: { __typename?: 'Document', id: string, url?: string | null, offerInId: string, documentCategory?: Document_Category | null } | null };

export type DocumentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DocumentQuery = { __typename?: 'Query', document?: { __typename?: 'Document', id: string, url?: string | null, offerInId: string, documentCategory?: Document_Category | null } | null };

export type DocumentFragment = { __typename?: 'Document', id: string, url?: string | null, offerInId: string, documentCategory?: Document_Category | null };

export type AddImageBlogMutationVariables = Exact<{
  input: ImageBlogInput;
}>;


export type AddImageBlogMutation = { __typename?: 'Mutation', addImageBlog?: { __typename?: 'ImageBlog', id: string, url?: string | null, blogPostId: string } | null };

export type AllImageBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllImageBlogsQuery = { __typename?: 'Query', allImageBlogs?: Array<{ __typename?: 'ImageBlog', id: string, url?: string | null, blogPostId: string } | null> | null };

export type DeleteImageBlogMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteImageBlogMutation = { __typename?: 'Mutation', deleteImageBlog?: { __typename?: 'ImageBlog', id: string, url?: string | null, blogPostId: string } | null };

export type ImageBlogQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImageBlogQuery = { __typename?: 'Query', imageBlog?: { __typename?: 'ImageBlog', id: string, url?: string | null, blogPostId: string } | null };

export type ImageBlogFragment = { __typename?: 'ImageBlog', id: string, url?: string | null, blogPostId: string };

export type AddImageMutationVariables = Exact<{
  input: ImageProductInput;
}>;


export type AddImageMutation = { __typename?: 'Mutation', addImage?: { __typename?: 'ImageProduct', id: string, url?: string | null, propertyId: string, imageCategory?: Image_Category | null } | null };

export type AllImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllImagesQuery = { __typename?: 'Query', allImages?: Array<{ __typename?: 'ImageProduct', id: string, url?: string | null, propertyId: string, imageCategory?: Image_Category | null } | null> | null };

export type DeleteImageMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteImageMutation = { __typename?: 'Mutation', deleteImage?: { __typename?: 'ImageProduct', id: string, url?: string | null, propertyId: string, imageCategory?: Image_Category | null } | null };

export type ImageProductFragment = { __typename?: 'ImageProduct', id: string, url?: string | null, propertyId: string, imageCategory?: Image_Category | null };

export type ImageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImageQuery = { __typename?: 'Query', image?: { __typename?: 'ImageProduct', id: string, url?: string | null, propertyId: string, imageCategory?: Image_Category | null } | null };

export type AddOfferInMutationVariables = Exact<{
  input: OfferInInput;
}>;


export type AddOfferInMutation = { __typename?: 'Mutation', addOfferIn?: { __typename?: 'OfferIn', id: string, propertyId: string, elecCompCompanyId: string, intermologistId: string, gasComplianceId: string, waterCertId: string, offerAcceptedId: string, bankInspectionId: string, conveyancerId: string, mortgageOriginatorId: string, ficaDocsId: string, amount?: string | null, dot?: Date | null, dateOfBondApplication?: Date | null, dateOfBondApprovalInPrincipal?: Date | null, dateOfBondApproved?: Date | null, bankName?: string | null, flag?: boolean | null, documents?: Array<{ __typename?: 'Document', offerInId: string, documentCategory?: Document_Category | null, url?: string | null } | null> | null, todos?: Array<{ __typename?: 'Todo', id: string, offerInId: string, offerInCategory?: Offer_In_Categories | null, task?: string | null, completed?: boolean | null, deadline?: Date | null } | null> | null, message?: Array<{ __typename?: 'AdminMessage', id: string, offerInId: string, adminId?: string | null, title?: string | null, message?: string | null, read?: boolean | null, urgent?: boolean | null, relatingTo?: Offer_In_Categories | null } | null> | null, elecCompCompany?: { __typename?: 'ElecCompCompany', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, intermologist?: { __typename?: 'Intermologist', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, gasCompliance?: { __typename?: 'GasCompliance', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, waterCert?: { __typename?: 'WaterCert', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, offerAccepted?: { __typename?: 'OfferAccepted', id: string, offerInId: string, withConditions?: boolean | null, conditions?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, bankInspection?: { __typename?: 'BankInspection', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, conveyancer?: { __typename?: 'Conveyancer', id: string, offerInId: string, name?: string | null, phone?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, mortgageOriginator?: { __typename?: 'MortgageOriginator', id: string, offerInId: string, phone?: string | null, name?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, ficaDocs?: { __typename?: 'FicaDocs', id: string, offerInId: string, address?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, electricFence?: { __typename?: 'ElectricFence', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, alien?: { __typename?: 'Alien', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null } | null };

export type OfferInFragment = { __typename?: 'OfferIn', id: string, propertyId: string, elecCompCompanyId: string, intermologistId: string, gasComplianceId: string, waterCertId: string, offerAcceptedId: string, bankInspectionId: string, conveyancerId: string, mortgageOriginatorId: string, ficaDocsId: string, amount?: string | null, dot?: Date | null, dateOfBondApplication?: Date | null, dateOfBondApprovalInPrincipal?: Date | null, dateOfBondApproved?: Date | null, bankName?: string | null, flag?: boolean | null, documents?: Array<{ __typename?: 'Document', offerInId: string, documentCategory?: Document_Category | null, url?: string | null } | null> | null, todos?: Array<{ __typename?: 'Todo', id: string, offerInId: string, offerInCategory?: Offer_In_Categories | null, task?: string | null, completed?: boolean | null, deadline?: Date | null } | null> | null, message?: Array<{ __typename?: 'AdminMessage', id: string, offerInId: string, adminId?: string | null, title?: string | null, message?: string | null, read?: boolean | null, urgent?: boolean | null, relatingTo?: Offer_In_Categories | null } | null> | null, elecCompCompany?: { __typename?: 'ElecCompCompany', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, intermologist?: { __typename?: 'Intermologist', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, gasCompliance?: { __typename?: 'GasCompliance', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, waterCert?: { __typename?: 'WaterCert', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, offerAccepted?: { __typename?: 'OfferAccepted', id: string, offerInId: string, withConditions?: boolean | null, conditions?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, bankInspection?: { __typename?: 'BankInspection', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, conveyancer?: { __typename?: 'Conveyancer', id: string, offerInId: string, name?: string | null, phone?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, mortgageOriginator?: { __typename?: 'MortgageOriginator', id: string, offerInId: string, phone?: string | null, name?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, ficaDocs?: { __typename?: 'FicaDocs', id: string, offerInId: string, address?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, electricFence?: { __typename?: 'ElectricFence', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, alien?: { __typename?: 'Alien', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null };

export type UpdateOfferInMutationVariables = Exact<{
  input: OfferInInput;
}>;


export type UpdateOfferInMutation = { __typename?: 'Mutation', updateOfferIn?: { __typename?: 'OfferIn', id: string, propertyId: string, elecCompCompanyId: string, intermologistId: string, gasComplianceId: string, waterCertId: string, offerAcceptedId: string, bankInspectionId: string, conveyancerId: string, mortgageOriginatorId: string, ficaDocsId: string, amount?: string | null, dot?: Date | null, dateOfBondApplication?: Date | null, dateOfBondApprovalInPrincipal?: Date | null, dateOfBondApproved?: Date | null, bankName?: string | null, flag?: boolean | null, documents?: Array<{ __typename?: 'Document', offerInId: string, documentCategory?: Document_Category | null, url?: string | null } | null> | null, todos?: Array<{ __typename?: 'Todo', id: string, offerInId: string, offerInCategory?: Offer_In_Categories | null, task?: string | null, completed?: boolean | null, deadline?: Date | null } | null> | null, message?: Array<{ __typename?: 'AdminMessage', id: string, offerInId: string, adminId?: string | null, title?: string | null, message?: string | null, read?: boolean | null, urgent?: boolean | null, relatingTo?: Offer_In_Categories | null } | null> | null, elecCompCompany?: { __typename?: 'ElecCompCompany', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, intermologist?: { __typename?: 'Intermologist', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, gasCompliance?: { __typename?: 'GasCompliance', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, waterCert?: { __typename?: 'WaterCert', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, offerAccepted?: { __typename?: 'OfferAccepted', id: string, offerInId: string, withConditions?: boolean | null, conditions?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, bankInspection?: { __typename?: 'BankInspection', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, conveyancer?: { __typename?: 'Conveyancer', id: string, offerInId: string, name?: string | null, phone?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, mortgageOriginator?: { __typename?: 'MortgageOriginator', id: string, offerInId: string, phone?: string | null, name?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, ficaDocs?: { __typename?: 'FicaDocs', id: string, offerInId: string, address?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, electricFence?: { __typename?: 'ElectricFence', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, alien?: { __typename?: 'Alien', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null } | null };

export type UpdateOfferInResponseFragment = { __typename?: 'UpdateOfferInResponse', offerIn?: { __typename?: 'OfferIn', id: string, propertyId: string, elecCompCompanyId: string, intermologistId: string, gasComplianceId: string, waterCertId: string, offerAcceptedId: string, bankInspectionId: string, conveyancerId: string, mortgageOriginatorId: string, ficaDocsId: string, amount?: string | null, dot?: Date | null, dateOfBondApplication?: Date | null, dateOfBondApprovalInPrincipal?: Date | null, dateOfBondApproved?: Date | null, bankName?: string | null, flag?: boolean | null, documents?: Array<{ __typename?: 'Document', offerInId: string, documentCategory?: Document_Category | null, url?: string | null } | null> | null, todos?: Array<{ __typename?: 'Todo', id: string, offerInId: string, offerInCategory?: Offer_In_Categories | null, task?: string | null, completed?: boolean | null, deadline?: Date | null } | null> | null, message?: Array<{ __typename?: 'AdminMessage', id: string, offerInId: string, adminId?: string | null, title?: string | null, message?: string | null, read?: boolean | null, urgent?: boolean | null, relatingTo?: Offer_In_Categories | null } | null> | null, elecCompCompany?: { __typename?: 'ElecCompCompany', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, intermologist?: { __typename?: 'Intermologist', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, gasCompliance?: { __typename?: 'GasCompliance', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, waterCert?: { __typename?: 'WaterCert', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, offerAccepted?: { __typename?: 'OfferAccepted', id: string, offerInId: string, withConditions?: boolean | null, conditions?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, bankInspection?: { __typename?: 'BankInspection', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, conveyancer?: { __typename?: 'Conveyancer', id: string, offerInId: string, name?: string | null, phone?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, mortgageOriginator?: { __typename?: 'MortgageOriginator', id: string, offerInId: string, phone?: string | null, name?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, ficaDocs?: { __typename?: 'FicaDocs', id: string, offerInId: string, address?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, electricFence?: { __typename?: 'ElectricFence', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, alien?: { __typename?: 'Alien', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null } | null, elecCompCompany?: { __typename?: 'ElecCompCompany', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, intermologist?: { __typename?: 'Intermologist', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, gasCompliance?: { __typename?: 'GasCompliance', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, waterCert?: { __typename?: 'WaterCert', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, offerAccepted?: { __typename?: 'OfferAccepted', id: string, offerInId: string, withConditions?: boolean | null, conditions?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, bankInspection?: { __typename?: 'BankInspection', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, conveyancer?: { __typename?: 'Conveyancer', id: string, offerInId: string, name?: string | null, phone?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, mortgageOriginator?: { __typename?: 'MortgageOriginator', id: string, offerInId: string, phone?: string | null, name?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, ficaDocs?: { __typename?: 'FicaDocs', id: string, offerInId: string, address?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, electricFence?: { __typename?: 'ElectricFence', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null, alien?: { __typename?: 'Alien', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null } | null };

export type AlienFragment = { __typename?: 'Alien', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type BankInspectionFragment = { __typename?: 'BankInspection', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type ConveyancerFragment = { __typename?: 'Conveyancer', id: string, offerInId: string, name?: string | null, phone?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type ElecCompCompanyFragment = { __typename?: 'ElecCompCompany', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type ElectricFenceFragment = { __typename?: 'ElectricFence', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type FicaDocsFragment = { __typename?: 'FicaDocs', id: string, offerInId: string, address?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type GasComplianceFragment = { __typename?: 'GasCompliance', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type IntermologistFragment = { __typename?: 'Intermologist', id: string, offerInId: string, name?: string | null, phone?: string | null, email?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type MortgageOriginatorFragment = { __typename?: 'MortgageOriginator', id: string, offerInId: string, phone?: string | null, name?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type OfferAcceptedFragment = { __typename?: 'OfferAccepted', id: string, offerInId: string, withConditions?: boolean | null, conditions?: string | null, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type WaterCertFragment = { __typename?: 'WaterCert', id: string, offerInId: string, notes?: string | null, completed?: boolean | null, deadline?: Date | null, flag?: boolean | null };

export type AddPropertyMutationVariables = Exact<{
  input: PropertyInput;
}>;


export type AddPropertyMutation = { __typename?: 'Mutation', addProperty?: { __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, residentialFeatures?: Array<{ __typename?: 'ResidentialFeature', id: string, propertyId: string, residentialFeature?: string | null } | null> | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null } | null };

export type AllPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPropertiesQuery = { __typename?: 'Query', allProperties?: Array<{ __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, residentialFeatures?: Array<{ __typename?: 'ResidentialFeature', id: string, propertyId: string, residentialFeature?: string | null } | null> | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null } | null> | null };

export type PropertyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PropertyQuery = { __typename?: 'Query', property?: { __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, residentialFeatures?: Array<{ __typename?: 'ResidentialFeature', id: string, propertyId: string, residentialFeature?: string | null } | null> | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null } | null };

export type PropertyFragment = { __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, residentialFeatures?: Array<{ __typename?: 'ResidentialFeature', id: string, propertyId: string, residentialFeature?: string | null } | null> | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null };

export type UpdatePropertyMutationVariables = Exact<{
  input: PropertyInput;
}>;


export type UpdatePropertyMutation = { __typename?: 'Mutation', updateProperty?: { __typename?: 'Property', id: string, agentId: string, interior: string, bedrooms: number, bathrooms: number, basement?: string | null, flooring: string, appliances?: string | null, otherPropertyFeatures?: string | null, otherInteriorFeatures?: string | null, schools?: string | null, distanceToNearestSchool?: string | null, shopping?: string | null, nightlife?: string | null, forKids?: string | null, surroundingSuburbs?: string | null, featured?: boolean | null, status?: Status | null, title: string, overview: string, address: string, price: string, yearBuilt?: string | null, heating?: string | null, cooling?: string | null, parking: number, lotSize: string, propertyCategory: Property_Category, residentialCategory?: Residential_Category | null, residentialFeatures?: Array<{ __typename?: 'ResidentialFeature', id: string, propertyId: string, residentialFeature?: string | null } | null> | null, images?: Array<{ __typename?: 'ImageProduct', url?: string | null, id: string, imageCategory?: Image_Category | null, propertyId: string } | null> | null } | null };

export type AddResidentialFeatureMutationVariables = Exact<{
  input: ResidentialFeatureInput;
}>;


export type AddResidentialFeatureMutation = { __typename?: 'Mutation', addResidentialFeature?: { __typename?: 'ResidentialFeature', id: string, propertyId: string, residentialFeature?: string | null } | null };

export type AllResidentialFeaturesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllResidentialFeaturesQuery = { __typename?: 'Query', allResidentialFeatures?: Array<{ __typename?: 'ResidentialFeature', id: string, propertyId: string, residentialFeature?: string | null } | null> | null };

export type ResidentialFeatureFragment = { __typename?: 'ResidentialFeature', id: string, propertyId: string, residentialFeature?: string | null };

export type AddTodoMutationVariables = Exact<{
  input: TodoInput;
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo?: { __typename?: 'Todo', id: string, offerInId: string, offerInCategory?: Offer_In_Categories | null, task?: string | null, completed?: boolean | null, deadline?: Date | null } | null };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'Todo', id: string, offerInId: string, offerInCategory?: Offer_In_Categories | null, task?: string | null, completed?: boolean | null, deadline?: Date | null } | null };

export type TodoFragment = { __typename?: 'Todo', id: string, offerInId: string, offerInCategory?: Offer_In_Categories | null, task?: string | null, completed?: boolean | null, deadline?: Date | null };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID'];
  input: TodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, offerInId: string, offerInCategory?: Offer_In_Categories | null, task?: string | null, completed?: boolean | null, deadline?: Date | null } | null };
