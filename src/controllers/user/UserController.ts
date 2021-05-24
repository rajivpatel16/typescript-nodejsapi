import { Request, Response, NextFunction } from "express";
import UserInterface from "../../Interface/UserInterface";
import { userSchema } from "../../validators/UserValidator";
import * as fs from "fs";

class UserController {
  private readonly userRepo: UserInterface;
  constructor(UserRepoData: UserInterface) {
    this.userRepo = UserRepoData;
    //this.post = this.post.bind(this)
    //this.findAllUser = this.findAllUser.bind
  }

  post(req: Request, res: Response) {
    try {
      const data = userSchema.validate(req.body);
      if (data.error) {
        throw new Error(data.error);
      }

      const item = this.userRepo.addUser(data);
      res.status(200).send("Done");
    } catch (error) {
      console.log(error.stack);
      res.status(500).send(error.stack);
    }
  }

  findAllUser(req: Request, res: Response): any {
    try {
      const item = this.userRepo.getAllUser();
      res.send(item);
    } catch (error) {
      console.log(error.stack);
    }
  }
}

export default UserController;
