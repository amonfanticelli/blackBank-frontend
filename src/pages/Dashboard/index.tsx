import { Main } from "../../components/Main/style";
import HeaderDashboard from "../../components/Header";
import AsideDashboard from "../../components/Aside";
import { SectionDashboard } from "../../components/Section";

const Dashboard = () => {
  return (
    <>
      <HeaderDashboard />
      <Main>
        <AsideDashboard />
        <SectionDashboard />
      </Main>
    </>
  );
};

export default Dashboard;
