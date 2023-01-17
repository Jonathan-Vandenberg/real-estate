import React, { useState } from "react";
import { S3 } from "aws-sdk";
import { PutObjectRequest } from "aws-sdk/clients/s3";
import { IMAGE_CATEGORY } from "@prisma/client";
import { useAddImageMutation } from "../types";

interface FileInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: File | null;
}
interface UploadImageProps {
  category: IMAGE_CATEGORY;
  propertyId: string;
}

const FileInput: React.FC<FileInputProps> = ({ onChange, value }) => {
  return (
    <div>
      <input type="file" onChange={onChange} />
    </div>
  );
};
const UploadImage: React.FC<UploadImageProps> = ({ category, propertyId }) => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [refresh, setRefresh] = useState(false);

  const [addImage] = useAddImageMutation();

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files != null) setFile(event.target.files![0]);
  }

  function handleUpload() {
    const s3 = new S3({
      // dotenv not working
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const params = {
      Bucket: "landmark-real-eastate",
      Key: file!.name,
      Body: file,
      ContentType: file!.type,
      // adding cors rule
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

    s3.upload(params, (err, data) => {
      if (err) {
        setUploadStatus("Error uploading file: " + err);
        setFile(null);
      } else {
        setUploadStatus("File uploaded successfully!");
        addImage({
          variables: {
            input: {
              url: `https://landmark-real-eastate.s3.ap-southeast-1.amazonaws.com/${
                file!.name
              }`,
              imageCategory: category,
              propertyId: propertyId,
            },
          },
        });
        setFile(null);
        setRefresh(!refresh);
      }
    });
  }

  return (
    <div>
      <div className="flex space-x-3 items-center">
        <FileInput value={file} onChange={handleFileChange} />
        <button type="button" onClick={handleUpload} className="p-3 ">
          Upload
        </button>
      </div>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default UploadImage;
