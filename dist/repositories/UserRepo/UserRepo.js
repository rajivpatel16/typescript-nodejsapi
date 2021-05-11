"use strict";
/*
  Need to call here Model in Repo to access the database
  */
Object.defineProperty(exports, "__esModule", { value: true });
class UserRepo {
    constructor() {
        this.userArray = [];
    }
    addUser(user) {
        return this.userArray.push(user);
    }
    getAllUser() {
        return this.userArray;
    }
}
exports.default = UserRepo;
