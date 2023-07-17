import { prisma } from "../../../utils/client";
import { z } from "zod";
export const createUserSchema = z.object({
  username: z.string().max(25, "Max 25 characters"),
  password: z.string().max(25, "Max 25 characters"),
});
