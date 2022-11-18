import * as yup from "yup";

export const transactionSchema = yup.object().shape({
  value: yup.number().required().min(1),
  usernameCredited: yup.string().required().min(3),
});
