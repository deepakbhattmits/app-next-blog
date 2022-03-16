import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// form validation rules
const validationContactSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      "email should accept regex  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/"
    ),
  name: yup.string().required("Name is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});
export const isValidEmail = (email: string) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return validRegex.test(email);
};
export const formOptions = () => {
  return { resolver: yupResolver(validationContactSchema) };
};
