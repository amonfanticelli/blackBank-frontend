import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string(),
  password: yup.string(),
});
