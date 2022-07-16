import { prisma } from "../../../utils/client";
import { z } from "zod";
export const createUserSchema = z.object({
  username: z.string().max(25, "Max 25 characters"),
  description: z.string().optional(),
  hashtags: z.array(z.string().max(25, "Max 25 characters")),
});
