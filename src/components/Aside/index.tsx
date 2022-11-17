import { Aside } from "./style";
import { Form } from "../Form/style";
import Input from "../Input";

const AsideDashboard = () => {
  return (
    <Aside>
      <Form>
        <Input
          id="username"
          placeholder="Digite o nome do usuário que irá receber"
          label="Destinatário"
          // {...register("username")}
          type="text"
        />
        <Input
          id="value"
          placeholder="Digite o valor"
          label="Valor"
          // {...register("username")}
          type="number"
        />
      </Form>
    </Aside>
  );
};

export default AsideDashboard;
