import { List, ListItem } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const ListDashboard = () => {
  const { transaction } = useContext(UserContext);
  return (
    <List>
      {transaction.map((transact) => (
        <ListItem type={transact.type} key={transact.id}>
          <div></div>
          <h2>
            {" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(transact.value)}
          </h2>
          <span>{new Date(transact.createdAt).toLocaleString()}</span>
        </ListItem>
      ))}
    </List>
  );
};

export { ListDashboard };
