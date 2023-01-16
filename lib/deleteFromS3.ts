import { DeleteObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client"; // Helper function that creates an Amazon S3 service client module.

export const bucketParams = {
  Bucket: "landmark-real-eastate",
  Delete: {
    Objects: [
      {
        Key: "favicon.ico",
      },
    ],
  },
};

export const deleteFromS3 = async () => {
  try {
    const data = await s3Client.send(new DeleteObjectsCommand(bucketParams));
    return data; // For unit tests.
    console.log("Success. Object deleted.");
  } catch (err) {
    console.log("Error", err);
  }
};

deleteFromS3();
