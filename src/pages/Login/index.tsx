import { Container } from "../../components/Container/style";
import { Form } from "../../components/Form/style";
import { MainTitle, Button } from "./style";
import { Img } from "../../components/Figure";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schema/loginSchema";
import { IUserLogin } from "../../interfaces";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Container>
        <Form>
          <MainTitle>NG CA$H</MainTitle>
          <Input
            id="username"
            placeholder="Digite aqui seu login"
            label="Login"
            {...register("username")}
            error={errors?.username}
            type="text"
          />
          <Input
            id="password"
            placeholder="Digite aqui sua senha"
            label="Senha"
            {...register("password")}
            error={errors?.password}
            type="text"
          />

          <Button> Entrar</Button>
          <span>Ainda não possui uma conta? </span>
          <Link to="/register"> Cadastre-se</Link>
        </Form>

        <Img />
      </Container>
    </motion.div>
  );
};

export default Login;
