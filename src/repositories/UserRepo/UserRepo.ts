import UserInterface from "../../Interface/UserInterface";
import * as fs from "fs";
/*
  Need to call here Model in Repo to access the database
  */

class UserRepo implements UserInterface {
  userArray: any = [];

  addUser(data: Array<Object>): void {
    return fs.writeFile(
      "user.json",
      JSON.stringify(data),
      {
        encoding: "utf8",
        flag: "w",
        mode: 0o666,
      },
      (err) => {
        if (err) console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("user.json", "utf8"));
        }
      }
    );
  }

  getAllUser(callback:Function): void {
     return fs.readFile('user.json', 'utf8', function(err, data){
      if(err) {
        console.log(err)
      }
      return callback(data);
    });
  }
}

export default UserRepo;
