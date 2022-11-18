import { List } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const ListDashboard = () => {
  const { transaction, handleGetAccountById } = useContext(UserContext);
  return (
    <List>
      {transaction.map((transact) => (
        <li key={transact.id}>
          <div></div>
          <h2>
            {" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(transact.value)}
          </h2>
          <span>{transact.createdAt}</span>
        </li>
      ))}
    </List>
  );
};

export { ListDashboard };
