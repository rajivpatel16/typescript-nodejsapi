import { Request, Response, NextFunction } from "express";

const Joi = require("joi");

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
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
