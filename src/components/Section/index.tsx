import { Section } from "./style";
import { ListDashboard } from "../List";

const SectionDashboard = () => {
  return (
    <Section>
      <h2>Minhas Transações</h2>
      <div>
        <button>Todas Transações</button>
        <button>Creditado</button>
        <button>Debitado</button>
      </div>
      <ListDashboard />
    </Section>
  );
};

export { SectionDashboard };
