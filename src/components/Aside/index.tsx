import {
  Aside,
  ButtonAside,
  TitleAside,
  TotalBalance,
  FormDashboard,
} from "./style";
import { Form } from "../Form/style";
import Input from "../Input";
import { transactionSchema } from "../../schema/transactionSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { ICreateTransaction } from "../../interfaces";

const AsideDashboard = () => {
  const { handlePostTransaction, account } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTransaction>({
    resolver: yupResolver(transactionSchema),
  });
  return (
    <Aside>
      <FormDashboard onSubmit={handleSubmit(handlePostTransaction)}>
        <TitleAside>Faça uma Transação</TitleAside>
        <Input
          id="usernameCredited"
          placeholder="Digite o nome do usuário que irá receber"
          label="Destinatário"
          {...register("usernameCredited")}
          error={errors?.usernameCredited}
          type="text"
        />
        <Input
          id="value"
          placeholder="Digite o valor"
          label="Valor"
          {...register("value")}
          error={errors?.value}
          type="number"
        />

        <ButtonAside>Enviar Quantia</ButtonAside>

        <TotalBalance>
          Saldo:{" "}
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(account.balance)}
          </span>{" "}
        </TotalBalance>
      </FormDashboard>
    </Aside>
  );
};

export default AsideDashboard;
