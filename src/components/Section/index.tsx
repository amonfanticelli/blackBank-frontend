import { Section } from "./style";
import { List } from "../List/style";

const SectionDashboard = () => {
  return (
    <Section>
      <h2>Minhas Transações</h2>
      <div>
        <button>Listar finanças</button>
      </div>
      <List />
    </Section>
  );
};

export { SectionDashboard };
