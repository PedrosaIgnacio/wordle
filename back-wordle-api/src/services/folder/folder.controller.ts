import { createFolderSchema } from "./folder.schema";
import { Response, Request } from "express";
import { Controller, Delete, Get, Post, Req, Res } from "routing-controllers";
import { prisma } from "../../../utils/client";
import { Service } from "typedi";
import { Folder } from "@prisma/client";
import { s3 } from "../../../utils/aws";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";

@Controller("/folder")
@Service()
export default class FolderController {
  @Get()
  async GetAllFolders(@Res() res: Response) {
    return await prisma.folder.findMany({
      where: { parentFolderId: 0 },
    });
  }

  @Get("/:id")
  async GetFolderById(@Res() res: Response, @Req() req: Request) {
    const id = parseInt(req.params.id);
    return await prisma.folder.findUnique({
      where: { id: id },
      include: { childrenFolder: true },
    });
  }

  @Get("/parentFolders/:id")
  async GetParentFolders(@Res() res: Response, @Req() req: Request) {
    const id = parseInt(req.params.id);
    const parentFolders: Folder[] = [];
    const currentFolder = await prisma.folder.findUnique({ where: { id: id } });

    if (currentFolder === null || currentFolder.parentFolderId === null) {
      return res.json([]);
    }

    let boolHaveParents = true;
    let iterateId = currentFolder.parentFolderId;

    while (boolHaveParents) {
      const folder = await prisma.folder.findUnique({
        where: { id: iterateId },
      });
      if (folder === null || folder.parentFolderId === null) {
        if (folder?.parentFolderId === null) {
          parentFolders.push(folder);
        }
        boolHaveParents = false;
      } else {
        parentFolders.push(folder);
        iterateId = folder.parentFolderId;
      }
    }
    const cmd = new ListObjectsV2Command({
      Bucket: "wordleorkick",
      Prefix: `Home/${currentFolder.name}`,
    });
    const response = await s3.send(cmd);
    console.log(response);

    return res.json(parentFolders.reverse());
  }

  @Post()
  async CreateFolder(@Res() res: Response, @Req() req: Request) {
    const fields = await createFolderSchema.parseAsync(req.body);
    const folder = await prisma.folder.create({ data: fields });
    return res.json({ success: true, folder });
  }

  @Delete("/:id")
  async DeleteFolder(@Res() res: Response, @Req() req: Request) {
    const id = parseInt(req.params.id);
    await prisma.folder.delete({ where: { id: id } });
    return res.json("One folder has been deleted");
  }
}
