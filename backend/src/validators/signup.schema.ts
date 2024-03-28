import { validationMessages } from "../constants/validationMessages";
const yup = require("yup");

const signupSchema = yup.object({
  body: yup.object({
      firstName: yup
      .string()
      .required(validationMessages.required("firstname")),
      lastName: yup
      .string()
      .required(validationMessages.required("lastname")),
      businessname: yup
      .string()
      .required(validationMessages.required("Businessname")),
      city: yup
      .string()
      .required(validationMessages.required("City")),
      street: yup
      .string()
      .required(validationMessages.required("Street")),
      zipcode: yup
      .string()
      .required(validationMessages.required("Zipcode")),
    email: yup
      .string()
      .email(validationMessages.email)
      .required(validationMessages.required("Email")),
    password: yup
      .string()
      .min(6, validationMessages.password.min)
      .max(255, validationMessages.password.max)
      .required(validationMessages.required("Password")),
    // clan:yup
    //   .string()
    //   .required(validationMessages.required("ClanName")),  
  })
});

export default signupSchema;    