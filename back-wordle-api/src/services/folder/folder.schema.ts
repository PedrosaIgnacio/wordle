import { prisma } from "../../../utils/client";
import { z } from "zod";
export const createFolderSchema = z.object({
  name: z.string().max(25, "Max 25 characters"),
  parentFolderId: z.number().refine(async (id) => {
    const folder = await prisma.folder.findUnique({ where: { id: id } });
    return folder !== null ? true : false;
  }),
});
