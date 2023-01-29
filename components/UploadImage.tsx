import React, { useEffect, useState } from "react";
import { S3 } from "aws-sdk";
import { PutObjectRequest } from "aws-sdk/clients/s3";
import {
  Document_Category,
  Image_Category,
  useAddDocumentMutation,
  useUpdateAgentMutation,
} from "../types";
import { useAddImageMutation } from "../types";
import { Button } from "./Button";
import { v4 as uuidv4 } from "uuid";
import Plus from "./svgs/Plus";
import { useAppSelector } from "../redux-hooks/hooks";

interface FileInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface UploadImageProps {
  category?: Image_Category;
  propertyId: string;
  offerInId: string;
  documentCategory?: Document_Category;
  uploadType: "image" | "document" | "profile-image";
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  return (
    <div className="p-2 flex items-center justify-center w-full h-full">
      <label>
        <input type="file" multiple onChange={onChange} className="hidden" />
        <Plus strokeWidth="0.7" className="w-12 h-12" />
      </label>
    </div>
  );
};
const UploadImage: React.FC<UploadImageProps> = ({
  category,
  propertyId,
  offerInId,
  documentCategory,
  uploadType,
}) => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [files, setFiles] = useState<File[] | null>([]);
  const [prefix, setPrefix] = useState("");

  const { userId } = useAppSelector((state) => state.userId);
  const { agentId } = useAppSelector((state) => state.agentId);

  useEffect(() => {
    function createRandom() {
      const prefix = uuidv4();
      setPrefix(prefix);
    }
    createRandom();
  }, []);

  const [addImage] = useAddImageMutation();
  const [addDocument] = useAddDocumentMutation();
  const [updateAgent] = useUpdateAgentMutation();

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files != null) setFiles(Array.from(event.target.files));
  }

  function handleUpload() {
    if (files) {
      const uploadPromises = files.map((file) => {
        const s3 = new S3({
          // dotenv not working
          accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
          region: "ap-southeast-1",
        });

        const params = {
          Bucket: "landmark-real-eastate",
          Key: `${prefix}/${file.name}`,
          Body: file,
          ContentType:
            file.type === "application/pdf"
              ? "application/pdf"
              : file.type.startsWith("image/")
              ? file.type
              : "application/octet-stream",
          Metadata: {
            "Content-Type": file.type,
            "Access-Control-Allow-Origin": "*",
          },
          CORSConfiguration: {
            CORSRules: [
              {
                AllowedOrigins: ["*"],
                AllowedMethods: ["GET", "PUT", "POST", "DELETE"],
                AllowedHeaders: ["*"],
                MaxAgeSeconds: 3000,
                ExposeHeaders: ["ETag"],
              },
            ],
          },
        } as PutObjectRequest;

        return s3
          .upload(params)
          .promise()
          .then((data) => {
            if (uploadType === "image") {
              addImage({
                variables: {
                  input: {
                    url: `https://landmark-real-eastate.s3.ap-southeast-1.amazonaws.com/${prefix}/${file.name}`,
                    imageCategory: category,
                    propertyId: propertyId,
                  },
                },
              });
            }
            if (uploadType === "document") {
              addDocument({
                variables: {
                  input: {
                    url: `https://landmark-real-eastate.s3.ap-southeast-1.amazonaws.com/${prefix}/${file.name}`,
                    documentCategory: documentCategory,
                    offerInId: offerInId,
                  },
                },
              });
            }
            if (uploadType === "profile-image") {
              updateAgent({
                variables: {
                  input: {
                    id: agentId,
                    userId: userId,
                    profileImage: `https://landmark-real-eastate.s3.ap-southeast-1.amazonaws.com/${prefix}/${file.name}`,
                  },
                },
              });
            }
          });
      });

      Promise.all(uploadPromises)
        .then(() => {
          setUploadStatus("Success!");
          setTimeout(() => setUploadStatus(""), 2000);
          setFiles([]);
        })
        .catch((err) => {
          setUploadStatus("Error Uploading :(");
          setTimeout(() => setUploadStatus(""), 2000);
          setFiles([]);
        });
    }
  }

  return (
    <div className="w-full h-full my-auto mx-auto">
      <div className="flex items-center flex-col justify-center w-full h-full">
        {files && files?.length > 0 ? (
          <div className="min-h-[13rem] flex justify-center items-center">
            <Button
              disabled={!files || files.length === 0}
              onClick={handleUpload}
              className="text-white"
            >
              Upload
            </Button>
          </div>
        ) : (
          <div>
            {uploadStatus === "" && <FileInput onChange={handleFileChange} />}
          </div>
        )}
      </div>
      {uploadStatus != "" && (
        <p className="text-sm font-light tracking-widest w-full min-h-[13rem] flex justify-center items-center">
          {uploadStatus}
        </p>
      )}
    </div>
  );
};

export default UploadImage;
