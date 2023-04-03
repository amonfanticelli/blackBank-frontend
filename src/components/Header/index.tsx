import { Header, ContainerHeader } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export const HeaderDashboard = () => {
  const { logout } = useContext(UserContext);
  return (
    <Header>
      <ContainerHeader>
        <h1>Black Bank</h1>
        <button onClick={() => logout()}>Logout</button>
      </ContainerHeader>
    </Header>
  );
};
