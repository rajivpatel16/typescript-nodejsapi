import express, { Request, Response } from 'express';
import UserRepo from '../repositories/UserRepo/UserRepo';
import UserController from '../controllers/user/UserController';


const userRepoObj = new UserRepo();
const userController = new UserController(userRepoObj);
const userRoutes = express.Router();


// userRoutes.post('/v1/users',  (req:Request, res: Response) => {
//     return userController.post(req, res)
// });

userRoutes.post('/users',  userController.post.bind(userController))
userRoutes.get('/users', userController.findAllUser.bind(userController));

export default userRoutes;
