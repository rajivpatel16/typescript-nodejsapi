"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(userRepo) {
        this.repo = userRepo;
    }
    post(req, res) {
        try {
            const data = req.body;
            const item = this.repo.addUser(data);
            res.send(item);
        }
        catch (error) {
            console.log(error.stack);
        }
    }
    findAllUser(req, res) {
        try {
            const item = this.repo.getAllUser();
            res.send(item);
        }
        catch (error) {
            console.log(error.stack);
        }
    }
}
exports.default = UserController;
