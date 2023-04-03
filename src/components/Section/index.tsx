import { Section } from "./style";
import { ListDashboard } from "../List";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import DashboardImg from "../../assets/travel.svg";
import { ImgDashboard } from "./style";

const SectionDashboard = () => {
  const { handleGetTransactions, transaction } = useContext(UserContext);

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
      {!transaction.length ? (
        <>
          <h2>Você não possui nenhuma transação nessa aba</h2>
          <ImgDashboard src={DashboardImg} alt="" />
        </>
      ) : (
        <>
          <ListDashboard />
        </>
      )}
    </Section>
  );
};

export { SectionDashboard };
