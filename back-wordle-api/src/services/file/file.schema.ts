import { prisma } from "../../../utils/client";
import { z } from "zod";
export const uploadFileSchema = z.object({
  name: z.string().max(50, "Max 50 characters"),
  parentFolderId: z
    .number()
    .optional()
    .refine(async (id) => {
      if (id === undefined) {
        return true;
      }
      const folder = await prisma.folder.findUnique({ where: { id: id } });
      return folder !== null ? true : false;
    }),
});
