import { Section } from "./style";
import { ListDashboard } from "../List";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const SectionDashboard = () => {
  const { transaction, setTransaction } = useContext(UserContext);

  const filterCredited = transaction.filter((transact) => {
    return transact.type === "credited";
  });

  const filterDebited = transaction.filter((transact) => {
    return transact.type === "debited";
  });
  const filterNone = transaction.filter((transact) => {
    return transact;
  });

  return (
    <Section>
      <h2>Minhas Transações</h2>
      <div>
        <button onClick={() => setTransaction(filterNone)}>
          Todas Transações
        </button>

        <button onClick={() => setTransaction(filterCredited)}>
          Creditado
        </button>

        <button onClick={() => setTransaction(filterDebited)}>Debitado</button>
      </div>
      <ListDashboard />
    </Section>
  );
};

export { SectionDashboard };
