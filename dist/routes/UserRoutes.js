"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRepo_1 = __importDefault(require("../repositories/UserRepo/UserRepo"));
const UserController_1 = __importDefault(require("../controllers/user/UserController"));
const userRepoObj = new UserRepo_1.default();
const userController = new UserController_1.default(userRepoObj);
const userRoutes = express_1.default.Router();
userRoutes.post('v1/users', (req, res) => {
    res.send('dd');
});
userRoutes.get('v1/users', userController.findAllUser);
exports.default = userRoutes;
