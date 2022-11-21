import { Container } from "../../components/Container/style";
import { Form } from "../../components/Form/style";
import { MainTitle, Button } from "./style";
import { Img } from "../../components/Figure";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schema/registerSchema";
import { IUser } from "../../interfaces";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Singup = () => {
  const { handleRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Container>
        <Form onSubmit={handleSubmit(handleRegister)}>
          <MainTitle>NG CA$H</MainTitle>
          <Input
            id="username"
            placeholder="Digite seu nome de usuário"
            label="Usuário de login"
            {...register("username")}
            error={errors?.username}
            type="text"
          />
          <Input
            id="password"
            placeholder="Digite sua senha"
            label="Senha"
            {...register("password")}
            error={errors?.password}
            type="password"
          />

          <Button type="submit"> Registrar</Button>

          <Link to="/">Clique aqui para voltar a página de login</Link>
        </Form>

        <Img />
      </Container>
    </motion.div>
  );
};

export default Singup;
