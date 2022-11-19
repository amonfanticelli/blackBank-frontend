import { Section } from "./style";
import { ListDashboard } from "../List";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const SectionDashboard = () => {
  const { handleGetTransactions } = useContext(UserContext);

  return (
    <Section>
      <h2>Minhas Transações</h2>
      <div>
        <button onClick={() => handleGetTransactions()}>
          Todas Transações
        </button>

        <button onClick={() => handleGetTransactions("credited")}>
          Creditado
        </button>

        <button onClick={() => handleGetTransactions("debited")}>
          Debitado
        </button>
      </div>
      <ListDashboard />
    </Section>
  );
};

export { SectionDashboard };
