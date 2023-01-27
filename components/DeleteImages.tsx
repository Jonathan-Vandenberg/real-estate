import { useDeleteDocumentMutation, useDeleteImageMutation } from "../types";
import { S3 } from "aws-sdk";
import Delete from "./svgs/Delete";
import { useState } from "react";

const RemoveFile = ({ url, imageId, removeType, documentId }) => {
  const [deleteSingleImage] = useDeleteImageMutation();
  const [deleteSingleDocument] = useDeleteDocumentMutation();
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteFile = async (
    url: string,
    removeType: "image" | "document",
    imageId: string,
    documentId: string
  ) => {
    const s3 = new S3({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });
    // parse the url to extract the image's key from it
    const imageKey = url?.split(
      `https://landmark-real-eastate.s3.ap-southeast-1.amazonaws.com/`
    )[1];

    try {
      await s3
        .deleteObject({ Bucket: "landmark-real-eastate", Key: imageKey })
        .promise();
      console.log("Image deleted from S3 successfully");

      // call the deleteImage mutation to remove the image's name from the MongoDB database
      if (removeType === "image") {
        await deleteSingleImage({ variables: { id: imageId } });
        console.log("Image deleted from MongoDB successfully");
      }
      if (removeType === "document") {
        await deleteSingleDocument({
          variables: { id: documentId },
        });
        console.log("Image deleted from MongoDB successfully");
      }
    } catch (err) {
      console.log("Error deleting image: ", err);
    }
  };
  return (
    <div>
      <div onClick={() => setShowConfirm(true)}>
        {!showConfirm && (
          <Delete className="w-10 h-10 bg-white/30 p-2 rounded-full" />
        )}
      </div>
      {showConfirm && (
        <div className="space-x-4 flex items-center justify-between space">
          <div
            onClick={() => {
              deleteFile(url, removeType, imageId, documentId),
                setShowConfirm(false);
            }}
            className="w-auto bg-white/30 text-sm hover:cursor-pointer rounded-full p-2"
          >
            Delete
          </div>
          <div
            className="w-auto bg-white/30 text-sm hover:cursor-pointer rounded-full p-2"
            onClick={() => setShowConfirm(false)}
          >
            Cancel
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveFile;
