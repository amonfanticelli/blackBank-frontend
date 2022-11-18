import { List } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const ListDashboard = () => {
  const { transaction } = useContext(UserContext);
  return (
    <List>
      {transaction.map((transact) => (
        <li key={transact.id}>
          <div></div>
          <h2>{transact.value}</h2>
          <span>{transact.id}</span>
        </li>
      ))}
    </List>
  );
};

export { ListDashboard };
