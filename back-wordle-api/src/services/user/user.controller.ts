import express, { Request, Response } from "express";
import { Controller, Delete, Get, Post, Req, Res } from "routing-controllers";
import { Service } from "typedi";
import { prisma } from "../../../utils/client";
import { createUserSchema } from "./user.schema";

@Controller("/user")
@Service()
export default class UserController {
  @Get()
  async GetAllUsers(@Res() res: Response) {
    return await prisma.user.findMany();
  }
  @Get("/:id")
  async GetUserById(@Res() res: Response, @Req() req: Request) {
    const id = parseInt(req.params.id);
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  // @Post()
  // async CreateUser(@Res() res: Response, @Req() req: Request) {
  //   const users = await createUserSchema.parseAsync(req.body);
  //   await prisma.user.create({ data: users });
  //   return res.json("User created succesful");
  // }
  @Delete("/:id")
  async DeleteUser(@Res() res: Response, @Req() req: Request) {
    const id = parseInt(req.params.id);
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
