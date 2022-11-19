import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required("é necessário um usuário"),
  password: yup.string().required("é necessário uma senha"),
});
