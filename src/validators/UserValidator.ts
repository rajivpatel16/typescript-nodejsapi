import { Request, Response, NextFunction } from "express";

const Joi = require("joi");

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().custom((value:string, helpers:any) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(value).toLowerCase())) {
      return helpers.message('Enter currect email address');
    } 
    return value;
  }),
  age:  Joi.number().custom((value:number , helpers:any) => {
        if(value <= 18) {
          return helpers.message('Age must be greater than 18');
        }
        if(value > 50) {
          return helpers.message('Age must be less than or equal to 50');
        }
        return value;
  })
});

export const validate = (schema: object) => (
  request: Request,
  response: Response,
  next: NextFunction
) => {
   
  if (!schema) {
      console.log('ddd')
    return next();
  }
};


const validateEmail = (email:string, helpers:string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}