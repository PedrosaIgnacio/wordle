import { createFolderSchema } from "./folder.schema";
import { Response, Request } from "express";
import { Controller, Delete, Get, Post, Req, Res } from "routing-controllers";
import { prisma } from "../../../utils/client";
import { Service } from "typedi";
@Controller("/folder")
@Service()
export default class FolderController {
  @Get()
  async GetAllFolders(@Res() res: Response) {
    return await prisma.folder.findMany({
      where: { parentFolder: null },
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
