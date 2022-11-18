import { Main } from "../../components/Main/style";
import HeaderDashboard from "../../components/Header";
import AsideDashboard from "../../components/Aside";
import { SectionDashboard } from "../../components/Section";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect } from "react";

const Dashboard = () => {
  const { handleGetAccountById, handleGetTransactions } =
    useContext(UserContext);

  useEffect(() => {
    handleGetAccountById();
    handleGetTransactions();
  }, []);
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
