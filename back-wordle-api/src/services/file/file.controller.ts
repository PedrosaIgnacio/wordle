import express, { Response, Request } from "express";
import { Controller, Get, Post, Req, Res } from "routing-controllers";
import { Service } from "typedi";
import { uploadFileSchema } from "./file.schema";
import { prisma } from "../../../utils/client";
import { s3 } from "../../../utils/aws";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectAclCommand, PutObjectCommand } from "@aws-sdk/client-s3";
@Controller("/file")
@Service()
export default class fileController {
  @Post("/signedUrl")
  async GetSignedUrl(@Res() res: Response, @Req() req: Request) {
    const fields = await uploadFileSchema.parseAsync(req.body);
    const parentFolders: string[] = [];
    if (fields.parentFolderId !== undefined) {
      const currentFolder = await prisma.folder.findUnique({
        where: { id: fields.parentFolderId },
      });
      let boolHaveParents = true;
      if (currentFolder === null || currentFolder.parentFolderId === null) {
        boolHaveParents = false;
      } else {
        let iterateId = currentFolder.parentFolderId;
        while (boolHaveParents) {
          const folder = await prisma.folder.findUnique({
            where: { id: iterateId },
          });
          if (folder === null || folder.parentFolderId === null) {
            if (folder?.parentFolderId === null) {
              parentFolders.push(folder.name);
            }
            boolHaveParents = false;
          } else {
            parentFolders.push(folder.name);
            iterateId = folder.parentFolderId;
          }
        }
        parentFolders.push(currentFolder?.name);
      }
    } else {
      parentFolders.push();
    }
    console.log(parentFolders);
    const command = new PutObjectCommand({
      Bucket: "wordleorkick",
      Key: `${parentFolders.join("/")}/` + fields.name,
    });
    const url = await getSignedUrl(s3, command, { expiresIn: 60 * 3 });
    return res.json({ success: true, url: url });
  }
}
