import * as yup from "yup";

export const transactionSchema = yup.object().shape({
  value: yup
    .number()
    .required("é necessário um valor")
    .min(1, "valor não pode ser menor que 1"),
  usernameCredited: yup
    .string()
    .required("é necessário um destinatário")
    .min(3, "usuário precisa ter no mínimo 3 caracteres"),
});
