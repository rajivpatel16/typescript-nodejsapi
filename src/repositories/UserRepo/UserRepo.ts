
/*
  Need to call here Model in Repo to access the database
  */

class UserRepo {
  userArray:any = [];
  
  addUser(user:object) {
    return this.userArray.push(user);
  }

  getAllUser() {
    return this.userArray;
  }
  
}

export default UserRepo;