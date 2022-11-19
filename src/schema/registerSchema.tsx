import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup.string().required().min(3),
  password: yup
    .string()
    .required("deve conter uma senha")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .min(8),
});
