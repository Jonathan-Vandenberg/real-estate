import React, { useState } from "react";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./Button";
import Email from "./svgs/Email";

const s3 = new AWS.S3({
  // dotenv not working
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: "ap-southeast-1",
});
const ses = new AWS.SES({
  region: "ap-southeast-1",
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

// arn:aws:ses:ap-southeast-1:227707083596:identity/urbangentryjon@gmail.com

interface Props {
  bucketName: string;
  keys: string[];
  recipient: string;
  sender: string;
}

const EmailSender: React.FC<Props> = ({
  bucketName,
  keys,
  recipient,
  sender,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSendEmail = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await Promise.all(
        keys.map((key) =>
          s3.getObject({ Bucket: bucketName, Key: key }).promise()
        )
      );
      const attachments = data.map((data, index) => ({
        filename: keys[index],
        data: data.Body,
        contentType: "application/octet-stream",
      }));

      const rawEmail = createRawEmail(attachments);

      const params = {
        RawMessage: {
          Data: rawEmail.toString(),
        },
        Source: sender,
        Destinations: [recipient],
      };

      await ses.sendRawEmail(params).promise();
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div onClick={handleSendEmail} className="text-md text-white">
          <Email className="w-10 h-10 bg-white/30 p-2 rounded-full text-black" />
        </div>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default EmailSender;

function createRawEmail(attachments) {
  const boundary = `--${uuidv4()}`;

  const headers = ["MIME-Version: 1.0"];

  const body =
    `\n--${boundary}\n` +
    attachments.reduce((body, attachment) => {
      const encodedAttachment = Buffer.from(attachment.data).toString("base64");
      body += `\n--${boundary}\n`;
      body += `Content-Type: ${attachment.contentType}; name="${attachment.filename}"\n`;
      body += "Content-Disposition: attachment\n";
      body += "Content-Transfer-Encoding: base64\n";
      body += "\n";
      body += encodedAttachment;
      return body;
    }, "");

  return Buffer.from(headers.join("\n") + body + `\n--${boundary}--`);
}
