import joi from "joi";

export const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});

export const signUpSchema = joi.object({
  name: joi.string().min(1).trim().required(),
  email: joi.string().email().required(),
  password: joi.string().min(4).required(),
  confirmPassword: joi.valid(joi.ref("password")).required()
});
