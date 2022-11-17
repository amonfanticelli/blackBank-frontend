import { Main } from "../../components/Main/style";
import HeaderDashboard from "../../components/Header";
import AsideDashboard from "../../components/Aside";

const Dashboard = () => {
  return (
    <>
      <HeaderDashboard />
      <Main>
        <AsideDashboard />
      </Main>
    </>
  );
};

export default Dashboard;
