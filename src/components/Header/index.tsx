import { Header } from "./style";
import HeaderImg from "../../img/ng.jpg";

const HeaderDashboard = () => {
  return (
    <Header>
      <img src={HeaderImg} alt="" />
      <button>Logout</button>
    </Header>
  );
};

export default HeaderDashboard;
