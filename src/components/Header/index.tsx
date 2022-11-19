import { Header, ContainerHeader } from "./style";
import HeaderImg from "../../img/ng.jpg";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const HeaderDashboard = () => {
  const { logout } = useContext(UserContext);
  return (
    <Header>
      <ContainerHeader>
        <img src={HeaderImg} alt="" />
        <button onClick={() => logout()}>Logout</button>
      </ContainerHeader>
    </Header>
  );
};

export default HeaderDashboard;
