// import React, { useState } from "react";
// import { S3 } from "aws-sdk";
// import { Image, useUpdateImageMutation } from "../types";

// const s3 = new S3({
//   // dotenv not working
//   accessKeyId: "AKIATKBDGLNGKIMAJMER",
//   secretAccessKey: "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",
// });

// interface Props {
//   images: Images | null | undefined;
//   imagesId: string;
// }

// export default function DeleteImages({ images, imagesId }) {
//   const [fileNames, setFileNames] = useState<string[]>([]);
//   const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

//   const [updateImages] = useUpdateImagesMutation();

//   let imagesDetails = {
//     variables: {
//       input: {
//         id: imagesId,
//         interiorImage1: fileNames[0]
//           ? `https://landmark-real-eastate.s3.ap-southeast-1.amazonaws.com/${fileNames[0]}`
//           : ""
//       },
//     },
//   };

//   const handleFileDelete = (fileNames: string[]) => {
//     const params = {
//       Bucket: "landmark-real-eastate",
//       Delete: {
//         Objects: fileNames.map((fileName) => {
//           return { Key: fileName };
//         }),
//       },
//     };

//     s3.deleteObject(params, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(`Successfully deleted ${fileNames.join(", ")}`);
//         setFileNames(fileNames.filter((name) => !fileNames.includes(name)));
//       }
//     });
//   };

//   function sliceURL(fileName) {
//     var parts = fileName.split("/");
//     return parts[parts.length - 1];
//   }
//   return (
//     <div>
//       {images?.interiorImage1 != null && (
//         <>
//           <label>{sliceURL(images?.interiorImage1)}</label>
//           <input
//             type="checkbox"
//             name={`InteriorImage1: ${images.interiorImage1}`}
//             value={images?.interiorImage1}
//             onClick={() => {
//               setSelectedFiles((prev) => [
//                 ...prev,
//                 sliceURL(images?.interiorImage1),
//               ]),
//                 setFileNames((prev) => [...prev, ""]),
//                 updateImages(imagesDetails);
//             }}
//           />
//           <button onClick={() => handleFileDelete(selectedFiles)}>
//             DELETE
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

export {};
