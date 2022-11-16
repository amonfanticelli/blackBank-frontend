import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup.string(),
  password: yup.string(),
});
