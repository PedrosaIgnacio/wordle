import { S3Client } from "@aws-sdk/client-s3";

import { env } from "./env";

export const s3 = new S3Client({
  apiVersion: "2010-12-01",
  region: "sa-east-1",
  credentials: {
    accessKeyId: env.access_key,
    secretAccessKey: env.secret_access_key,
  },
});
