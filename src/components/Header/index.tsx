import { Header } from "./style";
import HeaderImg from "../../img/ng.jpg";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const HeaderDashboard = () => {
  const { logout } = useContext(UserContext);
  return (
    <Header>
      <img src={HeaderImg} alt="" />
      <button onClick={() => logout()}>Logout</button>
    </Header>
  );
};

export default HeaderDashboard;
