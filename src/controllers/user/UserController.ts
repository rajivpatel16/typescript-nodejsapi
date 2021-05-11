import { Request, Response, NextFunction } from 'express';
import UserInterface from '../../Interface/UserInterface';

class UserController {
    private readonly userRepo:any
    constructor(UserRepoData: UserInterface) {
        console.log(this)
        this.userRepo = UserRepoData;
    }

    post(req:Request, res:Response) {
        try {
            const data = req.body
            const item = this.userRepo.addUser(data)
            res.status(200).send("Done");
        } catch ( error  ) {
            console.log(error.stack)
        }
       
    }

    findAllUser(req:Request, res:Response):any {
        try {
            console.log(this)
            const item = this.userRepo.getAllUser();
            res.send(item);
        }
        catch ( error  ) {
            console.log(error.stack)
        }
    }

}

export default UserController;
